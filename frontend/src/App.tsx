import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { getPlayer } from './services/apiFetch.ts';
import { SearchBar } from './components/SearchBar';
import { ErrorNotif } from './components/ErrorNotif.tsx';
import { Home } from './components/Home.tsx'
import Info from './components/Info.tsx'
import './App.css';

function App() {
	const [err, setErr] = useState('');
	const [players, setPlayers] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		console.log("the state of players has changed.")
	},[players])

	const useError = (message: string) => {
		setErr(message);
		setTimeout(() => {
			setErr('')
		}, 8000)
	}
	const addPlayer = async (name: string) => {
		const id = name.toLowerCase();
		try{
		const info = await getPlayer(id);
		const newPlayers = {...players, [id]: info}
		setPlayers(newPlayers)
		return info;
		} catch(e) {
			console.error(e)
			navigate('/')
			if(!e.message){
				useError("unknown error");
				return;
			}
			useError(e.message)
				return;
		}
	}

	return(
		<div>
			<ErrorNotif message={err} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/player/:username'
					element={ <Info addPlayer={addPlayer} players={players}/> }
				/>
				<Route
					path='/player'
					element={ <Info addPlayer={addPlayer}/> }
				/>
			</Routes>
		</div>
	)
/*
	return(
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/player/:username'
					element={ <Info setErr={useError}/> }
				/>
				<Route
					path='/events:/username'
					element={ <Events setErr={useError}/> }
				/>
				<Route
					path='/player'
					element={ <Info setErr={useError}/> }
				/>
				<Route
					path='/events'
					element={ <Events player={players}/> }
				/>
				<Route
					path='*'
					element={<Navigate to='/' replace />}
				/>
			</Routes>
		</div>
	)
	*/
}

export default App;
