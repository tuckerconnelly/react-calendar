import React from 'react'
import { connect } from 'react-redux'
import { cyan500 } from 'material-ui/lib/styles/colors'
import moment from 'moment'

var styles = {
	padding: '4rem 0',

	color: 'white',
	fontSize: '7.2rem',
	textAlign: 'center',

	backgroundColor: cyan500
}

const Length = ({ text }) => (
	<div style={styles}>
		<div>{text}</div>
	</div>
)

const mapStateToProps = ({ appState }) => {
	var text = 'Pick a date!'

	if (appState.startDate && !appState.endDate) {
		text = moment(appState.startDate).format('MMM D, YYYY')
	}

	if (appState.endDate && !appState.startDate) {
		text = moment(appState.endDate).format('MMM D, YYYY')
	}

	if (appState.startDate && appState.endDate) {
		let days = Math.round(moment.duration(appState.endDate.getTime() - appState.startDate.getTime()).asDays())

		text = days + ' day'

		if (days > 1) {
			text += 's'
		}
	}

	return { text }
}

export default connect(mapStateToProps)(Length)
