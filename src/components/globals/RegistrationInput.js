import styled from 'styled-components'

import { setColor } from '../../styles/styles'

const RegistrationInput = styled.input`
	background-color: inherit;
	font-family: inherit;
	outline: none;
	color: ${setColor.primaryBlue};
	border: 2px solid;
    border-color: ${props => (props.userMatch ? 'green' : 'red')};
	border-radius: 10rem;
	padding: 1rem 2rem;
	font-size: 2rem;
	::placeholder {
		color: grey;
	}

	:placeholder-shown {
		border-color: grey;
	}

	:focus {
        border-color: ${props => (props.userMatch === true ? 'green' : props.userMatch === false ?'red' : `${setColor.secondaryBlue}`)};
	}
`

export default RegistrationInput
