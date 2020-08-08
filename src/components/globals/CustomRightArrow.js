import React from 'react'

import styled from 'styled-components'

const CustomRightArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest
	// onMove means if dragging or swiping in progress.
	return <button onClick={onClick}><h1>HELLO</h1></button>
}

export default styled(CustomRightArrow)`
    color: black;
    height: 20rem;
    top: 50%;
	position: fixed;
    right: 0;
    z-index: 10;
    color: black;
    font-size: 50px;
`
