import axios from 'axios';

export const getNews = async () => {
	const newsArray = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-08-24&sortBy=popularity&language=pt&apiKey=${import.meta.env.VITE_APIKEY}`);
	console.log(newsArray.data);
	return newsArray.data.articles;
};
