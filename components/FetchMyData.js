const FetchMyData = ({ Endpoint, Type = 'movie', Page = 1, Query }) => {


	const key = "7c105b21789fdf773ab798b1c284f40e";


	let startUrl = `https://api.themoviedb.org/3/${Type}/${Endpoint}?api_key=${key}&language=en-US&page=${Page}`;

	if (Query) {
		startUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${Query}`;
	}
	const url = `${startUrl}`;


	const fetchMyData = new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((result) => resolve(result))
			.catch((err) => {
				reject(err);
			});
	});
	return fetchMyData;
};

export default FetchMyData;
