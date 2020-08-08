import React from 'react'

import { Transition } from 'react-transition-group'

const VideoTransition = ({ children, trigger, timeout, duration }) => {
	//TRANSITION STYLES

	const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        transitionDelay: '.4s',
		opacity: 0
	}

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 }
	}
	return (
		<Transition in={trigger} timeout={timeout}>
			{state => children({ defaultStyle, transitionStyles, state })}
		</Transition>
	)
}

export default VideoTransition
