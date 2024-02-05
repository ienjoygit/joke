import axios from 'axios';
import { apiUrl } from 'config';
import { Joke } from 'types';

const api = axios.create({
	baseURL: apiUrl,
});

export const fetchRandomJoke = () => api.get<Joke>(`${apiUrl}/joke/random`);
