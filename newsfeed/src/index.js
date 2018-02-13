import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Elements  from './theme/Elements'
import Home from './pages'
import store from './stores'
import { Provider } from 'react-redux'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app The 
	Theme component is the  visual content and most likely, 
	you will want  to remove it and replace with your own 
	visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const app = (
	<Provider store={store.configure(null)}>
		<Home />
	</Provider>
)
ReactDOM.render(app, document.getElementById('root'))