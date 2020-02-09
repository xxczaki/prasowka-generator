import React, {useState} from 'react';

import Button from './button';

const Instant = () => {
	const [results, setResults] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		if (!results) {
			setLoading(true);
		}

		import('../utils/one-click').then(async module => {
			const result = await module.oneClickHandler();

			setLoading(false);
			setResults(result);
		});
	};

	return (
		<>
			<Button type="submit" onClick={handleSubmit}>
				{results === null ? 'Wygeneruj prasówkę (beta)' : (loading ? '...' : 'Wygeneruj ponownie')}
			</Button>
			<br/>
			<br/>
			{results}
		</>
	);
};

export default Instant;
