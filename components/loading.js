import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from './spinner';
import Bold from './bold';

const Wrapper = styled.div`
	display: flex;
	width: 300px;
	align-items: center;
	justify-content: center;
	padding-top: 1.2em;
	user-select: none;
`;

const Loading = ({text}) => (
	<Wrapper>
		<Spinner/>
		<Bold>{text}</Bold>
	</Wrapper>
);

Loading.propTypes = {
	text: PropTypes.string.isRequired
};

export default Loading;
