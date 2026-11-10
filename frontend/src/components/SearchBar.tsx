import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { getPlayer } from '../services/apiFetch'; 

export const SearchBar = ({setPlayer, setEvents}) => {
	const [name, setName] = useState('');
	const handleChange = (e: any) => {
		const { value } = e.target;
		setName(value);
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try{
			const data = await getPlayer.data(name);
			console.log(data)
		} catch(e){
			console.log(e)
		}
		console.log(`you have attempted to find user: ${name}`);
	};

	return(
		<form onSubmit={handleSubmit}>
			<TextField
				label="username"
				name="username"
				value={name}
				onChange={handleChange}
				size="medium"
				variant="outlined"
				placeholder="username"
			/>
			<Button type="submit"> Search </Button>
		</form>
	);
};
