import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

import '../node_modules/modern-normalize/modern-normalize.css';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #212121;
		font-family: monospace;
		margin: auto;
		width: 80%;
		font-size: 16px;
		padding-top: 50px;
		padding-bottom: 100px;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<GlobalStyle/>
				<Head>
					<title>Prasówka Generator</title>
				</Head>
				<Component {...pageProps}/>
			</>
		);
	}
}

export default MyApp;
