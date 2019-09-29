import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="pl">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
					<meta name="description" content="Zbliża się lekcja WOSu, a prasówki brak? Nie ma problemu - Prasówka Generator wyszuka dla ciebie interesujące wiadomości i pomoże w utworzeniu tej bezsensownej wypowiedzi!"/>
					<meta name="theme-color" content="#212121"/>
					<meta name="msapplication-TileColor" content="#212121"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<link rel="manifest" href="static/manifest.json"/>
					<link rel="icon" href="static/favicon.png"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:title" content="Prasówka Generator"/>
					<meta name="twitter:description" content="Zbliża się lekcja WOSu, a prasówki brak? Nie ma problemu - Prasówka Generator wyszuka dla ciebie interesujące wiadomości i pomoże w utworzeniu tej bezsensownej wypowiedzi!"/>
					<meta name="og:title" content="Prasówka Generator"/>
					<meta name="og:description" content="Zbliża się lekcja WOSu, a prasówki brak? Nie ma problemu - Prasówka Generator wyszuka dla ciebie interesujące wiadomości i pomoże w utworzeniu tej bezsensownej wypowiedzi!"/>
					<meta name="og:url" content="https://prasowka-generator.now.sh"/>
					<meta name="og:site_name" content="Prasówka Generator"/>
					<meta name="og:type" content="website"/>
					<link rel="icon" href="static/favicon.png"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
