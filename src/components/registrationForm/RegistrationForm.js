import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import useEffectAfterMount from '../../utils/hooks/useEffectAfterMount'

import _ from 'lodash'

import { useDebouncedFn } from 'beautiful-react-hooks'

import axios from 'axios'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const RegistrationForm = ({ className }) => {
	const [email, setEmail] = useState('')
	const [userName, setUsername] = useState('')
	const [attendeeData, setAttendeeData] = useState('')
	const [userMatch, setUserMatch] = useState(false)

	useEffect(() => {
        getAttendeeData()
    }, [])

    useEffectAfterMount(()=> {
        emailChecker()
        return () => emailChecker.cancel()
    }, [email])

	const emailChecker = useDebouncedFn(() => {
        console.log('attendeeDATA!!!!', attendeeData)
        console.log('email', email)
        const isMatch = attendeeData.indexOf(email)
        console.log('EMAIL MATCHED?', isMatch)
	}, 3000)

	const getAttendeeData = async () => {
		const res = await axios.get(
			'http://expo-hall-env.eba-xa8er7aa.us-west-2.elasticbeanstalk.com/attendees/'
		)
		const emails = res.data.map(att => att.email)
		setAttendeeData(emails)
		console.log('res', res)
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
					<label htmlFor='email'>Email(Your Username)</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='email/username'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className='formItem'>
					<label htmlFor='username'>Screen Name</label>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='screename'
						value={userName}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
				<div className='toggle'>
					<label>
						<Toggle
							defaultChecked={false}
							icons={false}
							onChange={() => console.log('changed')}
						/>
						<span>GDPR save data</span>
					</label>
				</div>
				<div className='toggle'>
					<label>
						<Toggle
							defaultChecked={false}
							icons={false}
							onChange={() => console.log('changed')}
						/>
						<span>Automatically share data with exhibitors</span>
					</label>
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
	height: 100vh;
	width: 100vw;
	background-color: black;
	color: #d1d1d1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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

		:focus {
			border: red 2px solid;
		}
	}

	img {
		height: 20rem;
		margin-bottom: 2rem;
	}

	label {
		padding: 1rem;
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
		margin-left: 2rem;
	}

	.toggle {
		margin: 2rem 0;

		label {
			display: flex;
			align-items: center;
		}

		span {
			margin-left: 1rem;
		}
	}
`
