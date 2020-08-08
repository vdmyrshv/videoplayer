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

import IconContext from '../../context/IconContext'

const IconsBar = ({
	className,
	handleMouseEnter,
	handleMouseLeave,
	style,
	small,
	iconColor,
	iconHoverColor = 'red'
}) => {
	return (
		<div
			className={className}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={style}
		>
			<IconContext.Provider value={{ small, iconColor, iconHoverColor }}>
				<PhoneIcon />
				<IdIcon />
				<GiftIcon />
				<ArrowIcon />
				<ChatIcon />
				<CalendarIcon />
			</IconContext.Provider>
		</div>
	)
}

export default styled(IconsBar)`
	position: absolute;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
