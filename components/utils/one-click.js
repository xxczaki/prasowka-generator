'use strict';

import React from 'react';

import ExternalLink from '../link';

import {getWlkpArticles, getPolandArticles, getWorldArticles} from './scraper';

const oneClickHandler = async () => {
	const wlkpNews = await getWlkpArticles();
	const plNews = await getPolandArticles();
	const worldNews = await getWorldArticles();

	const wielkopolska = await wlkpNews[Math.floor(Math.random() * wlkpNews.length)];
	const poland = await plNews[Math.floor(Math.random() * plNews.length)];
	const world = await worldNews[Math.floor(Math.random() * worldNews.length)];

	const result = (
		<>
			<div>
				<h1>Wielkopolska:</h1>
				<br/>
				<h3>{wielkopolska.title}</h3>
				<br/>
				<p>{wielkopolska.description} <ExternalLink href={wielkopolska.url}>[CZYTAJ DALEJ]</ExternalLink></p>
				<br/>
				<p>Źródło: <u>Głos Wielkopolski</u></p>
				<br/>
				<hr/>
			</div>
			<div>
				<h1>Polska:</h1>
				<br/>
				<h3>{poland.title}</h3>
				<br/>
				<p>{poland.description.replace(/czytaj|dalej|»/g, '')} <ExternalLink href={poland.url}>[CZYTAJ DALEJ]</ExternalLink></p>
				<br/>
				<p>Źródło: <u>TVN24</u></p>
				<br/>
				<hr/>
			</div>
			<div>
				<h1>Świat:</h1>
				<br/>
				<h3>{world.title}</h3>
				<br/>
				<p>{world.description.replace(/czytaj|dalej|»/g, '')} <ExternalLink href={world.url}>[CZYTAJ DALEJ]</ExternalLink></p>
				<br/>
				<p>Źródło: <u>TVN24</u></p>
				<br/>
				<hr/>
			</div>
		</>
	);

	return result;
};

export default oneClickHandler;
