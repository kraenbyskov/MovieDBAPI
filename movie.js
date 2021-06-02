import GetUrlParams from './components/GetUrlParams.js';
import FetchMyData from './components/FetchMyData.js';
import CreateElement from './components/CreateElement.js';

const id = GetUrlParams('id');

const fetch = async () => {
	const FetchSingleMovie = FetchMyData({ Endpoint: id });
	const FetchSingleMovieCredits = FetchMyData({ Endpoint: `${id}/credits` });
	const FetchSingleMovieKeywords = FetchMyData({ Endpoint: `${id}/keywords` });

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

	await FetchSingleMovieCredits.then((Credits) => {
		Credits.cast.slice(0, 5).map((actores) => {
			console.log(actores);
			const actoresCard = CreateElement({
				elmt: 'a',
				src: `./actores.html?&id=${actores.id} `,
				className: 'actoresCard'
			});
			const Actores = CreateElement({
				elmt: 'h2',
				content: actores.name
			});
			const Image = CreateElement({
				elmt: 'img',
				src: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actores.profile_path}`,
				className: 'actoresImage'
			});
			const character = CreateElement({
				elmt: 'p',
				content: actores.character
			});
			actoresCard.appendChild(Actores);
			actoresCard.appendChild(Image);
			actoresCard.appendChild(character);
			root.appendChild(actoresCard);
		});
	});

	await FetchSingleMovieKeywords.then((keywords) => {
		console.log(keywords);
		keywords.keywords.map((keyword) => {
			const Name = CreateElement({
				elmt: 'a',
				content: keyword.name,
				src: `./keywords.html?&id=${keyword.id} `,
				className: 'keywords'
			});
			root.appendChild(Name);
		});
	});
};

fetch();
