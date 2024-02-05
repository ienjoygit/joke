import React from 'react';
import { Box, Container, Divider, Link } from '@mui/material';
import Button from 'components/Button';

interface Props {
	getRandomJoke: () => void;
	isLoading: boolean;
}

function Header({ getRandomJoke, isLoading }: Props) {
	return (
		<header>
			<Container>
				<Box
					display="flex"
					flexDirection={{ sm: 'row', xs: 'column' }}
					alignItems="center"
					justifyContent="space-between"
					textAlign="center"
					gap={2}
					my={5}
				>
					<Button
						variant="contained"
						color="success"
						disabled={isLoading}
						onClick={getRandomJoke}
					>
						Get A New Random Joke
					</Button>
					<Box textAlign="center">
						<Link
							href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							View API Docs
						</Link>
					</Box>
				</Box>
			</Container>
			<Divider />
		</header>
	);
}

export default Header;
