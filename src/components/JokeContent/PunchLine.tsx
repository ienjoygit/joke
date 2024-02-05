import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
	punchLine: string;
}

function PunchLine({ punchLine }: Props) {
	return (
		<Box position="relative" my={10} textAlign="right">
			<Typography variant="h4" mr={5}>
				{punchLine}
			</Typography>
			<Box position="absolute" right="0" top="-20px" zIndex="-1">
				<img src="/img/close-quote.png" alt="closing quote" />
			</Box>
		</Box>
	);
}

export default PunchLine;
