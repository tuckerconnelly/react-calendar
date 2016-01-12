import { PICK_START_DATE, PICK_END_DATE } from '../constants/ActionTypes'

const initialState = {
	startDate: null,
	endDate: null
}

export default function appState(state = initialState, action) {
	switch (action.type) {
	case PICK_START_DATE:
		return {
			...state,
			startDate: action.date
		}

	case PICK_END_DATE:
		return {
			...state,
			endDate: action.date
		}

	default:
		return state
	}
}
