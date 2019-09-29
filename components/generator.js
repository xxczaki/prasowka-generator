import React, {useState} from 'react';
import {useFormState} from 'react-use-form-state';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('API_KEY');

import Select from './select';
import Input from './input';
import Button from './button';
import ExternalLink from './link';

const Utility = ()=> {
	const [results, setResults] = useState(null);
	const [formState, {number, select}] = useFormState();

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

			newsapi.v2.topHeadlines({
				category: values.category,
				language: 'pl',
				country: 'pl'
			}).then(response => {
				if (response.totalResults === 0) {
					setResults(
						<p>Nie znaleziono żadnych wiadomości :(</p>
					)
				}

				const articles = response.articles.slice(0, values.amount);

				const formatted = articles.map(e => (
					<div key={e.publishedAt}>
						<h3>{e.title}</h3>
						<br/>
						<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
						<br/>
					</div>
				));

				setResults(formatted);
				console.log(response);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
        Ilość
					<br/>
					<Input required {...number('amount')} type="number" min="1" max="5" pattern="[0-9]*" name="amount" placeholder="Ilość"/>
				</label>
				<br/>
				<label>
        Region
					<br/>
					<Select required {...select('region')}>
						<option value="">Wybierz</option>
						<option value="poland">Polska</option>
						<option disabled value="wielkopolska">(Wkrótce) Wielkopolska</option>
						<option disabled value="world">(Wkrótce) Świat</option>
					</Select>
				</label>
				<br/>
				<label>
        Kategoria
					<br/>
					<Select required {...select('category')}>
						<option value="">Wybierz</option>
						<option value="politics">Polityka</option>
						<option value="business">Gospodarka</option>
						<option value="entertainment">Kultura</option>
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
