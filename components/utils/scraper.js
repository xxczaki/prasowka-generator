'use strict';

import cheerio from 'cheerio';

const getArticles = async () => {
	const response = await fetch('https://gloswielkopolski.pl/wiadomosci/wielkopolska/');
	const html = await response.text();

	const $ = await cheerio.load(html);

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

	console.log(result);
	return result;
};

export {
	getArticles
};
