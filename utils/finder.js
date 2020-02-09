'use strict';

import React from 'react';

import ExtLink from '../components/extlink';

import {getWlkpArticles} from './glos-wlkp-scraper';
import {getPolandArticles, getWorldArticles} from './tvn24-scraper';

// Generator
const getArticles = async (amount, region, source) => {
	if (region === 'wlkp') {
		const wlkpNews = await getWlkpArticles();
		const wielkopolska = await wlkpNews.slice(0, amount);

		return wielkopolska.map(el => (
			<div key={el.title} style={{border: '2px solid white', padding: '1em'}}>
				<h3>{el.title}</h3>
				<p>{el.description} <ExtLink href={el.url}>[CZYTAJ DALEJ]</ExtLink></p>
				<hr/>
				<p>Źródło: <u>Głos Wielkopolski</u></p>
			</div>
		));
	}

	if (region === 'poland') {
		const plNews = await getPolandArticles();
		const poland = await plNews.slice(0, amount);

		return poland.map(el => (
			<div key={el.title} style={{border: '2px solid white', padding: '1em'}}>
				<h3>{el.title}</h3>
				<p>{el.description} <ExtLink href={el.url}>[CZYTAJ DALEJ]</ExtLink></p>
				<hr/>
				<p>Źródło: <u>{source === 'tvn24' ? 'TVN24' : ''}</u></p>
			</div>
		));
	}

	const worldNews = await getWorldArticles();
	const world = await worldNews.slice(0, amount);

	return world.map(el => (
		<div key={el.title} style={{border: '2px solid white', padding: '1em'}}>
			<h3>{el.title}</h3>
			<p>{el.description} <ExtLink href={el.url}>[CZYTAJ DALEJ]</ExtLink></p>
			<hr/>
			<p>Źródło: <u>{source === 'tvn24' ? 'TVN24' : ''}</u></p>
		</div>
	));
};

export {
	getArticles
};
