import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [errors, setErrors] = useState([]);

	async function fetchData() {
		const res = await fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=d5bf760baf0734860cc8c0f30c24aad5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		);
		res
			.json()
			.then(res => setMovies(res))
			.catch(err => setErrors(err));
	}

	useEffect(() => {
		fetchData();
	});

	return (
		<div className='App'>
			<p>Some text</p>
		</div>
	);
};

export default App;
