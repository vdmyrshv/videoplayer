import React, { useState, useEffect, useContext } from 'react'

import styled from 'styled-components'
import { setColor } from '../../styles/styles'

import { Context as UserContext } from '../../context/UserContext'

import useEffectAfterMount from '../../utils/hooks/useEffectAfterMount'

import { useDebouncedFn } from 'beautiful-react-hooks'

import expoHallAPI from '../../api/expoHallAPI'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import RegistrationButton from '../globals/RegistrationButton'

const RegistrationForm = ({ className }) => {
	const { state, setUser } = useContext(UserContext)
	const [email, setEmail] = useState('')
	const [screenName, setScreenName] = useState('')
	const [attendeeData, setAttendeeData] = useState('')
	const [userMatch, setUserMatch] = useState(undefined)

	useEffect(() => {
		getAttendeeData()
	}, [])

	useEffect(() => {
		console.log('STATE', state)
	}, [state])

	useEffectAfterMount(() => {
		emailChecker()
		return () => emailChecker.cancel()
	}, [email])

	const emailChecker = useDebouncedFn(() => {
		console.log('attendeeDATA!!!!', attendeeData)
		console.log('email', email)
		const isMatch = attendeeData.indexOf(email)
		if (isMatch !== -1) {
			setUserMatch(true)
			setUserContext(email)
		} else {
			setUserMatch(false)
		}
		console.log('EMAIL MATCHED?', isMatch)
	}, 1000)

	const setUserContext = async email => {
		try {
			const { data } = await expoHallAPI.post('/login/', { email: email })
			console.log('RETURNED USER', data)
			setUser(data.attendee)
		} catch (error) {
			console.log('ERROR', error)
		}
	}

	const getAttendeeData = async () => {
		const { data } = await expoHallAPI.get('/attendees/')
		console.log('data', data)
		const emails = data.map(att => att.email)
		setAttendeeData(emails)

		console.log('emails', emails)
	}

	return (
		<div className={className}>
			<div>
				<img src={require('../../assets/SHRM.png')} alt='SHRM Logo' />
			</div>
			<h1>Welcome to the expo hall!</h1>
			<form>
				<h5>Please enter your information below</h5>

				<p>
					If you've already registered, enter your registration email
					to gain access. If you have not yet registered, please fill
					out your information for the exhibitors.
				</p>

				<div className='formItem'>
					{/* <label htmlFor='email' className='formLabel'>
						Email/Username
					</label> */}
					<input
						type='email'
						name='email'
						id='email'
						placeholder='enter your email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{
							borderColor:
								userMatch === true
									? 'green'
									: userMatch === false
									? 'red'
									: 'inherit'
						}}
						onBlur={e => {
							if (!email) e.target.style.borderColor = 'grey'
						}}
					/>
				</div>
				<div className='formItem'>
					{/* <label className='formLabel' htmlFor='username'>
						Screen Name
					</label> */}
					<input
						type='text'
						name='username'
						id='username'
						placeholder='choose a screen name'
						value={screenName}
						onChange={e => setScreenName(e.target.value)}
					/>
				</div>
				<div className='toggle'>
					<Toggle
						defaultChecked={false}
						className='toggleClass'
						icons={false}
						onChange={() => console.log('changed')}
					/>
					<span>GDPR save data</span>
				</div>
				<div className='toggle'>
					<Toggle
						defaultChecked={false}
						className='toggleClass'
						icons={false}
						onChange={() => console.log('changed')}
					/>
					<span>Automatically share data with exhibitors</span>
				</div>
				<div className='checkbox'>
					<input
						type='checkbox'
						id='acceptUse'
						name='acceptUse'
						value='yes'
						className='checkmark'
						//onChange={e => setAcceptUse(e.target.value)}
					/>
					<label for='acceptUse' className='checkbox-label'>
						Accept terms of use
					</label>
				</div>
				<div className='checkbox'>
					<input
						type='checkbox'
						id='acceptConduct'
						name='acceptConduct'
						value='yes'
						className='checkmark'
					/>
					<label for='acceptConduct' className='checkbox-label'>
						Accept code of conduct
					</label>
				</div>
				<div className='checkbox'>
					<input
						type='checkbox'
						id='acceptPrivacy'
						name='acceptPrivacy'
						value='yes'
						className='checkmark'
					/>
					<label for='acceptPrivacy' className='checkbox-label'>
						{' '}
						Accept privacy
					</label>
				</div>
				<RegistrationButton onClick={e => e.preventDefault()}>
					Submit
				</RegistrationButton>
			</form>
		</div>
	)
}

export default styled(RegistrationForm)`
	height: 100%;
	width: 100vw;
	color: #d1d1d1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	font-weight: 300;

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 50rem;

		& > div {
			margin-bottom: 2rem;
		}
	}

	.formLabel {
		margin-bottom: 1rem;
	}

	input {
		background-color: inherit;
		font-family: inherit;
		outline: none;
		color: ${setColor.primaryBlue};
		border: grey 2px solid;
		border-radius: 10rem;
		padding: 1rem 2rem;
		font-size: 2rem;
		::placeholder {
			color: grey;
		}

		:focus {
			border-color: ${setColor.secondaryBlue}
		}
	}

	img {
		height: 20rem;
		margin-bottom: 2rem;
	}

	label {
		font-size: 2rem;
	}

	h1 {
		padding-bottom: 1rem;
		font-weight: 300;
	}

	h5 {
		font-weight: 300;
	}

	p {
		margin-bottom: 1rem;
	}

	.formItem {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.checkbox {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin-left: 15px;
	}

	.checkmark {
		visibility: hidden;
	}

	.checkmark:checked + .checkbox-label::before {
		background-color: ${setColor.secondaryBlue};
		z-index: 10;
		transition: all 0.2s;
	}

	.checkbox-label {
		::before {
			height: 2rem;
			width: 2rem;
			content: '';
			display: block;
			position: absolute;
			left: -15px;
			top: 50%;
			transform: translateY(-50%);
			background-color: ${setColor.mainGrey};
			border: 2px ${setColor.secondaryBlue} solid;
			border-radius: 5px;
			z-index: 10;
			transition: all 0.2s;
		}
	}

	.toggle {
		display: flex;
		align-items: center;

		span {
			margin-left: 1rem;
			font-size: 2rem;
		}
	}

	.toggleClass.react-toggle:hover:not(.react-toggle--disabled)
		.react-toggle-track {
		background-color: ${setColor.secondaryBlue};
	}
`
