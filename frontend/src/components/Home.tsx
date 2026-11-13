import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

export function Home(){
	const [url, setUrl] = useState('/player');
	const handeUrl = (e) => {
		setUrl(e.target.value);
	};
	return(
		<div>
			<h3> Silly RuneScape API webpage </h3>
			<FormControl>
				<FormLabel id="SearchControl"> Search </FormLabel>
				<RadioGroup
					aria-labelledby="SearchControl"
					name='searchRadioButtons'
					value={url}
					onChange={handeUrl}
				>
					<FormControlLabel value='/player' control={<Radio />} label='player info' />
					<FormControlLabel value='/events' control={<Radio />} label='Event list' />
				</RadioGroup>
			</FormControl>
			<SearchBar url={url}/>
			<p>
        Sadly due to CORS I couldn't get the data I wanted directly from the
        API and instead had to set up a simple server to "wash" the data.
				<br/>
        usernames have to fit /^[A-Za-z0-9_]+$/ and be at most 12 characters
        long. Zezima is an easy, existing username to check.
				<br />
        The code is rather bodged with poor state management, barely existing
        cacheing, and in general forced to fit the exercise – For one, I would
        not have done pages in simila manner for actually useable site.
			</p>
		</div>
	);
}
