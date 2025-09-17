import { Component } from 'solid-js'
import { Container } from 'inversify'
import { ApiProvider } from '../hooks/useApi'
import { Route, Router } from '@solidjs/router'

import 'reflect-metadata'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import '../styles/App.css'

const App: Component<{ api: Container }> = (props) => {
	return (
		<ApiProvider value={props.api}>
			<Router root={Layout}>
				{/* Define the app routes */}
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
			</Router>
		</ApiProvider>
	)
}

export default App
