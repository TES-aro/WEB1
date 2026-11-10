import { TextField, Button } from "@mui/material";
import {useState} from 'react';

export const SearchBar = () => {
  const [name, setName] = useState('');
  const handleChange = (e: any) => {
    const {value} = e.target;
    setName(value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`you have attempted to find user: ${name}`)
  }

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
  )
}
