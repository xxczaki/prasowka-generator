import React, {useState, useMemo} from 'react';
import dynamic from 'next/dynamic';
import {useFormState} from 'react-use-form-state';

import Input from './input';
import Select from './select';
import Button from './button';
const Loading = dynamic(() => import('./loading'));

const Search = () => {
	const [formState, {number, select}] = useFormState();
	const [results, setResults] = useState(null);
	const [clicked, setClicked] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

		if (!results) {
			setClicked(true);
			setResults(<Loading text="Wyszukiwanie wiadomości..."/>);
		}

		import('./utils/finder').then(async module => {
			const result = await module.getArticles(values.amount, values.region, values.source);

			setClicked(false);
			setResults(result);
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Ilość
				<br/>
				<Input {...number('amount')} required type="number" min="1" max="5" step="1" placeholder="1-5"/>
			</label>
			<br/>
			<label>
				Rejon
				<br/>
				<Select {...select('region')} required>
					<option value="">Wybierz</option>
					<option value="wlkp">Wielkopolska</option>
					<option value="poland">Polska</option>
					<option value="world">Świat</option>
				</Select>
			</label>
			<br/>
			<label>
				Źródło
				<br/>
				<Select {...select('source')} required>
					<option value="">Wybierz</option>
					{useMemo(() => {
						const {values} = formState;

						if (values.region === 'wlkp') {
							return <option value="glosWielkopolski">Głos Wielkopolski</option>;
						}

						if (values.region !== 'wlkp' && values.region) {
							return <option value="tvn24">TVN24</option>;
						}

						return (
							<>
								<option value="tvn24">TVN24</option>
								<option value="glosWielkopolski">Głos Wielkopolski</option>
							</>
						);

						// eslint-disable-next-line react-hooks/exhaustive-deps
					}, [formState.values.region])}
				</Select>
			</label>
			<br/>
			<Button style={{width: '235px'}} disabled={clicked} type="submit">
				{results === null ? 'Szukaj wiadomości' : 'Wyszukaj ponownie'}
			</Button>
			<br/>
			<br/>
			{results}
		</form>
	);
};

export default Search;
