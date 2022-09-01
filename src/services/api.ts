import axios from 'axios';

export const getNews = async (keyword: string) => {
	const date = new Date();
	const dateFormated = date
		.toLocaleDateString()
		.split('/')
		.reverse()
		.join('-');

	const newsArray = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=${dateFormated}&sortBy=popularity&language=pt&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`);
	return newsArray.data.articles;
};
