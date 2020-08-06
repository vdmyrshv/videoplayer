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
		<div className={className} style={{
			backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), transparent), url("${data.image}")`
		}}>
			{/* <ReactPlayer
				url={videoUrl}
				playing={isHovering}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={() => console.log('clicked!')}
				height='300px'
				width='450px'
				loop
				muted
			/> */}
			<h4>{data.company}</h4>
			<p>{data.caption}</p>
			<IconsBar
				handleMouseEnter={handleMouseEnter}
				handleMouseLeave={handleMouseLeave}
			/>
		</div>
	)
}

export default styled(SliderItem)`
	height: 300px;
	width: 450px;
	transition: 0.2s all;
	position: relative;
	margin: 20px;
	transition: 0.1s;
	
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	h4 {
		margin: 1rem;
	}

	p {
		margin: 1rem;
	}

	:hover {
		transform: scale(1.1);
		transition: 0.2s;
		z-index: 20;
	}

	:focus {
		transform: scale(1.1);
		z-index: 20;
	}
`
