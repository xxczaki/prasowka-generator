import React, {useState} from 'react';

import Button from './button';

import oneClickHandler from './utils/one-click';

const Utility = () => {
	const [results, setResults] = useState(null);

	const handleSubmit = async () => {
		if (!results) {
			setResults('Generowanie prasówki...');
		}

		const result = await oneClickHandler();

		setResults(
			<>
				{result}
			</>
		);
	};

	return (
		<>
			<Button type="submit" onClick={handleSubmit}>
				{results === null ? 'Wygeneruj prasówkę (beta)' : 'Wygeneruj ponownie'}
			</Button>
			<br/>
			<br/>
			{results}
		</>
	);
};

export default Utility;
