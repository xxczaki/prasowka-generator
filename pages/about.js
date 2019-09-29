import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Description from '../components/description';

const Navigation = dynamic(() => import('../components/navigation'));

const Information = dynamic(
	() => import('../components/information'),
	{
		loading: () => <p>Loading...</p>
	}
);

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
