import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import truncateString from '../../utils/truncateString'

import IconsBar from './IconsBar'

import styled from 'styled-components'

const SliderItem = ({ className, data }) => {
	const { company, caption, image } = data
	const [isHovering, setIsHovering] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const handleMouseEnter = () => setIsHovering(true)
	const handleMouseLeave = () => setIsHovering(false)
	useEffect(()=> {console.log(isFocused)}, [isFocused])
	const truncatedCaption = truncateString(caption, 120)

	return (
		<div
			className={className}
			onClick={() => setIsFocused(true)}
			onMouseLeave={()=> setIsFocused(false)}
		>
			<div
				className='background'
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), transparent), url("${image}")`
				}}
			>
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
				<h6>{company}</h6>
				<p style={isFocused ? {opacity: 1} : {}}>{truncatedCaption}</p>
				<div className='icons-bar'>
					<IconsBar
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				</div>
			</div>
		</div>
	)
}

export default styled(SliderItem)`
	height: 200px;
	width: 355px;
	transition: 0.2s all;
	position: relative;
	margin: 20px;
	transition: all 0.2s;
	padding: 1rem;
	border: 2px white solid;
	z-index: 0;
	background-color: black;

	.background {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.icons-bar {
		opacity: 0;
		transition: 0.2s;
	}

	h6 {
		margin: 1rem;
		position: absolute;
		bottom: -50px;
		left: 0;
		right: 0;
	}

	p {
		width: 70%;
		opacity: 0;
		transition: 0.2s;
	}

	:not(:hover) {
		z-index: -1;
	}

	:hover {
		transform: scale(1.1);
		transition: 0.2s;
		z-index: 20;

		.icons-bar {
			opacity: 1;
			transition: 0.2s;
		}

		/* h5 {
			top: -50px;
			left: 0;
			right: 0;
			transition: 0.2s;
		} */

		/* p {
			opacity: 1;
			transition: 0.2s;
		} */
	}
`
