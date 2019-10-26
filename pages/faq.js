import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Navigation from '../components/navigation';
import Faq from '../components/faq';

const About = () => {
	return (
		<Container>
			<Header>FAQ</Header>
			<Description>Odpowiedzi na pewne pytania</Description>
			<Navigation/>
			<br/>
			<Faq/>
		</Container>
	);
};

export default About;
