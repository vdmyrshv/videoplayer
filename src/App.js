import React from 'react'
import styled from 'styled-components'
import SliderCarousel from './components/sliderCarousel/SliderCarousel'
import GlobalStyles from './components/globals/GlobalStyles'

import mockData from './data/dummyVideos'

const App = ({ className }) => {
	console.log(mockData)
	return (
		<>
		<GlobalStyles />
		<div className={className}>
			<SliderCarousel data={mockData} />
		</div>
		</>
	)
}

export default styled(App)`
	height: 100vh;
	width: 100%;
	padding: 20px;
	display: flex;
`
