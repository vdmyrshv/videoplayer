import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import IconsBar from './IconsBar'

import styled from 'styled-components'

const SliderItem = ({ className, data }) => {
	const { videoUrl } = data
	const [isHovering, setIsHovering] = useState(false)
	const handleMouseEnter = () => setIsHovering(true)
	const handleMouseLeave = () => setIsHovering(false)

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
			<IconsBar
				handleMouseEnter={handleMouseEnter}
				handleMouseLeave={handleMouseLeave}
			/>
		</div>
	)
}

export default styled(SliderItem)`
	height: 200;
	width: 300;
	transition: 0.2s all;
	position: relative;
	margin: 20px;
	transition: 0.1s;

	:hover {
		transform: scale(1.1);
		transition: 2s;
		z-index: 20;
	}

	:focus {
		transform: scale(1.1);
	}
`
