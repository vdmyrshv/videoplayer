import React, { useContext } from 'react'

import ExhibitorContext from '../context/ExhibitorContext'

import styled from 'styled-components'
import SliderCarousel from '../components/sliderCarousel/SliderCarousel'

const SliderPage = ({ className }) => {
	const exhibitors = useContext(ExhibitorContext)
	return (
		<div className={className}>
			{!!exhibitors &&
				exhibitors.map(exhibitor => (
					<SliderCarousel data={exhibitor} />
				))}
		</div>
	)
}

export default styled(SliderPage)`
	background-color: black;
	padding: 2rem;
`
