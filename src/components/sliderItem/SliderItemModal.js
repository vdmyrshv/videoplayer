import React from 'react'

import ReactModal from 'react-modal'

import styled from 'styled-components'

import { CloseIcon } from '../../styles/icons'

import { setColor } from '../../styles/styles'

import IconsBar from './IconsBar'

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)'
	},
	content: {
		height: '80%',
		width: '60%',
		transform: 'translate(-50%, -50%)',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		borderRadius: 0,
		outline: 'none',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
        backgroundColor: 'ivory',
        paddingLeft: 40,
        paddingRight: 40,
		position: 'relative',
		boxShadow: '0px 0px 48px 0px rgba(0,0,0,0.4)'
	}
}

const SliderItemModal = ({
	modalIsOpen,
	closeModal,
	companyData: { image, company, caption, company_url },
	className
}) => {
    //console.log('COMPANY DATA', company_url)
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
                <a href={company_url} target='_blank'><h6>View Site</h6></a>
				<p>{caption}</p>
				<IconsBar
					iconSize='70px'
					iconColor='#1b1b1b'
					style={{
						flexDirection: 'row',
                        alignSelf: 'stretch',
                        paddingTop: 10
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
	height: 100%;
    width: 100%;
    backface-visibility: hidden;

	.close-icon {
		height: 20px;
		width: 20px;
        position: absolute;
        top: 15px;
        right: 15px;
        
    }
    
    .image {
        height: 15%;
    }

	h1 {
        padding: 1rem 0;
        color: darkgrey;
        font-weight: 200;
    }
    
    a {
        text-decoration: none;

        h6 {
            font-weight: 300;
            color: ${setColor.primaryBlue};
        }
    }

	p {
		overflow-y: scroll;
		scrollbar-width: none;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        flex-grow: 1;
        color: ${setColor.mainGrey};

		::-webkit-scrollbar {
			display: none;
		}
	}
`
