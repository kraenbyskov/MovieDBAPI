import GetUrlParams from './components/GetUrlParams.js';
import FetchMyData from './components/FetchMyData.js';
import CreateElement from './components/CreateElement.js';

const input = document.getElementById('input');
const search = document.getElementById('search');

console.log(input.value);

search.addEventListener('click', () => {
	root.innerHTML = '';
	const GetSearchResults = FetchMyData({ type: 'search', Endpoint: 'movie', Query: input.value });
	GetSearchResults.then((data) => {
		data.results.map((Movies) => {
			const Card = CreateElement({
				elmt: 'a',
				src: `./movie.html?&id=${Movies.id} `,
				className: 'Card'
			});

			const title = CreateElement({
				elmt: 'h2',
				content: Movies.original_title
			});
			const Image = CreateElement({
				elmt: 'img',
				src: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${Movies.poster_path}`
			});
			Card.appendChild(title);
			Card.appendChild(Image);
			root.appendChild(Card);
		});
	});
});
