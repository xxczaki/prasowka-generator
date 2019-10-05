import React, {useState} from 'react';
import {useFormState} from 'react-use-form-state';

import Select from './select';
import Button from './button';
import ExternalLink from './link';

import {getWlkpArticles, getPolandArticles, getWorldArticles} from './utils/scraper';

const Utility = () => {
	const [results, setResults] = useState(null);
	const [formState, {select}] = useFormState();

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

		if (values.region === 'poland') {
			const articles = await getPolandArticles();

			const formatted = articles.map(e => (
				<div key={e.title} style={{width: '80%'}}>
					<h3>{e.title}</h3>
					<br/>
					<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
					<br/>
					<hr/>
				</div>
			));

			setResults(
				<>
					{formatted}
					<br/>
					<footer>
						<p>Źródło powyższych wiadomości: <ExternalLink href="https://www.tvn24.pl/wiadomosci-ze-swiata,2">TVN24</ExternalLink></p>
						<b>Prawa autorskie do artykułów należą do ich autorów</b>
					</footer>
				</>
			);
		} else if (values.region === 'world') {
			const articles = await getWorldArticles();

			const formatted = articles.map(e => (
				<div key={e.title} style={{width: '80%'}}>
					<h3>{e.title}</h3>
					<br/>
					<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
					<br/>
					<hr/>
				</div>
			));

			setResults(
				<>
					{formatted}
					<br/>
					<footer>
						<p>Źródło powyższych wiadomości: <ExternalLink href="https://www.tvn24.pl/wiadomosci-ze-swiata,2">TVN24</ExternalLink></p>
						<b>Prawa autorskie do artykułów należą do ich autorów</b>
					</footer>
				</>
			);
		} else {
			const articles = await getWlkpArticles();

			const formatted = articles.map(e => (
				<div key={e.title} style={{width: '80%'}}>
					<h3>{e.title}</h3>
					<br/>
					<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
					<br/>
					<hr/>
				</div>
			));

			setResults(
				<>
					{formatted}
					<br/>
					<footer>
						<p>Źródło powyższych wiadomości: <ExternalLink href="https://gloswielkopolski.pl/wiadomosci/wielkopolska/">Głos Wielkopolski</ExternalLink></p>
						<b>Prawa autorskie do artykułów należą do ich autorów</b>
					</footer>
				</>
			);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
        Region
					<br/>
					<Select required {...select('region')}>
						<option value="">Wybierz</option>
						<option value="wielkopolska">Wielkopolska</option>
						<option value="poland">Polska</option>
						<option value="world">Świat</option>
					</Select>
				</label>
				<br/>
				<Button type="submit">
					Generuj
				</Button>
				<br/>
				<br/>
				{results}
			</form>
		</>
	);
};

export default Utility;
