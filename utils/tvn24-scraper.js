'use strict';

import cheerio from 'cheerio';
import {set, get, del} from 'idb-keyval';

const getPolandArticles = async () => {
	await get('pl-articles').then(async val => {
		const cacheTimestamp = await get('cc-timestamp-pl');
		const currentTimestamp = Math.floor(Date.now() / 1000);

		// Check whether cached data exists and if it does, whether it's older than one week
		if (val === undefined || cacheTimestamp === undefined || (currentTimestamp - cacheTimestamp) > 1800) {
			await del('pl-articles');
			await del('cc-timestamp-pl');

			const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.tvn24.pl/polska');
			const html = await response.text();

			set('pl-articles', html);
			set('cc-timestamp-pl', currentTimestamp);
		} else {
			console.log('Using cached data (poland)');
		}

		return val;
	});

	const $ = await cheerio.load(await get('pl-articles'));

	const articles = [
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(2)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(3)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(4)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(5)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(6)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(7)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(8)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(9)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(10)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(11)'
	];

	const result = [...articles].map(selector => {
		const title = $(selector).find('article').find('a').find('h2').text();
		const description = $(selector).find('p').text();
		const url = $(selector).find('article').find('a').attr('href');

		return {
			title,
			description,
			url
		};
	});

	return result;
};

const getWorldArticles = async () => {
	await get('world-articles').then(async val => {
		const cacheTimestamp = await get('cc-timestamp-world');
		const currentTimestamp = Math.floor(Date.now() / 1000);

		// Check whether cached data exists and if it does, whether it's older than one week
		if (val === undefined || cacheTimestamp === undefined || (currentTimestamp - cacheTimestamp) > 1800) {
			await del('world-articles');
			await del('cc-timestamp-world');

			const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.tvn24.pl/swiat');
			const html = await response.text();

			set('world-articles', html);
			set('cc-timestamp-world', currentTimestamp);
		} else {
			console.log('Using cached data (world)');
		}

		return val;
	});

	const $ = await cheerio.load(await get('world-articles'));

	const articles = [
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(1)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(2)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(3)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(4)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(5)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(6)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(7)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(8)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(9)',
		'#__next > div:nth-child(2) > div > section > div > section.main-content-holder__content-area > div.content-area-elements > section > div > div > div > div:nth-child(10)'
	];

	const result = [...articles].map(selector => {
		const title = $(selector).find('article').find('a').find('h2').text();
		const description = $(selector).find('p').text();
		const url = $(selector).find('article').find('a').attr('href');

		return {
			title,
			description,
			url
		};
	});

	return result;
};

export {
	getPolandArticles,
	getWorldArticles
};
