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
		'#glowna-kolumna > section > article:nth-child(2) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(3) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(7) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(10) > a > div > div.columns.small-7.medium-6',
		'#glowna-kolumna > section > article:nth-child(9) > a > div > div.columns.small-7.medium-6'
	];

	const result = [...articles].map(selector => {
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

const getPolandArticles = async () => {
	await get('pl-articles').then(async val => {
		const cacheTimestamp = await get('cc-timestamp-pl');
		const currentTimestamp = Math.floor(Date.now() / 1000);

		// Check whether cached data exists and if it does, whether it's older than one week
		if (val === undefined || cacheTimestamp === undefined || (currentTimestamp - cacheTimestamp) > 1800) {
			await del('pl-articles');
			await del('cc-timestamp-pl');

			const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.tvn24.pl/wiadomosci-z-kraju,3');
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
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(19)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(21)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(24)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(33)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(35)'
	];

	const result = [...articles].map(selector => {
		const title = $(selector).find('h1').find('a').text();
		const description = $(selector).find('p').hasClass('lead') ? $(selector).find('p').text() : $(selector).find('div').next().next().text();
		const url = `https://www.tvn24.pl${$(selector).find('h1').find('a').attr('href')}`;

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

			const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.tvn24.pl/wiadomosci-ze-swiata,2');
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
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(6)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(9)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(14)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(19)',
		'#tvn24 > div.gemius-map > div > div.mainContainer > div.mainLeftColumn > article:nth-child(21)'
	];

	const result = [...articles].map(selector => {
		const title = $(selector).find('h1').find('a').text();
		const description = $(selector).find('p').hasClass('lead') ? $(selector).find('p').text() : $(selector).find('div').next().next().text();
		const url = `https://www.tvn24.pl${$(selector).find('h1').find('a').attr('href')}`;

		return {
			title,
			description,
			url
		};
	});

	return result;
};

export {
	getWlkpArticles,
	getPolandArticles,
	getWorldArticles
};
