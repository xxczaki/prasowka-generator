import React, {useState, useMemo} from 'react';
import {useFormState} from 'react-use-form-state';

import Input from './input';
import Select from './select';
import Button from './button';
import Grid from './grid';

const Search = () => {
	const [formState, {number, select}] = useFormState();
	const [results, setResults] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

		if (!results) {
			setLoading(true);
		}

		import('../utils/finder').then(async module => {
			const result = await module.getArticles(values.amount, values.region, values.source);

			setLoading(false);
			setResults(result);
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Ilość
				<br/>
				<Input {...number('amount')} required type="number" min="1" max="10" step="1" placeholder="1-10"/>
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
			<Button style={{width: '235px'}} type="submit">
				{results === null ? 'Szukaj wiadomości' : (loading ? '...' : 'Wyszukaj ponownie')}
			</Button>
			<br/>
			<br/>
			<Grid>
				{results}
			</Grid>
		</form>
	);
};

export default Search;
