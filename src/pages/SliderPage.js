import React, { useState, useContext, useEffect } from 'react'

import { useWindowResize, useDebouncedFn } from 'beautiful-react-hooks'

import ExhibitorContext from '../context/ExhibitorContext'

import styled from 'styled-components'
import SliderCarousel from '../components/sliderCarousel/SliderCarousel'

const SliderPage = ({ className }) => {
	const exhibitors = useContext(ExhibitorContext)

	const [windowDimensions, setWindowDimensions] = useState({
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight
	})

	const watchWindowResize = useDebouncedFn(() => {
		setWindowDimensions({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
		console.log('WINDOW RESIZED')
	}, 250)

	useWindowResize(watchWindowResize)

	useEffect(() => {
		watchWindowResize.cancel()
	}, [])

	return (
		<div className={className}>
			{!!exhibitors &&
				exhibitors.map(exhibitor => (
					<SliderCarousel
						key={exhibitor.id}
						data={exhibitor}
						windowDimensions={windowDimensions}
					/>
				))}
		</div>
	)
}

export default styled(SliderPage)`
	overflow-x: hidden;
`
