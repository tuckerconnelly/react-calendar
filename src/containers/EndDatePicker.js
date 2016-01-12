import { connect } from 'react-redux'
import DatePicker from 'material-ui/lib/date-picker/date-picker'

import { pickEndDate } from '../actions/app'

const mapStateToProps = ({ appState }) => {
	let returnVar = {}

	returnVar.minDate = new Date()

	if (appState.startDate) {
		let minDate = new Date(appState.startDate)
		returnVar.minDate = new Date(minDate.setDate(minDate.getDate() + 1))
	}

	return returnVar
}

const mapDispatchToProps = (dispatch) => ({
	onChange: (e, date) => {
		dispatch(pickEndDate(date))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps)(DatePicker)
