import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Navigation from '../components/navigation';
import Utility from '../components/generator';

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
