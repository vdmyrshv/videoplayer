import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import IconsBar from './IconsBar'

import styled from 'styled-components'

import mockData from '../../data/dummyVideos'

const { videoUrl, tileName } = mockData[2]

const SliderItem = ({ className }) => {
	const [isHovering, setIsHovering] = useState(false)
	const handleMouseEnter = () => setIsHovering(true)
	const handleMouseLeave = () => setIsHovering(false)

	console.log(isHovering)

	return (
		<div className={className}>
			<ReactPlayer
				url={videoUrl}
				playing={isHovering}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={() => console.log('clicked!')}
				loop
				muted
			/>
			<IconsBar handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
		</div>
	)
}

export default styled(SliderItem)`
	height: 200;
	width: 300;
	transition: 0.2s all;
	position: relative;

	:hover {
		transform: scale(1.1);
		transition: 0.2s;
	}

	:focus {
		transform: scale(1.1);
	}
`
