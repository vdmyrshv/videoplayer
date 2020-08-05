import React from 'react'
import styled from 'styled-components'
import SliderItem from './components/sliderItem/SliderItem'

const App = ({ className }) => {
	return (
		<div className={className}>
			<SliderItem />
		</div>
	)
}

export default styled(App)`
	background-color: red;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
