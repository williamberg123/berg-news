import axios from 'axios';
import { FieldValues } from 'react-hook-form';

export const getNews = async (data: FieldValues) => {
	const { keyword, initial_date, final_date } = data;

	const newsArray = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=${initial_date}&to=${final_date}&sortBy=popularity&language=pt&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`);
	return newsArray.data.articles;
};
