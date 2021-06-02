import GetUrlParams from './components/GetUrlParams.js';
import FetchMyData from './components/FetchMyData.js';
import CreateElement from './components/CreateElement.js';

const id = GetUrlParams('id');

const fetch = async () => {
	const FetchSingleKeywords = FetchMyData({ Endpoint: `${id}`, Type: 'person' });
	const FetchSingleMovieCredits = FetchMyData({ Endpoint: `${id}/movie_credits`, Type: 'person' });

	await FetchSingleKeywords.then((Actore) => {
		console.log(Actore);

		const Actores = CreateElement({
			elmt: 'h2',
			content: Actore.name
		});
		const Biography = CreateElement({
			elmt: 'p',
			content: Actore.biography
		});
		const Image = CreateElement({
			elmt: 'img',
			src: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${Actore.profile_path}`,
			className: 'actoresImage',
			Attribute: [
				{
					type: 'style',
					input: 'width:100px;'
				}
			]
		});

		root.appendChild(Actores);
		root.appendChild(Biography);
		root.appendChild(Image);
	});
	await FetchSingleMovieCredits.then((Actore) => {
		Actore.cast.slice(0, 30).map((movies) => {
			const Card = CreateElement({
				elmt: 'a',
				src: `./movie.html?&id=${movies.id} `,
				className: 'Card'
			});

			const title = CreateElement({
				elmt: 'h2',
				content: movies.original_title
			});
			const Image = CreateElement({
				elmt: 'img',
				src: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`,
				Attribute: [
					{
						type: 'style',
						input: 'width:100px;'
					}
				]
			});
			Card.appendChild(title);
			Card.appendChild(Image);
			root.appendChild(Card);
		});
	});
};

fetch();
