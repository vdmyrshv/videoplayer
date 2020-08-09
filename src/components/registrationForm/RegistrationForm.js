import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { setColor } from '../../styles/styles'
import { SigninIcon, SignupIcon, ExhibitorIcon } from '../../styles/icons'

import { Context as UserContext } from '../../context/UserContext'

import useEffectAfterMount from '../../utils/hooks/useEffectAfterMount'

import { useDebouncedFn } from 'beautiful-react-hooks'

import expoHallAPI from '../../api/expoHallAPI'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import RegistrationButton from '../globals/RegistrationButton'
import RegistrationInput from '../globals/RegistrationInput'

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
		if (email) emailChecker()
		if (!email) setUserMatch(undefined)
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
			<h5>Please enter your information below</h5>
			<section>
				<div className='instruction-box'>
					<div className='item'>
						<div className='item-icon'>
							<SigninIcon />
						</div>
						<div className='item-text'>
							Already registered? <br/> Enter your registration email to
							gain access.
						</div>
					</div>
					<div className='item'>
						<div className='item-icon'>
							<SignupIcon />
						</div>
						<div className='item-text'>
							First time here? <br/> Fill out the information below.
						</div>
					</div>
					<div className='item'>
						<div className='item-icon'>
							<ExhibitorIcon />
						</div>
						<div className='item-text'>
							<p className='redirect'>
								Are you an exhibitor? <br/>
								<Link to='/exhibitors'>
									<span>Click Here </span>
								</Link>
								for the exhibitor portal
							</p>
						</div>
					</div>
				</div>
			</section>
			<form>
				<div className='formItem'>
					<label htmlFor='email' className='formLabel'>
						Please enter your email:
					</label>
					<RegistrationInput
						emailField
						type='email'
						name='email'
						id='email'
						placeholder='email'
						value={email}
						onChange={e => {
							setEmail(e.target.value)
						}}
						userMatch={userMatch}
						onBlur={() => {
							if (!email) setUserMatch(undefined)
						}}
					/>
				</div>
				<div className='formItem email'>
					<label className='formLabel' htmlFor='username'>
						Choose a screen name:
					</label>
					<RegistrationInput
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
	width: 40vw;
	color: #d1d1d1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 2rem;
	font-weight: 300;
	margin: 0 auto;

	section {
		margin-bottom: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		> div {
			margin-bottom: 2rem;
		}
	}

	.instruction-box {
		display: flex;
		flex-direction: column;

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;

			:not(:last-child) {
				margin-bottom: 2rem;
			}

			.item-icon {
				height: 6rem;
				width: 6rem;
				fill: ${setColor.primaryBlue};
				padding: 0.5rem;
			}

			.item-text {
				font-size: 1.6rem;
				margin-left: 1rem;
				letter-spacing: 1.2px;
			}

			.redirect {
				padding-top: .2rem;
				a {
					text-decoration: none;
					color: ${setColor.primaryBlue};
					font-weight: bold;
				}
			}
		}
	}

	.formLabel {
		margin-bottom: 1rem;
		color: ${setColor.primaryBlue};
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
		position: relative;
	}

	.email-valid-notification {
		display: inline;
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
		background-color: ${setColor.primaryBlue};
	}

	.checkbox {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin-left: 15px;
	}

	.checkbox-label {
		font-size: 1.2rem;
		letter-spacing: 1.2px;
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
			border: 2px ${setColor.primaryBlue} solid;
			border-radius: 5px;
			z-index: 10;
			transition: all 0.2s;
		}
	}

	.checkmark {
		visibility: hidden;
	}

	.checkmark:checked + .checkbox-label::before {
		background-color: ${setColor.primaryBlue};
		z-index: 10;
		transition: all 0.2s;
	}
`
