import React, { useState, useContext } from 'react'

import ExhibitorContext from '../context/ExhibitorContext'

import styled from 'styled-components'
import SliderCarousel from '../components/sliderCarousel/SliderCarousel'

const SliderPage = ({ className }) => {
	const exhibitors = useContext(ExhibitorContext)

	return (
		<div className={className}>
			{!!exhibitors &&
				exhibitors.map(exhibitor => (
					<SliderCarousel key={exhibitor.id} data={exhibitor} />
				))}
		</div>
	)
}

export default styled(SliderPage)`
	/* overflow-x: hidden; */
`
