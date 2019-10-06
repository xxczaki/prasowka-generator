import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Navigation from '../components/navigation';

const Utility = dynamic(
	() => import('../components/generator'),
	{
		loading: () => <p>Loading...</p>
	}
);

const Index = () => {
	return (
		<Container>
			<Header>Prasówka Generator</Header>
			<Description>Wygeneruj prasówkę jednym kliknięciem!</Description>
			<Navigation/>
			<Utility/>
		</Container>
	);
};

export default Index;
