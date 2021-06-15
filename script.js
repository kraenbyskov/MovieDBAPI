import GetUrlParams from './components/GetUrlParams.js';
import FetchMyData from './components/FetchMyData.js';
import CreateElement from './components/CreateElement.js';

const root = document.getElementById('root');

const GetMovies = FetchMyData({ Endpoint: 'popular', Page: GetUrlParams('page') });

GetMovies.then((data) => {
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

/* ==========================================================================
   Next og Back buttons
   ========================================================================== */

const Back = document.getElementById('PageBackwards');
const Next = document.getElementById('PageForward');

const pageNumber = parseInt(GetUrlParams('page'));

Back.addEventListener('click', () => {
	if (GetUrlParams('page') === null) {
		window.location.replace(`./index.html?&page=1`);
	}
	if (pageNumber > 1) {
		window.location.replace(`./index.html?&page=${pageNumber - 1}`);
	}
	if (pageNumber === 1) {
		Back.setAttribute('class', 'button disableButton');
	}
});

Next.addEventListener('click', () => {
	if (GetUrlParams('page') === null) {
		window.location.replace(`./index.html?&page=2`);
	} else {
		window.location.replace(`./index.html?&page=${pageNumber + 1}`);
	}
});

