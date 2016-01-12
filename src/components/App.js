import React, { Component } from 'react'

import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Length from '../containers/Length'

var styles = {
	display: 'flex',
	height: '100%',

	flexDirection: 'column'
}

export default class App extends Component {
	render() {
		return <div style={styles}>
				<Length />
				<MainSection />
				<Footer />
			</div>
	}
}
