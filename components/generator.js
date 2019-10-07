import React, {useState} from 'react';

import Button from './button';
import Loading from './loading';

import oneClickHandler from './utils/one-click';

const Utility = () => {
	const [results, setResults] = useState(null);
	const [clicked, setClicked] = useState(false);

	const handleSubmit = async () => {
		if (!results) {
			setClicked(true);
			setResults(<Loading/>);
		}

		const result = await oneClickHandler();

		setClicked(false);
		setResults(result);
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

export default Utility;
