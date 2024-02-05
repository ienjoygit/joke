import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import JokeContent from 'components/JokeContent';
import { fetchRandomJoke } from 'services/apis';
import { Joke } from 'types';

function App() {
	const [joke, setJoke] = useState<Joke | null>(null);
	const [isJokeLoading, setIsJokeLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [showPunchLine, setShowPunchLine] = useState(false);

	const getRandomJoke = async () => {
		try {
			setIsJokeLoading(true);
			setJoke(null);
			setHasError(false);
			setShowPunchLine(false);
			const { data: randomJoke } = await fetchRandomJoke();
			setJoke(randomJoke);
		} catch (err) {
			setHasError(true);
		} finally {
			setIsJokeLoading(false);
		}
	};

	const toggleShowPunchLine = () => setShowPunchLine(!showPunchLine);

	useEffect(() => {
		getRandomJoke();
	}, []);

	return (
		<>
			<Header isLoading={isJokeLoading} getRandomJoke={getRandomJoke} />
			<JokeContent
				joke={joke}
				isLoading={isJokeLoading}
				showPunchLine={showPunchLine}
				hasError={hasError}
				toggleShowPunchLine={toggleShowPunchLine}
			/>
		</>
	);
}

export default App;
