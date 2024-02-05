import React from 'react';
import { Box, Container, Fade, Grow, Typography } from '@mui/material';
import Button from 'components/Button';
import Joke from './Joke';
import PunchLine from './PunchLine';
import { type Joke as JokeType } from 'types';

interface Props {
	joke: JokeType | null;
	isLoading: boolean;
	showPunchLine: boolean;
	hasError: boolean;
	toggleShowPunchLine: () => void;
}

function JokeContent({
	joke,
	isLoading,
	showPunchLine,
	hasError,
	toggleShowPunchLine,
}: Props) {
	return (
		<Container>
			{isLoading && (
				<Typography variant="h6" my={10} textAlign="center" color="grey">
					LOADING YOUR JOKE...
				</Typography>
			)}
			{!isLoading && hasError && (
				<Typography variant="h6" my={10} textAlign="center" color="error">
					THERE WAS AN ERROR LOADING YOUR JOKE.
				</Typography>
			)}
			{!isLoading && !hasError && joke && (
				<>
					<Grow in>
						<Box>
							<Joke joke={joke.joke} />
							<Box display="flex" justifyContent="center">
								<Button
									variant="contained"
									color="primary"
									onClick={toggleShowPunchLine}
								>
									{showPunchLine ? 'Hide PunchLine' : 'Show PunchLine'}
								</Button>
							</Box>
						</Box>
					</Grow>
					<Fade in={showPunchLine}>
						<Box>
							<PunchLine punchLine={joke.punchLine} />
						</Box>
					</Fade>
				</>
			)}
		</Container>
	);
}

export default JokeContent;
