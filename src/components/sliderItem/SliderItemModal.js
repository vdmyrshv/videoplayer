import React from 'react'

import ReactModal from 'react-modal'

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
        height: '80%',
        width: '80%',
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
        position: 'relative'
    }
}

const SliderItemModal = ({modalIsOpen, closeModal, companyData: {image, company, caption}}) => {
	return (
		<ReactModal
			isOpen={modalIsOpen}
			style={customStyles}
			onRequestClose={closeModal}
		>
			<div
				onClick={closeModal}
				style={{ height: 20, width: 20, left: 0 }}
			>
				<CloseIcon />
			</div>
			<img src={image} alt='company image' width='90%' />
			<h1>{company}</h1>
			<p>{caption}</p>
			<IconsBar />
		</ReactModal>
	)
}

export default SliderItemModal
