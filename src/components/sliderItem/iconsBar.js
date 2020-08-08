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

import IconContext from '../../context/IconContext'

const IconsBar = ({
	className,
	handleMouseEnter,
	handleMouseLeave,
	style,
	small,
	iconColor,
	iconHoverColor,
	tooltipDelay = 200,
	tooltipPlacement = 'bottom',
	tooltipFontSize = 14
}) => {
	return (
		<div
			className={className}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={style}
		>
			<IconContext.Provider
				value={{
					small,
					iconColor,
					iconHoverColor,
					tooltipDelay,
					tooltipPlacement,
					tooltipFontSize
				}}
			>
				<PhoneIcon tooltipTitle='call to find out more' />
				<IdIcon tooltipTitle='drop a business card' />
				<GiftIcon tooltipTitle='drop some swag' />
				<ArrowIcon tooltipTitle='go to site' />
				<ChatIcon tooltipTitle='chat with a representative' />
				<CalendarIcon tooltipTitle='book a meeting' />
			</IconContext.Provider>
		</div>
	)
}

export default styled(IconsBar)`
	display: flex;
	justify-content: space-evenly;
`
