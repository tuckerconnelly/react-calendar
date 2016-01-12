import React, { Component } from 'react'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'
import Colors from 'material-ui/lib/styles/colors'

import StartDatePicker from '../containers/StartDatePicker'
import EndDatePicker from '../containers/EndDatePicker'

const styles = {
	main: {
		display: 'flex',
		height: '100%'
	},

	startDate: {
		display: 'inline-block',
		margin: '2rem auto'
	},

	endDate: {
		display: 'inline-block',
		margin: '2rem auto'
	}
}

export default class MainSection extends Component {
	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: this.state.muiTheme
		}
	}

	constructor() {
		super()

		this.state = {
			muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
		}
	}

	componentWillMount () {
		let newMuiTheme = this.state.muiTheme
		newMuiTheme.datePicker.selectColor = Colors.pinkA200
		newMuiTheme.flatButton.secondaryTextColor = Colors.pinkA200

		this.setState({ muiTheme: newMuiTheme })
	}

	render() {
		return <main style={styles.main}>
			<StartDatePicker style={styles.startDate} hintText="Start date" minDate={ new Date() } />
			<EndDatePicker style={styles.endDate} hintText="End Date" minDate={ new Date() } />
		</main>
	}

}
