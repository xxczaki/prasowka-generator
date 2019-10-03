import React, {useState} from 'react';
import {useFormState} from 'react-use-form-state';
import NewsAPI from 'newsapi';
import bayes from 'bayes';

const newsapi = new NewsAPI('api key');

import Select from './select';
import Input from './input';
import Button from './button';
import ExternalLink from './link';

const Utility = ()=> {
	const [results, setResults] = useState(null);
	const [formState, {number, select}] = useFormState();

	const categorizeNews = title => {
		const classifier = bayes.fromJson(`{"categories":{"politics":true,"science":true},"docCount":{"politics":19,"science":15},"totalDocuments":34,"vocabulary":{"5":true,"500":true,"ko":true,"koalicja":true,"obywatelska":true,"pis":true,"prawo":true,"i":true,"sprawiedliwość":true,"psl":true,"konfederacja":true,"lewica":true,"prawica":true,"zjednoczona":true,"zieloni":true,"kosiniak":true,"kamysz":true,"tusk":true,"kaczyński":true,"jarosław":true,"donald":true,"schetyna":true,"petru":true,"biedroń":true,"wybory":true,"parlamentarne":true,"parlament":true,"sejm":true,"senat":true,"senatu":true,"sejmu":true,"głosowanie":true,"sondaż":true,"ankieta":true,"ankietowanych":true,"głos":true,"głosy":true,"prezydent":true,"premier":true,"marszałek":true,"poseł":true,"andrzej":true,"duda":true,"mateusz":true,"morawiecki":true,"beata":true,"szydło":true,"marek":true,"kuchciński":true,"trump":true,"mike":true,"pence":true,"boris":true,"johnson":true,"królowa":true,"król":true,"strajk":true,"klimatyczny":true,"reforma":true,"reformy":true,"edukacji":true,"protest":true,"marsz":true,"równości":true,"nauczycieli":true,"nauczyciele":true,"wojsko":true,"wojskowi":true,"mon":true,"ministerstwo":true,"obrony":true,"narodowej":true,"men":true,"rpo":true,"rzecznik":true,"praw":true,"obywatelskich":true,"rpd":true,"dziecka":true,"plakaty":true,"wyborcze":true,"manifestacje":true,"manifestacja":true,"bruksela":true,"trybunał":true,"konstytucyjny":true,"hadze":true,"haga":true,"sprawiedliwości":true,"sprawiedliowść":true,"europa":true,"strefa":true,"euro":true,"unia":true,"europejska":true,"latek":true,"utopił":true,"się":true,"w":true,"studzience":true,"koło":true,"placu":true,"zabaw":true,"Urzędniczka":true,"stanie":true,"przed":true,"sądem":true,"Szpital":true,"we":true,"Włocławku":true,"zamyka":true,"chirurgię":true,"dziecięcą":true,"Zmusić":true,"do":true,"pracy":true,"nikogo":true,"nie":true,"można":true,"":true,"Biedroń":true,"każdego":true,"dnia":true,"będziemy":true,"rozliczać":true,"PiS":true,"z":true,"niezrealizowanych":true,"obietnic":true,"polityka":true,"prorodzinna":true,"aborcja":true,"ciąża":true,"lgbt":true,"lgbtq":true,"kontrowersyjny":true,"kontrowersja":true,"chiny":true,"usa":true,"stany":true,"zjednoczone":true,"ameryka":true,"wielka":true,"brytania":true,"niemcy":true,"zarzuty":true,"kandydat":true,"kandydaci":true,"partia":true,"rządząca":true,"komitet":true,"wyborczy":true,"lider":true,"brexit":true,"polexit":true,"sąd":true,"frankowicze":true,"prokonsumenckie":true,"płci":true,"płeć":true,"tolerancja":true,"mowa":true,"nienawiści":true,"500+":true,"plus":true,"zasiłek":true,"socjal":true,"na":true,"dziecko":true,"karty":true,"głosowania":true,"propozycja":true,"propozycję":true,"rolnicy":true,"krowa":true,"maluch":true,"kaczyńskiego":true,"tuska":true,"bój":true,"kościół":true,"chrześcijaństwo":true,"państwo":true,"kościelny":true,"tupolew":true,"smoleńsk":true,"sekretarz":true,"stanu":true,"impeachment":true,"prezydenta":true,"imigranci":true,"imigrant":true,"statek":true,"imigrantami":true,"unijnego":true,"komisarza":true,"klimat":true,"zmiany":true,"klimatu":true,"global":true,"warming":true,"naukowcy":true,"ostrzegają":true,"dwutlenek":true,"węgla":true,"smog":true,"siarki":true,"zanieczyszczenie":true,"powietrza":true,"rakieta":true,"rakiety":true,"nasa":true,"spacex":true,"elon":true,"musk":true,"lot":true,"kosmos":true,"księżyc":true,"mars":true,"saturn":true,"pluton":true,"sonda":true,"satelita":true,"meteor":true,"meteoryt":true,"asteroida":true,"wynaleźli":true,"amerykańscy":true,"japońscy":true,"wynalazek":true,"uniwersytet":true,"university":true,"oceany":true,"śmieci":true,"lodowce":true,"topnienie":true,"lodowców":true,"arktyka":true,"antarktyda":true,"oderwanie":true,"oderwał":true,"raport":true,"erupcja":true,"wulkanu":true,"wulkan":true,"dym":true,"lawa":true,"magma":true,"wyspa":true,"wyspy":true,"pacyfik":true,"ocean":true,"spokojny":true,"wybuch":true,"who":true,"temperatura":true,"temperatury":true,"globalne":true,"ocieplenie":true,"wyższa":true,"cieplej":true,"chłodniej":true,"zima":true,"lato":true,"zimy":true,"lata":true,"wiosna":true,"wiosny":true,"natura":true,"gatunki":true,"puszcza":true,"amazonia":true,"amazońska":true,"lasy":true,"tropikalne":true,"wycinki":true,"pożar":true,"pożary":true,"lasów":true,"wyginięcie":true,"szczyt":true,"onz":true,"węgiel":true,"wiatr":true,"woda":true,"odnawialne":true,"źródła":true,"energii":true,"energia":true,"prąd":true,"elektrownie":true,"elektrownia":true,"ptaki":true,"nosorożce":true,"gatunek":true,"kryzys":true,"ochrona":true,"planety":true,"planeta":true,"ziemia":true,"ziemi":true,"czarna":true,"dziura":true,"niebezpieczna":true,"niebezpieczny":true,"wirus":true,"bakteria":true,"zakażeń":true,"zakażenie":true,"śmierć":true,"choroba":true,"choroby":true,"ebola":true,"afryka":true,"odkryto":true,"odkrycie":true,"nowy":true,"minerał":true,"skała":true,"nieznana":true,"substancja":true,"lek":true,"raka":true,"grafen":true,"broń":true,"jądrowa":true,"bomba":true,"atomowa":true,"huragan":true,"tajfun":true,"trzęsienie":true,"powódź":true,"lawina":true,"błotna":true,"radioaktywne":true,"izotopy":true,"puszczy":true,"białowieska":true,"białowieskiej":true},"vocabularySize":338,"wordCount":{"politics":211,"science":153},"wordFrequencyCount":{"politics":{"5":1,"500":1,"ko":1,"koalicja":1,"obywatelska":1,"pis":1,"prawo":1,"i":1,"sprawiedliwość":1,"psl":1,"konfederacja":1,"lewica":1,"prawica":2,"zjednoczona":1,"zieloni":1,"kosiniak":1,"kamysz":1,"tusk":1,"kaczyński":2,"jarosław":1,"donald":2,"schetyna":1,"petru":1,"biedroń":1,"wybory":1,"parlamentarne":1,"parlament":1,"sejm":1,"senat":1,"senatu":1,"sejmu":2,"głosowanie":1,"sondaż":1,"ankieta":1,"ankietowanych":1,"głos":1,"głosy":1,"prezydent":2,"premier":1,"marszałek":1,"poseł":1,"andrzej":1,"duda":1,"mateusz":1,"morawiecki":1,"beata":1,"szydło":1,"marek":1,"kuchciński":1,"trump":2,"mike":1,"pence":1,"boris":1,"johnson":1,"królowa":1,"król":1,"strajk":1,"klimatyczny":1,"reforma":1,"reformy":1,"edukacji":2,"protest":1,"marsz":1,"równości":1,"nauczycieli":1,"nauczyciele":1,"wojsko":1,"wojskowi":1,"mon":1,"ministerstwo":2,"obrony":1,"narodowej":2,"men":1,"rpo":1,"rzecznik":2,"praw":2,"obywatelskich":1,"rpd":1,"dziecka":1,"plakaty":1,"wyborcze":1,"manifestacje":1,"manifestacja":1,"bruksela":2,"trybunał":1,"konstytucyjny":1,"hadze":1,"haga":1,"sprawiedliwości":1,"sprawiedliowść":1,"europa":1,"strefa":1,"euro":1,"unia":1,"europejska":1,"latek":1,"utopił":1,"się":1,"w":1,"studzience":1,"koło":1,"placu":1,"zabaw":1,"Urzędniczka":1,"stanie":1,"przed":1,"sądem":2,"Szpital":1,"we":1,"Włocławku":1,"zamyka":1,"chirurgię":1,"dziecięcą":1,"Zmusić":1,"do":2,"pracy":1,"nikogo":1,"nie":1,"można":1,"":1,"Biedroń":1,"każdego":1,"dnia":1,"będziemy":1,"rozliczać":1,"PiS":1,"z":2,"niezrealizowanych":1,"obietnic":1,"polityka":1,"prorodzinna":1,"aborcja":1,"ciąża":1,"lgbt":1,"lgbtq":1,"kontrowersyjny":1,"kontrowersja":1,"chiny":1,"usa":2,"stany":1,"zjednoczone":1,"ameryka":1,"wielka":1,"brytania":1,"niemcy":1,"zarzuty":1,"kandydat":1,"kandydaci":1,"partia":1,"rządząca":1,"komitet":1,"wyborczy":1,"lider":1,"brexit":1,"polexit":1,"sąd":1,"frankowicze":1,"prokonsumenckie":1,"płci":1,"płeć":1,"tolerancja":1,"mowa":1,"nienawiści":1,"500+":1,"plus":1,"zasiłek":1,"socjal":1,"na":1,"dziecko":1,"karty":1,"głosowania":1,"propozycja":1,"propozycję":1,"rolnicy":1,"krowa":1,"maluch":1,"kaczyńskiego":1,"tuska":1,"bój":1,"kościół":1,"chrześcijaństwo":1,"państwo":1,"kościelny":1,"tupolew":1,"smoleńsk":1,"sekretarz":1,"stanu":1,"impeachment":1,"prezydenta":1,"imigranci":1,"imigrant":1,"statek":1,"imigrantami":1,"unijnego":1,"komisarza":1},"science":{"klimat":2,"zmiany":2,"klimatu":2,"global":1,"warming":1,"naukowcy":1,"ostrzegają":1,"dwutlenek":1,"węgla":1,"smog":1,"siarki":1,"zanieczyszczenie":1,"powietrza":1,"rakieta":1,"rakiety":1,"nasa":1,"spacex":1,"elon":1,"musk":1,"lot":1,"kosmos":1,"księżyc":1,"mars":1,"saturn":1,"pluton":1,"sonda":1,"satelita":1,"meteor":1,"meteoryt":1,"asteroida":1,"wynaleźli":1,"amerykańscy":1,"japońscy":1,"wynalazek":1,"uniwersytet":1,"university":1,"oceany":1,"śmieci":1,"lodowce":1,"topnienie":1,"lodowców":1,"arktyka":1,"antarktyda":1,"oderwanie":1,"oderwał":1,"raport":1,"erupcja":1,"wulkanu":1,"wulkan":1,"dym":1,"lawa":1,"magma":1,"wyspa":1,"wyspy":1,"pacyfik":1,"ocean":1,"spokojny":1,"wybuch":1,"who":1,"temperatura":1,"temperatury":1,"globalne":1,"ocieplenie":1,"wyższa":1,"cieplej":1,"chłodniej":1,"zima":1,"lato":1,"zimy":1,"lata":1,"wiosna":1,"wiosny":1,"natura":1,"gatunki":2,"puszcza":2,"amazonia":1,"amazońska":1,"lasy":1,"tropikalne":1,"wycinki":1,"pożar":1,"pożary":1,"lasów":1,"wyginięcie":1,"szczyt":1,"klimatyczny":2,"onz":1,"węgiel":1,"wiatr":1,"woda":1,"odnawialne":1,"źródła":1,"energii":1,"energia":1,"prąd":1,"elektrownie":1,"elektrownia":1,"ptaki":1,"nosorożce":1,"gatunek":2,"kryzys":1,"ochrona":1,"planety":1,"planeta":1,"ziemia":1,"ziemi":2,"czarna":1,"dziura":1,"niebezpieczna":1,"niebezpieczny":1,"wirus":1,"bakteria":1,"zakażeń":1,"zakażenie":1,"śmierć":1,"choroba":1,"choroby":1,"ebola":1,"afryka":1,"odkryto":1,"odkrycie":1,"nowy":1,"minerał":1,"skała":1,"nieznana":1,"substancja":1,"lek":1,"na":1,"raka":1,"grafen":1,"broń":1,"jądrowa":1,"bomba":1,"atomowa":1,"huragan":1,"tajfun":1,"trzęsienie":1,"powódź":1,"lawina":1,"błotna":1,"radioaktywne":1,"izotopy":1,"puszczy":1,"białowieska":1,"białowieskiej":1}},"options":{}}`);

		return classifier.categorize(title);
	}

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

			newsapi.v2.topHeadlines({
				category: values.category === 'politics' ? 'general' : values.category,
				language: 'pl',
				country: 'pl'
			}).then(response => {
				if (response.totalResults === 0) {
					setResults(<p>Nie znaleziono żadnych wiadomości.</p>)
				}

				const articles = response.articles.slice(0, values.category === 'politics' ? 30 : 10);

				if (values.category === 'business') {
					const formatted = articles.map(e => (
						<div key={e.publishedAt}>
							<h3>{e.title}</h3>
							<br/>
							<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
							<br/>
						</div>
					));

					setResults(formatted);
				} else {
					const sortedArticles = articles.filter(e => {
						const blacklistedWords = ['sport', 'mistrz', 'piłkę', 'nożna', 'piłka', 'nożną', 'siatkówka', 'koszykówka', 'siatkarze', 'puchar', 'olimpiada', 'wypadek', 'tragedia', 'Tragiczny', 'Microsoft', 'android', 'Antyweb', 'Wyleciała'];

						return categorizeNews(e.title) === values.category && !blacklistedWords.some(el => e.title.includes(el));;
					})

					const formatted = sortedArticles.map(e => (
						<div key={e.publishedAt}>
							<h3>{e.title}</h3>
							<br/>
							<p>{e.description} <ExternalLink href={e.url}>[CZYTAJ DALEJ]</ExternalLink></p>
							<br/>
						</div>
					));

					setResults(formatted);
				}
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
        Region
					<br/>
					<Select required {...select('region')}>
						<option value="">Wybierz</option>
						<option value="poland">Polska</option>
						<option disabled value="world">(Wkrótce) Świat</option>
						<option disabled value="wielkopolska">(Wkrótce) Wielkopolska</option>
					</Select>
				</label>
				<br/>
				<label>
        Kategoria
					<br/>
					<Select required {...select('category')}>
						<option value="">Wybierz</option>
						<option value="politics">Polityka (beta)</option>
						<option value="business">Gospodarka</option>
						<option value="science">Nauka</option>
					</Select>
				</label>
				<br/>
				<Button type="submit">
					Generuj
				</Button>
				<br/>
				<br/>
				{results}
			</form>
		</>
	);
};

export default Utility;
