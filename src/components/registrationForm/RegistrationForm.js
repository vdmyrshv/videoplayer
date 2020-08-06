import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import {Context as UserContext} from '../../context/UserContext'

import useEffectAfterMount from '../../utils/hooks/useEffectAfterMount'

import { useDebouncedFn } from 'beautiful-react-hooks'

import expoHallAPI from '../../api/expoHallAPI'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const RegistrationForm = ({ className }) => {
	const {state, setUser} = useContext(UserContext)
	const [email, setEmail] = useState('')
	const [screenName, setScreenName] = useState('')
	const [attendeeData, setAttendeeData] = useState('')
	const [userMatch, setUserMatch] = useState(undefined)
	

	useEffect(() => {
		getAttendeeData()
	}, [])

	useEffect(() => {console.log('STATE', state)} , [state])

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

	const setUserContext = async (email) => {
		try {
			const {data} = await expoHallAPI.post('/login/', {email: email})
			console.log('RETURNED USER', data)
			setUser(data.attendee)
		} catch (error) {
			console.log('ERROR', error)
		}

		
	}

	const getAttendeeData = async () => {
		const {data} = await expoHallAPI.get('/attendees/')
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
				<div className='formItem'>
					<label htmlFor='email' className='formLabel'>
						Email/Username
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='email/username'
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{borderColor: userMatch === true ? 'green' : userMatch === false ? 'red' : ''}}
						onBlur={e => { if (!email) e.target.style.borderColor = 'grey'}}
					/>
				</div>
				<div className='formItem'>
					<label className='formLabel' htmlFor='username'>
						Screen Name
					</label>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='screename'
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
						//onChange={e => setAcceptUse(e.target.value)}
					/>
					<label for='acceptUse'>Accept terms of use</label>
				</div>
				<div className='checkbox'>
					<input
						type='checkbox'
						id='acceptConduct'
						name='acceptConduct'
						value='yes'
					/>
					<label for='acceptConduct'>Accept code of conduct</label>
				</div>
				<div className='checkbox'>
					<input
						type='checkbox'
						id='acceptPrivacy'
						name='acceptPrivacy'
						value='yes'
					/>
					<label for='acceptPrivacy'>Accept privacy</label>
				</div>
			</form>
		</div>
	)
}

export default styled(RegistrationForm)`
	height: 100%;
	width: 100vw;
	background-color: black;
	color: #d1d1d1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;

	form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		& > div {
			margin-bottom: 2rem;
		}
	}

	.formLabel {
		margin-bottom: 0.5rem;
	}

	input {
		background-color: black;
		outline: none;
		color: white;
		border: grey 2px solid;
		border-radius: 2rem;
		padding: 1rem 2rem;
		font-size: 2rem;
		::placeholder {
			color: grey;
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
		background-color: darkcyan;
	}
`
