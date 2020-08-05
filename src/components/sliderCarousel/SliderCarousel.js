import React from 'react'

import styled from 'styled-components'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import SliderItem from '../sliderItem/SliderItem'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
        items: 3
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
        items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 30 

	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
}

const SliderCarousel = ({ data, className }) => {
	return (
		<div className={className}>

				{data.map(item => (
					<SliderItem key={item.id} data={item} />
				))}

		</div>
	)
}

export default styled(SliderCarousel)`

`
