/* @refresh reload */
import { render } from 'solid-js/web'
import { Container } from 'inversify'

import './styles/index.css'
import App from './components/App'
import TYPES from './types'
import TimerService from './services/TimerService'

const createContainer = () => {
	const container = new Container()
	container.bind<TimerService>(TYPES.Timer).to(TimerService)
	return container
}
const apiSource = createContainer()

const root = document.getElementById('root')

if (root) {
	render(() => <App api={apiSource} />, root)
}
