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

const IconsBar = ({ className, handleMouseEnter, handleMouseLeave }) => {
	return (
		<div
			className={className}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<PhoneIcon />
			<IdIcon />
			<GiftIcon />
			<ArrowIcon />
			<ChatIcon />
			<CalendarIcon />
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
