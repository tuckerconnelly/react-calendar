import { connect } from 'react-redux'
import DatePicker from 'material-ui/lib/date-picker/date-picker'

import { pickStartDate } from '../actions/app'

const mapStateToProps = ({ appState }) => {
	let returnVar = {}

	if (appState.endDate) {
		let maxDate = new Date(appState.endDate)
		returnVar.maxDate = new Date(maxDate.setDate(maxDate.getDate() - 1))
	}

	return returnVar
}

const mapDispatchToProps = (dispatch) => ({
	onChange: (e, date) => {
		dispatch(pickStartDate(date))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps)(DatePicker)
