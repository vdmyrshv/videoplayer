import styled, { css } from 'styled-components'

import { setColor } from '../../styles/styles'

const emailMixin = css`
	border-color: ${props =>
		props.userMatch === true
			? 'green'
			: props.userMatch === false
			? 'red'
			: `${setColor.primaryBlue}`};
`
const borderColorMixin = css`
	${props =>
		props.emailField
			? emailMixin
			: `border-color: ${setColor.primaryBlue};`}
`

const RegistrationInput = styled.input`
	background-color: inherit;
	font-family: inherit;
	outline: none;
	color: ${setColor.primaryBlue};
	border: 2px solid;
	${borderColorMixin}
	border-radius: 10rem;
	padding: 1rem 2rem;
	font-size: 2rem;
    position: relative;

	::placeholder {
		color: grey;
	}

	:placeholder-shown {
		border-color: grey;
	}

	:focus {
        ${borderColorMixin}
	}

`

export default RegistrationInput
