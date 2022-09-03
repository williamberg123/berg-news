export const formatDate = (days: number = 0) => {
	const milliseconds_for_day = 24 * 60 * 60 * 1000;
	const today = new Date().getTime();

	const date = new Date(today - days * milliseconds_for_day).toLocaleDateString();

	const formatedDate = date.split('/').reverse().join('-');
	return formatedDate;
};
