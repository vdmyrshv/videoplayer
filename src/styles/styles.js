import { css, keyframes } from 'styled-components'

const defaultImage =
	'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'

export const setColor = {
	primaryColor: 'black',
	mainWhite: '#fff',
	mainBlack: '#555',
	mainGrey: '#ececec',
	lightGrey: '#f7f7f7'
}

export const setFont = {
	main: "font-family: 'Mulish', sans-serif;",
	slanted: "font-family: 'Courgette', cursive;"
}

export const setBoxShadow = {
	light: 'box-shadow: 0 0 15px -6px rgba(0,0,0,0.25);',
	dark: 'box-shadow: 0 0 15px -6px rgba(0,0,0,0.55);',
	darkest: 'box-shadow: 0 0 15px -6px rgba(0,0,0,0.75);',
	lightPressed: 'box-shadow: 0 0 25px -6px rgba(0,0,0,0.25);',
	darkPressed: 'box-shadow: 0 0 25px -6px rgba(0,0,0,0.55);',
	darkestPressed: 'box-shadow: 0 0 25px -6px rgba(0,0,0,0.75);'
}

//setting defaults
export const setFlex = ({ x = 'center', y = 'center' } = {}) => `
display: flex;
align-items: ${y};
justify-content: ${x};
`
export const setBackground = ({
	img = defaultImage,
	direction = 'to right bottom',
	colorOne = 'rgba(0, 139, 139, .3)',
	colorTwo = 'rgba(173, 255, 47, .3)'
} = {}) => `
    background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo}), 
        url(${img});
`

export const setLetterSpacing = (spacing = 2) => `
	letter-spacing: ${spacing}px;
`

export const setBorder = ({
	width = '2px',
	style = 'solid',
	color = setColor.mainWhite
} = {}) => `
	border: ${width} ${style} ${color};
`

//code for the object and fn are from styled components docs on how to create helper function for media queries
//this code has been removed from the official docs but it's still good to have

//object map of breakpoints for easy customization
const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576
}

//iterate through the sizes and create a media template
//you can change desktop-centric or mobile-centric design by changing max-width/min-width property inside
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {})

//animation helper fn example - in this case the fn arguments are only the translateY value, but this is the gist of it

export const fadeIn = (start, mid, end) => {
	const animation = keyframes`
        0%{
            opacity: 0;
            transform: translateY(${start});
        }
        50%{
            transform: translateY(${mid});
        }
        100%{
            opacity: 1;
            transform: translateY(${end});
        }
    `
	return css`
		animation: ${animation} 1s ease-in-out;
	`
}

//animation transition helper function
export const setTransition = ({
	property = 'all',
	time = '0.3s',
	timing = 'ease-in-out'
} = {}) => `
	transition: ${property} ${time} ${timing};
`
