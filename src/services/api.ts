import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { formatDate } from '../utils/formatDate';

export const getNews = async (data: FieldValues) => {
	const { keyword, date_selection } = data;
	const today = formatDate();

	const newsArray = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=${date_selection}&to=${today}&sortBy=popularity&language=pt&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`);
	return newsArray.data.articles;
};
