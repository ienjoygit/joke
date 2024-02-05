import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
	joke: string;
}

function Joke({ joke }: Props) {
	return (
		<Box position="relative" my={10}>
			<Typography variant="h4" ml={5}>
				{joke}
			</Typography>
			<Box position="absolute" left="0" top="-20px" zIndex="-1">
				<img src="/img/open-quote.png" alt="opening quote" />
			</Box>
		</Box>
	);
}

export default Joke;
