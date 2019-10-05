import React from 'react';

const Faq = () => (
	<>
		<details>
			<summary>Czy aby dostać 6 wystarczy wygenerować prasówkę?</summary>
			<p>Nie. Generator został stworzony, by pomóc uczniom w tworzeniu prasówek.</p>
			<p>Nadal musisz się ich nauczyć, wyszukać dodatkowe informacje o temacie itp.</p>
		</details>
		<br/>
		<details>
			<summary>Skąd pochodzą wiadomości?</summary>
			<p>Po znalezieniu wiadomości na dole strony znajduje się źródło.</p>
		</details>
		<br/>
		<details>
			<summary>Czy wiadomości są najnowsze?</summary>
			<p>W celu oszczędzenia danych generator zapisuje znalezione wiadomości w pamięci podręcznej.</p>
			<p>Są one czyszczone po 30 minutach, aby generator nie podawał starych artykułów.</p>
		</details>
	</>
);

export default Faq;
