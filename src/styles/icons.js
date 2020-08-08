import React, { useContext, useState } from 'react'

import styled, { keyframes } from 'styled-components'
import { setColor } from './styles'

import IconContext from '../context/IconContext'

import Tooltip from '@material-ui/core/Tooltip'

const shockwave = keyframes`
  0% {
    box-shadow: 0 0 2px ${setColor.secondaryBlue};
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 0 50px ${setColor.tertiaryBlue}, inset 0 0 10px ${setColor.secondaryBlue};
}
`

const IconDiv = styled.div`
	background-color: #cdcdcd;
	padding: ${props => (props.small ? '3px' : '5px')};
	border: ${props => (props.small ? '1px' : '2px')} ${setColor.primaryBlue} solid;
	border-radius: 50%;
	transition: 0.2s;
	margin: 5px;
	stroke: ${props => (props.small ? props.iconColor : `${setColor.mainGrey}`)};
	stroke-width: ${props => (props.small ? '0' : '1px')};;
	position: relative;
	height: ${props => (props.small ? '30px' : '70px')};
	width: ${props => (props.small ? '30px' : '70px')};
	fill: ${props => props.iconColor};

	:hover {
		transform: scale(1.1);
		transition: all 0.2s;
	}

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-radius: 50%;
		text-align: center;
		height: ${props => (props.small ? '28px' : '68px')};
		width: ${props => (props.small ? '28px' : '68px')};
		transition: all 0.2s;
	}

	:hover:before {
		animation: ${shockwave} 1s ease-in infinite;
	}

	:active {
		transform: scale(1.2);
		transition: all 0.2s;
	}
`

const IconsContainer = ({ children, tooltipTitle }) => {
	const {
		small,
		iconColor,
		iconHoverColor,
		tooltipDelay,
		tooltipPlacement,
		tooltipFontSize
	} = useContext(IconContext)
	const [isHover, setIsHover] = useState(false)
	return (
		<Tooltip
			title={
				<h1 style={{ fontSize: tooltipFontSize, color: 'white', fontFamily: 'Noto Sans JP', fontWeight: 300 }}>
					{tooltipTitle}
				</h1>
			}
			placement={tooltipPlacement}
			arrow
			enterDelay={tooltipDelay}
		>
			<IconDiv
				small={!!small}
				iconColor={iconColor}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{children}
			</IconDiv>
		</Tooltip>
	)
}

const StyledIconsContainer = styled(IconsContainer)``

export const PhoneIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='-5 0 110 125'
		>
			<path d='M90.1,75.1l-0.5-1c-1.4-3.3-18.6-8.3-20-8.4l-1.1,0.1c-2.1,0.4-4.4,2.3-8.9,6.2c-0.9,0.8-2.1,1-3.2,0.4  c-5.9-3.3-13.1-9.9-16.7-13.9c-3.9-4.3-8.6-11.4-10.8-17.1c-0.4-1.1,0-2.3,0.8-3.1c5.1-4.6,7.3-6.8,7.5-9.2c0.1-1.4-2.9-19.1-6-20.8  l-0.9-0.6c-2-1.3-5-3.2-8.3-2.5c-0.8,0.2-1.6,0.5-2.3,0.9C17.5,7.5,12,11.3,9.5,16.2C8,19.3,7.3,47.4,28.3,71.1  c20.8,23.5,46.5,24.5,50.3,23.7l0.1,0l0.3-0.1c5.2-1.9,9.6-6.8,11.3-8.9C93.4,82.1,91.3,77.6,90.1,75.1z' />
		</svg>
	</StyledIconsContainer>
)

export const IdIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 100 125'
			enable-background='new 0 0 100 100'
		>
			<path d='M83.807,81.34H16.193C10.6,81.34,6.05,76.789,6.05,71.196V28.804c0-5.593,4.55-10.144,10.144-10.144h67.613  c5.593,0,10.144,4.551,10.144,10.144v42.392C93.95,76.789,89.4,81.34,83.807,81.34z M16.193,21.11c-4.242,0-7.693,3.451-7.693,7.694  v42.392c0,4.243,3.451,7.694,7.693,7.694h67.613c4.242,0,7.693-3.451,7.693-7.694V28.804c0-4.243-3.451-7.694-7.693-7.694H16.193z   M41.718,73.058H12.357c-0.677,0-1.225-0.548-1.225-1.225c0-11.172,5.638-20.17,13.25-21.884c-4.959-1.198-8.654-5.673-8.654-10.995  c0-6.236,5.074-11.31,11.31-11.31c6.236,0,11.31,5.074,11.31,11.31c0,5.322-3.695,9.797-8.654,10.995  c7.612,1.714,13.25,10.712,13.25,21.884C42.943,72.51,42.395,73.058,41.718,73.058z M13.607,70.608h26.86  c-0.433-10.31-6.292-18.504-13.43-18.504S14.041,60.298,13.607,70.608z M27.038,30.094c-4.885,0-8.859,3.975-8.859,8.86  s3.974,8.859,8.859,8.859s8.86-3.974,8.86-8.859S31.923,30.094,27.038,30.094z M84.443,72.305H49.812  c-0.677,0-1.225-0.548-1.225-1.225s0.548-1.225,1.225-1.225h34.631c0.677,0,1.225,0.548,1.225,1.225S85.12,72.305,84.443,72.305z   M84.443,61.765H49.812c-0.677,0-1.225-0.548-1.225-1.225s0.548-1.225,1.225-1.225h34.631c0.677,0,1.225,0.548,1.225,1.225  S85.12,61.765,84.443,61.765z M84.443,51.225H49.812c-0.677,0-1.225-0.548-1.225-1.225s0.548-1.225,1.225-1.225h34.631  c0.677,0,1.225,0.548,1.225,1.225S85.12,51.225,84.443,51.225z M84.443,38.426H49.812c-0.677,0-1.225-0.548-1.225-1.225v-6.399  c0-0.677,0.548-1.225,1.225-1.225h34.631c0.677,0,1.225,0.548,1.225,1.225v6.399C85.668,37.878,85.12,38.426,84.443,38.426z   M51.037,35.976h32.181v-3.949H51.037V35.976z' />
		</svg>
	</StyledIconsContainer>
)
export const GiftIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 847 1058.75'
		>
			<g>
				<path
					class='fil0'
					d='M243 175l0 81c49,-75 133,16 75,63l457 0 0 -90c0,-30 -24,-54 -54,-54l-478 0zm0 247l0 249 478 0c30,0 54,-24 54,-53l0 -265 -465 0c73,47 -17,146 -67,69zm-33 249l0 -244c-44,68 -138,-26 -64,-74l-74 0 0 265c0,29 24,53 54,53l84 0zm0 -419l0 -77 -84 0c-30,0 -54,24 -54,54l0 90 66 0c-59,-48 28,-134 72,-67zm-84 -111l595 0c48,0 88,40 88,88l0 389c0,48 -40,87 -88,87l-595 0c-48,0 -88,-39 -88,-87l0 -389c0,-48 40,-88 88,-88zm79 173c-25,-96 -103,-26 0,0zm46 0c103,-26 25,-96 0,0zm-46 50c-103,26 -25,96 0,0zm46 0c25,96 103,26 0,0z'
				/>
			</g>
		</svg>
	</StyledIconsContainer>
)

export const ArrowIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 100 125'
		>
			<path d='M95.4,45L66.1,15.7c-2.7-2.7-7.2-2.7-9.9,0c-2.7,2.7-2.7,7.2,0,9.9L73.5,43h-64c-3.9,0-7,3.1-7,7s3.1,7,7,7h64L56.2,74.3    c-2.7,2.7-2.7,7.2,0,9.9c1.4,1.4,3.2,2.1,5,2.1s3.6-0.7,5-2.1L95.4,55c1.3-1.3,2.1-3.1,2.1-5C97.5,48.1,96.8,46.3,95.4,45z' />
		</svg>
	</StyledIconsContainer>
)

export const ChatIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
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

export const CalendarIcon = ({ tooltipTitle }) => (
	<StyledIconsContainer tooltipTitle={tooltipTitle}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='-8 -7 115 125'
		>
			<g transform='translate(0,-952.36218)'>
				<path
					d='m 68.9688,958.36216 c 1.1046,0 2,0.8954 2,2 l 0,12.28125 c 3.4327,0.89897 6,4.01733 6,7.71875 0,4.3945 -3.6054,8.00005 -8,8.00005 -4.3946,0 -8,-3.60555 -8,-8.00005 0,-3.70142 2.5672,-6.81978 6,-7.71875 l 0,-12.28125 c 0,-1.1046 0.8953,-2 2,-2 z m -38,0 c 1.1046,0 2,0.8954 2,2 l 0,12.28125 c 3.4327,0.89897 6,4.01733 6,7.71875 0,4.3945 -3.6054,8.00005 -8,8.00005 -4.3946,0 -8,-3.60555 -8,-8.00005 0,-3.70142 2.5672,-6.81978 6,-7.71875 l 0,-12.28125 c 0,-1.1046 0.8953,-2 2,-2 z m 52,6 c 5.5211,0 10.0312,4.51015 10.0312,10.03125 l 0,61.93749 c 0,5.521 -4.5101,10.0313 -10.0312,10.0313 l -65.9375,0 c -5.5211,0 -10.0312998,-4.5103 -10.0312998,-10.0313 l 0,-61.93749 c 0,-5.52111 4.5101998,-10.03125 10.0312998,-10.03125 l 5.9687,0 c 1.0566,-0.015 2.0313,0.9433 2.0313,2 0,1.05669 -0.9747,2.0149 -2.0313,2 l -5.9687,0 c -3.3704,0 -6.0313,2.66075 -6.0313,6.03125 l 0,17.9688 78,0 0,-17.9688 c 0,-3.3705 -2.6606,-6.03125 -6.0312,-6.03125 l -5.9688,0 c -1.0566,0.015 -2.0312,-0.94331 -2.0312,-2 0,-1.0567 0.9746,-2.0149 2.0312,-2 z m -21.9688,0 c 1.1046,0 2,0.8954 2,2 0,1.1046 -0.8954,2 -2,2 l -22,0 c -1.1046,0 -2,-0.8954 -2,-2 0,-1.1046 0.8954,-2 2,-2 z m 7.9688,12 c -2.2328,0 -4,1.7671 -4,4 0,2.2328 1.7672,4 4,4 2.2328,0 4,-1.7672 4,-4 0,-2.2329 -1.7672,-4 -4,-4 z m -38,0 c -2.2328,0 -4,1.7671 -4,4 0,2.2328 1.7672,4 4,4 2.2328,0 4,-1.7672 4,-4 0,-2.2329 -1.7672,-4 -4,-4 z M 89,996.36221 l -78,0 0,39.96869 c 0,3.3705 2.6609,6.0313 6.0313,6.0313 l 65.9375,0 c 3.3706,0 6.0312,-2.6608 6.0312,-6.0313 z'
					fill-opacity='1'
					marker='none'
					visibility='visible'
					display='inline'
					overflow='visible'
				/>
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
	fill: #a5a5a5;
	cursor: pointer;
	transition: 0.2s;

	:hover {
		fill: ${setColor.primaryBlue};
		transition: 0.2s;
	}
`
