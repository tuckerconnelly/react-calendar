import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import configureStore from './store/configureStore'

document.addEventListener('DOMContentLoaded', function () {
	injectTapEventPlugin()

	const store = configureStore()

	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	)
})
