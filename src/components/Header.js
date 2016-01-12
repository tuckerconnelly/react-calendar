import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Colors from 'material-ui/lib/styles/colors'

export default () => (
	<AppBar
		title="Pick a date!"
		showMenuIconButton={ false }
		zDepth={0}
		style={{
			backgroundColor: Colors.cyan500
		}} />
)
