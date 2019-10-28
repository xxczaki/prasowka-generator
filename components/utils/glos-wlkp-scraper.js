'use strict';

import cheerio from 'cheerio';
import {set, get, del} from 'idb-keyval';

const getWlkpArticles = async () => {
	await get('wlkp-articles').then(async val => {
		const cacheTimestamp = await get('cc-timestamp-wlkp');
		const currentTimestamp = Math.floor(Date.now() / 1000);

		// Check whether cached data exists and if it does, whether it's older than one week
		if (val === undefined || cacheTimestamp === undefined || (currentTimestamp - cacheTimestamp) > 1800) {
			await del('wlkp-articles');
			await del('cc-timestamp-wlkp');

			const response = await fetch('https://gloswielkopolski.pl/wiadomosci/wielkopolska/');
			const html = await response.text();

			set('wlkp-articles', html);
			set('cc-timestamp-wlkp', currentTimestamp);
		} else {
			console.log('Using cached data (wielkopolska)');
		}
	});

	const $ = await cheerio.load(await get('wlkp-articles'));

	const articles = [
		'#glowna-kolumna > section > article:nth-child(3) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(9) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(11) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(17) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(19) > a > div > div.columns.small-7.medium-6'
	];

	const reserveArticles = [
		'#glowna-kolumna > section > article:nth-child(24) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(29) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(30) > a > div > div.columns.small-7.medium-6'
	];

	const result = [...articles].map(selector => {
		const reserve = reserveArticles[Math.floor(Math.random() * reserveArticles.length)];

		if ($(selector).find('h2').hasClass('plus') || $(selector).find('h2').text() === '') {
			const title = $(reserve).find('h2').text();
			const description = $(reserve).find('p').text();
			const url = $(reserve.slice(0, 49)).find('a').attr('href');

			return {
				title,
				description,
				url
			};
		}

		const title = $(selector).find('h2').text();
		const description = $(selector).find('p').text();
		const url = $(selector.slice(0, 49)).find('a').attr('href');

		return {
			title,
			description,
			url
		};
	});

	return result;
};

export {
	getWlkpArticles
};
