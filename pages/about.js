import React from 'react';

import Main from '../components/main';
import ExtLink from '../components/extlink';

const About = () => {
	return (
		<Main>
			<p>Prasówka Generator ma na celu pomóc uczniom w tworzeniu prasówek - krótkich wypowiedzi o ostatnich wydarzeniach.</p>
			<p>Sama aplikacja została stworzona z użyciem najnowszych technologii, takich jak <ExtLink href="https://reactjs.org/">React</ExtLink>, czy <ExtLink href="https://nextjs.org/">Next.js</ExtLink>.</p>
			<p>Całość jest ciągle rozwijana i mogą wystąpić błędy.</p>
			<br/>
			<p>👨‍💻 Twórcą Prasówka Generator jest Antoni Kępiński. Kod projektu dostępny jest na platformie <ExtLink href="https://github.com/xxczaki/prasowka-generator">Github</ExtLink>.</p>
		</Main>
	);
};

export default About;
