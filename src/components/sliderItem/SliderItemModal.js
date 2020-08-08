import React from 'react'

import ReactModal from 'react-modal'

import styled from 'styled-components'

import { CloseIcon } from '../../styles/icons'

import IconsBar from './IconsBar'

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	content: {
		height: '70%',
		width: '60%',
		transform: 'translate(-50%, -50%)',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		borderRadius: 0,
		border: 'none',
		outline: 'none',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		overflow: 'hidden'
	}
}

const SliderItemModal = ({
	modalIsOpen,
	closeModal,
	companyData: { image, company, caption },
	className
}) => {
	return (
		<ReactModal
			isOpen={modalIsOpen}
			style={customStyles}
			onRequestClose={closeModal}
		>
			<div className={className}>
				<div onClick={closeModal} className='close-icon'>
					<CloseIcon />
				</div>
				<div className='image'>
					<img
						src={image}
						alt='company image'
						height='100%'
					/>
				</div>
				<h1>{company}</h1>
				<p>{caption}</p>
				<IconsBar
					iconSize='70px'
					iconColor='#cecece'
					style={{
						bottom: 0,
						left: 0,
						right: 0,
						flexDirection: 'row',
                        marginBottom: 10
					}}
				/>
			</div>
		</ReactModal>
	)
}

export default styled(SliderItemModal)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 90%;
    width: 100%;
    background-color: ivory;

	.close-icon {
		height: 20px;
		width: 20px;
		align-self: flex-end;
    }
    
    .image {
        height: 20%;
    }

	h1 {
        padding: 2rem 0;
        color: darkgrey;
	}

	p {
		height: 40%;
		overflow-y: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none; /* Internet Explorer 10+ */

		::-webkit-scrollbar {
			display: none;
		}
	}
`
