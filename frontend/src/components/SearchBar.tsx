import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const SearchBar = ({url}) => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const URL = url ? url : '/player'

	const handleChange = (e: any) => {
		const { value } = e.target;
		setName(value);
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		navigate(`${URL}/${name}`)
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
