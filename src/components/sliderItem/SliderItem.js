import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

import truncateString from '../../utils/truncateString'

import IconsBar from './IconsBar'

import styled, { css } from 'styled-components'

import { setColor } from '../../styles/styles'

import SliderItemModal from './SliderItemModal'

import VideoTransition from '../globals/VideoTransition'

const setZoomSpeed = zoomSpeed => {
	const cssZoomSpeed = zoomSpeed * 0.0034
	return `
		transition: all ${cssZoomSpeed}s;
	`
}
const setZoomLevel = zoomLevel => {
	const cssZoomLevel = zoomLevel / 100 + 1
	return `
		transform: scale(${cssZoomLevel});
	`
}

const SliderItem = ({ className, data, windowDimensions }) => {
	const sizeRef = useRef()

	const {
		company,
		caption,
		image,
		company_url,
		video,
		zoomSpeed,
		zoomLevel,
		videocall_url
	} = data

	const [isHovering, setIsHovering] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const [containerWidth, setContainerWidth] = useState('340px')
	const [containerHeight, setContainerHeight] = useState('340px')

	const handleMouseEnter = () => setIsHovering(true)
	const handleMouseLeave = () => setIsHovering(false)

	const truncatedCaption = truncateString(caption, 120)

	useEffect(() => {
		console.log('TILE DATA', data)
	}, [data])

	useEffect(() => {
		// console.log('WIDTH', sizeRef.current ? sizeRef.current.offsetWidth : 0)
		if (sizeRef.current) {
			setContainerWidth(`${sizeRef.current.offsetWidth + 1}px`)
			setContainerHeight(`${sizeRef.current.offsetHeight + 1}px`)
		}
	}, [sizeRef.current, windowDimensions])

	const closeModal = () => setModalIsOpen(false)

	const openModal = () => setModalIsOpen(true)

	return (
		<>
			<SliderItemModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				companyData={{ company, caption, image, company_url }}
			/>
			<TileDiv
				className={className}
				onClick={() => {
					openModal()
				}}
				ref={sizeRef}
				zoomLevel={zoomLevel}
				zoomSpeed={zoomSpeed}
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
										overflow: 'hidden',
										backfaceVisibility: 'hidden',
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
							videocallURL={videocall_url}
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
			</TileDiv>
		</>
	)
}

const TileDiv = styled.div`
	:hover {
		${props => setZoomLevel(props.zoomLevel)}
		${props => setZoomSpeed(props.zoomSpeed)}
	}
`

export default styled(SliderItem)`
	height: 100%;
	width: 100%;
	transition: 0.2s all;
	position: relative;
	padding: 2rem;
	/* border: 2px white solid; */
	z-index: 0;
	background-color: ivory;
	backface-visibility: hidden;

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
		/* pointer-events:none; excludes hover */
		pointer-events: none;
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
		z-index: 20;
		/* border: 2px solid ${setColor.primaryBlue}; */
		backface-visibility: hidden;
		transition-delay: 0.4s;

		.icons-bar {
			opacity: 1;
			transition: 0.2s;
		}
	}
`
