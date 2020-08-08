import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import truncateString from '../../utils/truncateString'

import IconsBar from './IconsBar'

import styled from 'styled-components'

import SliderItemModal from './SliderItemModal'

let zoomCharacteristics = {
	zoomSpeed: `transition: 2s;`,
	zoomLevel: `transform: scale(1.5);`
}

const setZoomSpeed = zoomSpeed => {
	const cssZoomSpeed = zoomSpeed * 0.0034
	return `transition: ${cssZoomSpeed}s;`
}
const setZoomLevel = zoomLevel => {
	const cssZoomLevel = zoomLevel / 100 + 1
	return `transform: scale(${cssZoomLevel});`
}

const SliderItem = ({ className, data }) => {
	const { company, caption, image } = data

	const [isHovering, setIsHovering] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const [isVideoVisible, setIsVideoVisible] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const handleMouseEnter = () => setIsHovering(true)
	const handleMouseLeave = () => setIsHovering(false)
	useEffect(() => {
		console.log(isFocused)
	}, [isFocused])
	const truncatedCaption = truncateString(caption, 120)

	useEffect(() => {
		zoomCharacteristics.zoomSpeed = setZoomSpeed(data.zoomSpeed)
		zoomCharacteristics.zoomLevel = setZoomLevel(data.zoomLevel)
		//console.log('ZOOMSPEED', zoomCharacteristics.zoomSpeed)
		//console.log('zoomlevel', zoomCharacteristics.zoomLevel)
	}, [data])
	console.log('SLIDE DATA', data)

	const closeModal = () => setModalIsOpen(false)

	const openModal = () => setModalIsOpen(true)

	return (
		<>
			<SliderItemModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				companyData={{ company, caption, image }}
			/>
			<div
				className={className}
				onClick={() => {
					setIsFocused(true)
					openModal()
				}}
				onMouseLeave={() => setIsFocused(false)}
				style={{
					backgroundImage: `url("${image}")`
				}}
			>
				{/* {isVideoVisible && (
							<ReactPlayer
								url={videoUrl}
								playing={isHovering}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onClick={() => console.log('clicked!')}
								height='300px'
								width='450px'
								loop
								muted
							/>
						)} */}
				<h6>{company}</h6>
				<div className='icons-bar'>
					<IconsBar
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						iconColor='#a6a6a6'
						small
						style={{ right: 0, top: 0, bottom: 0 }}
					/>
				</div>
			</div>
		</>
	)
}

export default styled(SliderItem)`
	height: 100%;
	width: 100%;
	transition: 0.2s all;
	position: relative;
	margin: 20px;
	transition: all 0.2s;
	padding: 1rem;
	border: 2px white solid;
	z-index: 0;
	background-color: ivory;

	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	.modal {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		background-color: blue;
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
		transition: 0.4s;
		cursor: context-menu;
		::selection {
			background-color: transparent;
		}
	}

	:not(:hover) {
		z-index: -1;
	}

	:hover {
		${zoomCharacteristics.zoomLevel}
		${zoomCharacteristics.zoomSpeed}
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
