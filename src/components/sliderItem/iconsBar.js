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
	bottom: 0;
	left: 0;
	right: 0;
	color: white;
	display: flex;
	justify-content: center;
	padding-bottom: 5px;
`
