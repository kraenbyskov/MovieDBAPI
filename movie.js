import GetUrlParams from './components/GetUrlParams.js';
import FetchMyData from './components/FetchMyData.js';
import CreateElement from './components/CreateElement.js';

const id = GetUrlParams('id');

const fetch = async () => {
	const FetchSingleMovie = FetchMyData({ Endpoint: id });

	await FetchSingleMovie.then((Movie) => {
		console.log(Movie);

		const Card = CreateElement({
			className: 'Card'
		});

		const title = CreateElement({
			elmt: 'h2',
			content: Movie.original_title
		});
		const Image = CreateElement({
			elmt: 'img',
			src: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${Movie.poster_path}`
		});
		Card.appendChild(title);
		Card.appendChild(Image);
		root.appendChild(Card);
	});

};

fetch();
