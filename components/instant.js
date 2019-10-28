import React, {useState} from 'react';
import dynamic from 'next/dynamic';

import Button from './button';
const Loading = dynamic(() => import('./loading'));

const Instant = () => {
	const [results, setResults] = useState(null);
	const [clicked, setClicked] = useState(false);

	const handleSubmit = async () => {
		if (!results) {
			setClicked(true);
			setResults(<Loading/>);
		}

		import('./utils/one-click').then(async module => {
			const result = await module.oneClickHandler();

			setClicked(false);
			setResults(result);
		});
	};

	return (
		<>
			<Button disabled={clicked} type="submit" onClick={handleSubmit}>
				{results === null ? 'Wygeneruj prasówkę (beta)' : 'Wygeneruj ponownie'}
			</Button>
			<br/>
			<br/>
			{results}
		</>
	);
};

export default Instant;
