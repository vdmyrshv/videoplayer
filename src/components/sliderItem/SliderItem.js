import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

import truncateString from '../../utils/truncateString'

import IconsBar from './IconsBar'

import styled from 'styled-components'

import SliderItemModal from './SliderItemModal'

import { Transition } from 'react-transition-group'
import VideoTransition from '../globals/VideoTransition'

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
	const sizeRef = useRef()

	const { company, caption, image, company_url, video } = data

	const [isHovering, setIsHovering] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const [isVideoVisible, setIsVideoVisible] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const [containerWidth, setContainerWidth] = useState('340px')
	const [containerHeight, setContainerHeight] = useState('340px')

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

	useEffect(() => {
		// console.log('WIDTH', sizeRef.current ? sizeRef.current.offsetWidth : 0)
		if (sizeRef.current) {
			setContainerWidth(`${sizeRef.current.offsetWidth - 4}px`)
			setContainerHeight(`${sizeRef.current.offsetHeight - 4}px`)
		}
	}, [sizeRef.current])

	const closeModal = () => setModalIsOpen(false)

	const openModal = () => setModalIsOpen(true)

	return (
		<>
			<SliderItemModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				companyData={{ company, caption, image, company_url }}
			/>
			<div
				className={className}
				onClick={() => {
					setIsFocused(true)
					openModal()
				}}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsFocused(false)}
				ref={sizeRef}
			>
				{!!video && (
					<VideoTransition
						trigger={isHovering}
						duration={600}
						timeout={500}
					>
						{({ defaultStyle, transitionStyles, state }) => {
							return (
								<ReactPlayer
									url={video}
									playing={isHovering}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									onClick={() => console.log('clicked!')}
									height={containerHeight}
									width={containerWidth}
									loop
									muted
									style={{
										position: 'absolute',
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										backgroundColor: 'black',
										...defaultStyle,
										...transitionStyles[state]
									}}
								/>
							)
						}}
					</VideoTransition>
				)}
				<div
					className='background'
					style={{
						backgroundImage: `url("${image}")`
					}}
				>
					<h6>{company}</h6>
					<div className='icons-bar'>
						<IconsBar
							handleMouseEnter={handleMouseEnter}
							handleMouseLeave={handleMouseLeave}
							iconColor='#555555'
							tooltipFontSize={14}
							tooltipPlacement='right'
							small
							style={{
								right: 0,
								top: 0,
								bottom: 0,
								marginRight: 5,
								position: 'absolute',
								flexDirection: 'column'
							}}
						/>
					</div>
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
	transition: all 0.2s;
	padding: 2rem;
	border: 2px white solid;
	z-index: 0;
	background-color: ivory;

	.background {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 100%;
		width: 100%;
		z-index: 10;
	}

	.modal {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		background-color: blue;
	}

	.icons-bar {
		opacity: 0;
		transition: 0.2s;
		z-index: 20;
	}

	h6 {
		margin: 1rem;
		position: absolute;
		bottom: -50px;
		left: 0;
		right: 0;
		font-weight: 300;
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
		border: 2px solid darkcyan;
		backface-visibility: hidden;
		transition-delay: .4s;

		.icons-bar {
			opacity: 1;
			transition: 0.2s;
		}
	}
`
