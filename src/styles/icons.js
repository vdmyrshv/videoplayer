import React, { useContext, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

import IconContext from '../context/IconContext'

const shockwave = keyframes`
  0% {
    box-shadow: 0 0 2px cyan;
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 0 50px darkcyan, inset 0 0 10px cyan;
}
`

const IconDiv = styled.div`
	background-color: #a6a6a6;
	padding: ${props => props.small ? '3px' : '5px'};
	border: ${props => props.small ? '1px' : '2px'} darkcyan solid;
	border-radius: 50%;
	transition: 0.2s;
	margin: 5px;
	stroke: darkcyan;
	stroke-width: 3px;
	position: relative;
	height: ${props => props.small ? '30px' : '70px'};
	width: ${props => props.small ? '30px' : '70px'};
	fill: ${props => props.iconColor};

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-radius: 50%;
		text-align: center;
		height: ${props => props.small ? '28px' : '68px'};
		width: ${props => props.small ? '28px' : '68px'};
	}

	:hover:before {
		animation: ${shockwave} 1s ease-in infinite;
	}
`

const StyledIconsContainer = ({ children, tooltip }) => {
	const { small, iconColor, iconHoverColor } = useContext(IconContext)
	const [isHover, setIsHover] = useState(false)
	return (
		<IconDiv
			small={!!small}
			iconColor={iconColor}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{children}
		</IconDiv>
	)
}

// const StyledIconsContainer = styled(IconsContainer)`
// 	background-color: #e3e3e3;
// 	border: 1px darkcyan solid;
// 	border-radius: 50%;
// 	transition: 0.2s;
// 	margin: 5px;
// 	stroke: darkcyan;
// 	position: relative;
// 	z-index: 0;
// 	backface-visibility: hidden;

// 	:before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		display: block;
// 		border-radius: 50%;
// 		height: 35px;
// 		width: 35px;
// 		text-align: center;
// 	}

// 	:hover:before {
// 		animation: ${shockwave} 1s ease-in infinite;
// 	}
// `

export const PhoneIcon = () => (
	<StyledIconsContainer tooltip='phone'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='-5 0 110 125'
		>
			<path d='M90.1,75.1l-0.5-1c-1.4-3.3-18.6-8.3-20-8.4l-1.1,0.1c-2.1,0.4-4.4,2.3-8.9,6.2c-0.9,0.8-2.1,1-3.2,0.4  c-5.9-3.3-13.1-9.9-16.7-13.9c-3.9-4.3-8.6-11.4-10.8-17.1c-0.4-1.1,0-2.3,0.8-3.1c5.1-4.6,7.3-6.8,7.5-9.2c0.1-1.4-2.9-19.1-6-20.8  l-0.9-0.6c-2-1.3-5-3.2-8.3-2.5c-0.8,0.2-1.6,0.5-2.3,0.9C17.5,7.5,12,11.3,9.5,16.2C8,19.3,7.3,47.4,28.3,71.1  c20.8,23.5,46.5,24.5,50.3,23.7l0.1,0l0.3-0.1c5.2-1.9,9.6-6.8,11.3-8.9C93.4,82.1,91.3,77.6,90.1,75.1z' />
		</svg>
	</StyledIconsContainer>
)

export const IdIcon = () => (
	<StyledIconsContainer tooltip='id'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 55 68.75'
		>
			<path d='M48.4,11.7H6.7c-1.7,0-3.2,1.4-3.2,3.1v25.4c0,1.7,1.4,3.1,3.2,3.1h41.7c1.7,0,3.1-1.4,3.1-3.1V14.8   C51.5,13.1,50.1,11.7,48.4,11.7z M16.8,16c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.3,7.3-5.3,7.3c-3,0-5.3-4.4-5.3-7.3   C11.4,18.4,13.8,16,16.8,16z M25.2,38c0,0.6-0.4,1-1,1H9.3c-0.6,0-1-0.4-1-1v-2.8c0-2.7,2.3-4.9,5.2-4.9H20c2.9,0,5.2,2.2,5.2,4.9   V38z M45.7,38.2H29c-0.6,0-1-0.4-1-1s0.4-1,1-1h16.7c0.6,0,1,0.4,1,1S46.2,38.2,45.7,38.2z M45.7,29.1H29c-0.6,0-1-0.4-1-1   s0.4-1,1-1h16.7c0.6,0,1,0.4,1,1S46.2,29.1,45.7,29.1z M45.7,20H29c-0.6,0-1-0.4-1-1s0.4-1,1-1h16.7c0.6,0,1,0.4,1,1   S46.2,20,45.7,20z' />
		</svg>
	</StyledIconsContainer>
)
export const GiftIcon = () => (
	<StyledIconsContainer tooltip='gift'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 24 30'
		>
			<g>
				<path d='M19,5h-2.8C16.7,4.5,17,3.8,17,3c0-1.7-1.3-3-3-3c-1,0-2.8,0.9-4,2.1C8.8,0.9,7,0,6,0C4.3,0,3,1.3,3,3   c0,0.8,0.3,1.5,0.8,2H1C0.4,5,0,5.4,0,6v2.8C0,8.9,0.1,9,0.2,9h8.4C8.8,9,9,8.8,9,8.6V5.4C9,5.2,9.2,5,9.4,5h1.2   C10.8,5,11,5.2,11,5.4v3.2C11,8.8,11.2,9,11.4,9h8.4C19.9,9,20,8.9,20,8.8V6C20,5.4,19.6,5,19,5z M6,4C5.4,4,5,3.6,5,3   c0-0.6,0.4-1,1-1c0.6,0,2.4,1.2,2.9,1.8C8.6,3.9,6,4,6,4z M14,4c0,0-2.6-0.1-2.9-0.2C11.7,3.1,13.4,2,14,2c0.6,0,1,0.4,1,1   C15,3.6,14.6,4,14,4z' />
				<path d='M8.6,11H1.2C1.1,11,1,11.1,1,11.2V19c0,0.6,0.4,1,1,1h6.6C8.8,20,9,19.8,9,19.6v-8.2C9,11.2,8.8,11,8.6,11z   ' />
				<path d='M18.8,11h-7.4c-0.2,0-0.4,0.2-0.4,0.4v8.2c0,0.2,0.2,0.4,0.4,0.4H18c0.6,0,1-0.4,1-1v-7.8   C19,11.1,18.9,11,18.8,11z' />
			</g>
		</svg>
	</StyledIconsContainer>
)

export const ArrowIcon = () => (
	<StyledIconsContainer tooltip='arrow'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 100 125'
		>
			<path d='M95.4,45L66.1,15.7c-2.7-2.7-7.2-2.7-9.9,0c-2.7,2.7-2.7,7.2,0,9.9L73.5,43h-64c-3.9,0-7,3.1-7,7s3.1,7,7,7h64L56.2,74.3    c-2.7,2.7-2.7,7.2,0,9.9c1.4,1.4,3.2,2.1,5,2.1s3.6-0.7,5-2.1L95.4,55c1.3-1.3,2.1-3.1,2.1-5C97.5,48.1,96.8,46.3,95.4,45z' />
		</svg>
	</StyledIconsContainer>
)

export const ChatIcon = () => (
	<StyledIconsContainer tooltip='chat'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 100 125'
		>
			<g transform='translate(0,-952.36218)'>
				<path
					transform='translate(0,-952.36218)'
					d='M 43 12 C 38.048601 12 34 16.04858 34 21 L 34 40 L 15 40 C 10.048595 40 6 44.04857 6 49 L 6 71 C 6 75.9514 10.048595 80 15 80 L 15 86 A 2.0001999 2.0001999 0 0 0 18.0625 87.71875 L 30.59375 80 L 57 80 C 61.951405 80 66 75.9514 66 71 L 66 52 L 69.40625 52 L 81.9375 59.71875 A 2.0001999 2.0001999 0 0 0 85 58 L 85 52 C 89.951405 52 94 47.95142 94 43 L 94 21 C 94 16.04858 89.951399 12 85 12 L 43 12 z M 43 16 L 85 16 C 87.804601 16 90 18.19538 90 21 L 90 43 C 90 45.80459 87.804595 48 85 48 L 83 48 A 2.0001999 2.0001999 0 0 0 81 50 L 81 54.40625 L 71.0625 48.28125 A 2.0001999 2.0001999 0 0 0 70 48 L 65.9375 48 C 65.430368 43.521121 61.609066 40 57 40 L 38 40 L 38 21 C 38 18.19538 40.195399 16 43 16 z M 45.8125 22 A 2.0021961 2.0021961 0 1 0 46 26 L 82 26 A 2.0001999 2.0001999 0 1 0 82 22 L 46 22 A 2.0001999 2.0001999 0 0 0 45.8125 22 z M 45.8125 30 A 2.0021961 2.0021961 0 1 0 46 34 L 82 34 A 2.0001999 2.0001999 0 1 0 82 30 L 46 30 A 2.0001999 2.0001999 0 0 0 45.8125 30 z M 69.8125 38 A 2.0021961 2.0021961 0 1 0 70 42 L 82 42 A 2.0001999 2.0001999 0 1 0 82 38 L 70 38 A 2.0001999 2.0001999 0 0 0 69.8125 38 z M 15 44 L 57 44 C 59.804595 44 62 46.19539 62 49 L 62 71 C 62 73.8046 59.804595 76 57 76 L 30 76 A 2.0001999 2.0001999 0 0 0 28.9375 76.28125 L 19 82.40625 L 19 78 A 2.0001999 2.0001999 0 0 0 17 76 L 15 76 C 12.195405 76 10 73.8046 10 71 L 10 49 C 10 46.19539 12.195405 44 15 44 z M 17.8125 50 A 2.0021961 2.0021961 0 1 0 18 54 L 54 54 A 2.0001999 2.0001999 0 1 0 54 50 L 18 50 A 2.0001999 2.0001999 0 0 0 17.8125 50 z M 17.8125 58 A 2.0021961 2.0021961 0 1 0 18 62 L 54 62 A 2.0001999 2.0001999 0 1 0 54 58 L 18 58 A 2.0001999 2.0001999 0 0 0 17.8125 58 z M 17.8125 66 A 2.0021961 2.0021961 0 1 0 18 70 L 34 70 A 2.0001999 2.0001999 0 1 0 34 66 L 18 66 A 2.0001999 2.0001999 0 0 0 17.8125 66 z '
					transform='translate(0,952.36218)'
				/>
			</g>
		</svg>
	</StyledIconsContainer>
)

export const CalendarIcon = () => (
	<StyledIconsContainer tooltip='calendar'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 26 30'
		>
			<g>
				<path d='M21.496 24h-18.992c-1.38 0-2.504-1.123-2.504-2.504v-16.991c0-1.381 1.124-2.505 2.505-2.505h18.99c1.381 0 2.505 1.124 2.505 2.505v16.991c0 1.381-1.123 2.504-2.504 2.504zm-18.991-20c-.278 0-.505.227-.505.505v16.991c0 .278.226.504.504.504h18.992c.278 0 .504-.226.504-.504v-16.991c0-.278-.227-.505-.505-.505h-18.99zM23 8h-22c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1s-.447 1-1 1zM5 5c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1zM19 5c-.553 0-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3c0 .552-.447 1-1 1z' />
				<circle cx='6' cy='19' r='1' />
				<circle cx='6' cy='15' r='1' />
				<circle cx='9' cy='19' r='1' />
				<circle cx='9' cy='15' r='1' />
				<circle cx='9' cy='11' r='1' />
				<circle cx='15' cy='19' r='1' />
				<circle cx='15' cy='15' r='1' />
				<circle cx='15' cy='11' r='1' />
				<circle cx='18' cy='15' r='1' />
				<circle cx='18' cy='11' r='1' />
				<circle cx='12' cy='19' r='1' />
				<circle cx='12' cy='15' r='1' />
				<circle cx='12' cy='11' r='1' />
			</g>
		</svg>
	</StyledIconsContainer>
)

const Close = ({ className }) => {
	return (
		<div className={className}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				viewBox='0 0 100 125'
			>
				<path
					class='st0'
					d='M61.2,50.5l32.1,32.1c3,3,3,7.7,0,10.7c-3,3-7.7,3-10.7,0L50.5,61.2L18.4,93.3c-3,3-7.7,3-10.7,0  c-3-3-3-7.7,0-10.7l32.1-32.1L7.7,18.4c-3-3-3-7.7,0-10.7s7.7-3,10.7,0l32.1,32.1L82.6,7.7c3-3,7.7-3,10.7,0c3,3,3,7.7,0,10.7  L61.2,50.5z'
				/>
			</svg>
		</div>
	)
}

export const CloseIcon = styled(Close)`
	fill: black;
	cursor: pointer;
`
