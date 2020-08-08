import React, { useContext } from 'react'

import styled from 'styled-components'

import SliderItem from '../sliderItem/SliderItem'

import ExhibitorContext from '../../context/ExhibitorContext'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomRightArrow from '../globals/CustomRightArrow'

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
	const { name, tile_set: tileset } = data

	//console.log('EXHIBITOR CONTEXT', data)

	return (
		<div className={className}>
			<h2>{name}</h2>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={false}
				showDots={false}
				ssr={true}
				//infinite={true}
				//removeArrowOnDeviceType={["tablet", "mobile"]}
				//partialVisible={true}
				sliderClass='slider'
				itemClass='item'
				containerClass='container'
				//customRightArrow={<CustomRightArrow />}
			>
				{!!tileset &&
					tileset.map(data => (
						<SliderItem key={data.id} data={data} />
					))}
			</Carousel>
		</div>
	)
}

export default styled(SliderCarousel)`
	display: flex;
	flex-direction: column;
	color: white;

	h2 {
		margin-left: 1.5rem;
		font-weight: 300;
		color: darkcyan;
		margin-bottom: 4rem;
	}

	.slider {
		overflow: visible;
		margin: 0;
		padding: 0;
		margin-top: -7rem;
		background-color: red;
		margin-left: 2rem;
		box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.6);
	}

	.item {
		height: 250px;
		margin: 0;
		padding: 0;
		overflow: visible;
		transition: z-index 0s 0.5s;

		:hover {
			z-index: 10;
			transition: z-index 0s 0s;
		}

		:hover + * {
			z-index: -2;
			transition: z-index 0s 0s;
		}

		:not(:hover) {
			z-index: -1;
		}
	}

	.container {
		z-index: 0;
		height: 30rem;
		overflow: visible;
		margin-bottom: 2rem;
	}
`
