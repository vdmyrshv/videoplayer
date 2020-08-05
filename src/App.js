import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import axios from 'axios'

import styled from 'styled-components'
import SliderCarousel from './components/sliderCarousel/SliderCarousel'
import GlobalStyles from './components/globals/GlobalStyles'

import ExhibitorConext from './context/ExhibitorContext'

import mockData from './data/dummyVideos'
import RegistrationForm from './components/registrationForm/RegistrationForm'

const App = ({ className }) => {

	const [exhibitorData, setExhibitorData] = useState({})

	console.log(mockData)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const { data } = await axios.get(
			'http://expo-hall-env.eba-xa8er7aa.us-west-2.elasticbeanstalk.com/api/tiles/?format=json'
		)
		setExhibitorData(data)
	}
	return (
		<>
			<GlobalStyles />
			<ExhibitorConext.Provider value={exhibitorData}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<RegistrationForm />
					</Route>
					<Route path='/slides'>
						<SliderCarousel data={mockData} />
					</Route>
				</Switch>
			</Router>
			</ExhibitorConext.Provider>
		</>
	)
}

export default styled(App)`
	height: 100%;
	width: 100%;
	padding: 20px;
	display: flex;
`
