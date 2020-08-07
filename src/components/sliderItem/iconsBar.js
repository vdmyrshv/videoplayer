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
	iconSize,
	iconColor,
	iconHoverColor='red'
}) => {
	
	return (
		<div
			className={className}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={style}
		>
			<IconContext.Provider value={{ iconSize, iconColor, iconHoverColor }}>
				<PhoneIcon iconSize={iconSize} />
				<IdIcon iconSize={iconSize} />
				<GiftIcon iconSize={iconSize} />
				<ArrowIcon iconSize={iconSize} />
				<ChatIcon iconSize={iconSize} />
				<CalendarIcon iconSize={iconSize} />
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
