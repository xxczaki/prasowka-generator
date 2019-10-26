import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';
import Navigation from '../components/navigation';
import Information from '../components/information';

const About = () => {
	return (
		<Container>
			<Header>Informacje</Header>
			<Description>Kilka słów o aplikacji...</Description>
			<Navigation/>
			<br/>
			<Information/>
		</Container>
	);
};

export default About;
