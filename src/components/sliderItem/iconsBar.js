import React from 'react'
import styled from 'styled-components'
import {
	PhoneIcon,
	IdIcon,
	GiftIcon,
	ArrowIcon,
	ChatIcon,
	CalendarIcon
} from '../../styles/icons'

import ReactTooltip from 'react-tooltip'

const IconsBar = ({ className, handleMouseEnter, handleMouseLeave }) => {
	return (
		<div
			className={className}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<PhoneIcon />
			<ReactTooltip id='phone' place='right' type='dark' effect='solid'>
				<span>This is the phone</span>
			</ReactTooltip>
			<IdIcon />
			<ReactTooltip id='id' place='right' type='dark' effect='solid'>
				<span>this is the id</span>
			</ReactTooltip>
			<GiftIcon />
			<ReactTooltip id='gift' place='right' type='dark' effect='solid'>
				<span>this is the gift</span>
			</ReactTooltip>
			<ArrowIcon />
			<ReactTooltip id='arrow' place='right' type='dark' effect='solid'>
				<span>this is the arrow</span>
			</ReactTooltip>
			<ChatIcon />
			<ReactTooltip id='chat' place='right' type='dark' effect='solid'>
				<span>chat with a representative</span>
			</ReactTooltip>
			<CalendarIcon />
			<ReactTooltip
				id='calendar'
				place='right'
				type='dark'
				effect='solid'
			>
				<span>book a meeting</span>
			</ReactTooltip>
		</div>
	)
}

export default styled(IconsBar)`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 5px;
`
