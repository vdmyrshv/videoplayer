import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import axios from 'axios'

import styled from 'styled-components'
import SliderCarousel from './components/sliderCarousel/SliderCarousel'
import GlobalStyles from './components/globals/GlobalStyles'

import ExhibitorConext from './context/ExhibitorContext'

import mockData from './data/dummyVideos'
import RegistrationForm from './components/registrationForm/RegistrationForm'
import SliderPage from './pages/SliderPage'
import expoHallAPI from './api/expoHallAPI'

const App = ({ className }) => {
	const [exhibitorData, setExhibitorData] = useState([])

	console.log(mockData)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const { data } = await expoHallAPI.get('/api/categories/')
		setExhibitorData(data.reverse())
	}
	return (
		<div className={className}>
			<GlobalStyles />
			<ExhibitorConext.Provider value={exhibitorData}>
				<Router>
					<Switch>
						<Route exact path='/'>
							<RegistrationForm />
						</Route>
						<Route path='/slides'>
							<SliderPage />
						</Route>
						<Route
							path='*'
							render={props => <div>Not found!</div>}
						/>
					</Switch>
				</Router>
			</ExhibitorConext.Provider>
		</div>
	)
}

export default styled(App)`
	height: 100%;
	width: 100%;
`
