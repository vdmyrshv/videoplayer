import React, { useContext } from 'react'

import styled from 'styled-components'

import SliderItem from '../sliderItem/SliderItem'

import ExhibitorContext from '../../context/ExhibitorContext'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
		partialVisibilityGutter: 20
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		partialVisibilityGutter: 20
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		partialVisibilityGutter: 20
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		partialVisibilityGutter: 20
	}
}

const SliderCarousel = ({ data, className, category }) => {

	console.log('EXHIBITOR CONTEXT', data)

	return (
		<div className={className}>
			<h1>{category}</h1>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={false}
				showDots={false}
				ssr={true}
				infinite={true} 
				removeArrowOnDeviceType={["tablet", "mobile"]}
				partialVisible={true}
			>
				{data.map(data => (
					<SliderItem key={data.id} data={data} />
				))}
			</Carousel>
		</div>
	)
}

export default styled(SliderCarousel)`
	display: flex;
	flex-direction: column;
	background-color: black;
	color: white;

	h1 {
		margin: 2rem;
	}

	.slider {
		display: flex;
		flex-direction: row;
	}
`
