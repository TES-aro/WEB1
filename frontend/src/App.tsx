import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import './App.css';

function Player({player}){
	return(
		<div>
			<p> here be player </p>
		</div>
	)
}

function Home(){
	return(
		<div>
			<SearchBar />
			<p> you're home! </p>
		</div>
	)
}

function Events({events}){
	return(
		<div>
		 <p> here should be events </p>
		</div>
	)
}
function App() {
	const [player, setPlayer] = useState();
	const [events, setEvents] = useState();
	return(
		<div>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route
					path='/player'
					element={ <Player player={player}/> }
				/>
				<Route
					path='/events'
					element={ <Events events={events}/> }
				/>
			</Routes>
		</div>
	)
	
}

export default App;
