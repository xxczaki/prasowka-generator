import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';

const Navigation = dynamic(() => import('../components/navigation'));

const Faq = dynamic(
	() => import('../components/faq'),
	{
		loading: () => <p>Loading...</p>
	}
);

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
