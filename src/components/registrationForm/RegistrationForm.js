import React, { useState } from 'react'
import styled from 'styled-components'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const RegistrationForm = ({ className }) => {
	const [email, setEmail] = useState('')
	const [userName, setUsername] = useState('')

	return (
		<div className={className}>
			<div>
				<img src={require('../../assets/SHRM.png')} alt='SHRM Logo' />
			</div>
			<h1>Welcome to the expo hall!</h1>
			<form>
				<h5>Please enter your information below</h5>
				<div className='formItem'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className='formItem'>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='username'
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
						<span>GPRA save data</span>
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
	}

    .toggle {
        margin: 2rem 0;

        span {
            margin-left: 1rem;
        }
    }
`
