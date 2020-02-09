'use strict';

import React from 'react';

import ExtLink from '../components/extlink';

import {getWlkpArticles} from './glos-wlkp-scraper';
import {getPolandArticles, getWorldArticles} from './tvn24-scraper';

// Generator
const oneClickHandler = async () => {
	// Download articles from all regions
	const wlkpNews = await getWlkpArticles();
	const plNews = await getPolandArticles();
	const worldNews = await getWorldArticles();

	// Pick random article from each array
	const wielkopolska = await wlkpNews[Math.floor(Math.random() * wlkpNews.length)];
	const poland = await plNews[Math.floor(Math.random() * plNews.length)];
	const world = await worldNews[Math.floor(Math.random() * worldNews.length)];

	const result = (
		<>
			<article style={{border: '2px solid white', padding: '1em', maxWidth: '50em', marginBottom: '1em'}}>
				<h1><u>Wielkopolska:</u></h1>
				<h3>{wielkopolska.title}</h3>
				<p>{wielkopolska.description} <ExtLink href={wielkopolska.url}>[CZYTAJ DALEJ]</ExtLink></p>
				<hr/>
				<p>Źródło: <u>Głos Wielkopolski</u></p>
			</article>
			<article style={{border: '2px solid white', padding: '1em', maxWidth: '50em', marginBottom: '1em'}}>
				<h1><u>Polska:</u></h1>
				<h3>{poland.title}</h3>
				<p>{poland.description.replace(/czytaj|dalej|»/g, '')} <ExtLink href={poland.url}>[CZYTAJ DALEJ]</ExtLink></p>
				<hr/>
				<p>Źródło: <u>TVN24</u></p>
			</article>
			<article style={{border: '2px solid white', padding: '1em', maxWidth: '50em', marginBottom: '1em'}}>
				<h1><u>Świat:</u></h1>
				<h3>{world.title}</h3>
				<p>{world.description.replace(/czytaj|dalej|»/g, '')} <ExtLink href={world.url}>[CZYTAJ DALEJ]</ExtLink></p>
				<hr/>
				<p>Źródło: <u>TVN24</u></p>
			</article>
			<footer>
				<b>Prawa autorskie do artykułów należą do ich autorów.</b>
			</footer>
		</>
	);

	return result;
};

export {
	oneClickHandler
};
