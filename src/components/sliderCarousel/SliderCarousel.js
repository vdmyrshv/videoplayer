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
		breakpoint: { max: 1024, min: 768 },
		items: 2,
		partialVisibilityGutter: 20
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
		partialVisibilityGutter: 20
	}
}

const SliderCarousel = ({ data, className }) => {

	const {name, tile_set: tileset} = data

	console.log('EXHIBITOR CONTEXT', data)

	return (
		<div className={className}>
			<h2>{name}</h2>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={false}
				showDots={false}
				ssr={true}
				infinite={true} 
				//removeArrowOnDeviceType={["tablet", "mobile"]}
				partialVisible={true}
				sliderClass='slider'
				itemClass='item'
				containerClass='container'
			>
				{!!tileset && tileset.map(data => (
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

	h2 {
		margin-left: 1.5rem;

	}

	.slider {
		overflow: visible;
		margin: 0;
		padding: 0;
	}

	.item {
		margin: 0;
		padding: 0;
	}

	.container {
		z-index: 0;
		height: 40vh;
		overflow: visible;
		margin-bottom: 2rem;
	}
`
