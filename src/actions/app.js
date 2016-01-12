import * as types from '../constants/ActionTypes'

export function pickStartDate(date) {
	return { type: types.PICK_START_DATE, date }
}

export function pickEndDate(date) {
	return { type: types.PICK_END_DATE, date }
}
