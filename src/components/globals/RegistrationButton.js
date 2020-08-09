import React from 'react'

import styled from 'styled-components'
import { setColor } from '../../styles/styles'

export const RegistrationButton = styled.button`
width: 20rem;
	border-radius: 100rem;
	padding: 1.5rem 2rem;
	font-family: inherit;
	font-size: 2rem;
	padding: 0.5rem 3rem;
	color: ${setColor.primaryBlue};
	/* box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5); */
	border: solid 3px transparent;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(101deg, ${setColor.primaryBlue}, ${setColor.secondaryBlue});
	background-origin: border-box;
	background-clip: content-box, border-box;
	box-shadow: 2px 1000px 1px ${setColor.mainGrey} inset;
    transition: all .2s;
    outline: none;
    backface-visibility: hidden;
    align-self: center;

	:hover {
		box-shadow: none;
		color: white;
        transition: all .4s;
        transform: scale(1.05);
        backface-visibility: hidden;
	}
`

export default RegistrationButton