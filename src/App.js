import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import styled from 'styled-components'
import SliderCarousel from './components/sliderCarousel/SliderCarousel'
import GlobalStyles from './components/globals/GlobalStyles'

import mockData from './data/dummyVideos'
import RegistrationForm from './components/registrationForm/RegistrationForm'

const App = ({ className }) => {
	console.log(mockData)
	return (
		<>
			<GlobalStyles />
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
		</>
	)
}

export default styled(App)`
	height: 100vh;
	width: 100%;
	padding: 20px;
	display: flex;
`
