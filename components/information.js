import React from 'react';

import ExternalLink from './link';

const Information = () => (
	<>
		<p>Prasówka Generator ma na celu pomóc uczniom w tworzeniu prasówek - krótkich wypowiedzi o ostatnich wydarzeniach.</p>
		<p>Sama aplikacja została stworzona z użyciem najnowszych technologii, takich jak <ExternalLink href="https://reactjs.org/">React</ExternalLink>, czy <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>.</p>
		<p>Całość jest ciągle rozwijana i mogą wystąpić błędy.</p>
		<br/>
		<br/>
		<p>👨‍💻 Twórcą Prasówka Generator jest Antoni Kępiński. Kod projektu dostępny jest na platformie <ExternalLink href="https://github.com/xxczaki/prasowka-generator">Github</ExternalLink>.</p>
	</>
);

export default Information;
