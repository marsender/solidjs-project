import 'reflect-metadata'
import TYPES from '../../src/types'
import TimerService from '../../src/services/TimerService'
import NotificationService from '../../src/services/NotificationService'
import { Container } from 'inversify'

const createContainer = () => {
	const container = new Container()
	container.bind<NotificationService>(TYPES.Notification).to(NotificationService)
	return container
}

test('timer service test', async () => {
	const container = createContainer()
	const notificationService = container.get<NotificationService>(TYPES.Notification)
	try {
		const duration = 100 // Duration of the timer in milliseconds
		const timerService = new TimerService(notificationService)
		expect(timerService.getDuration()).toBe(0)
		expect(timerService.getElapsedTime(true)).toBe(0)
		// Start timer
		timerService.startTimer(duration)
		expect(timerService.getDuration()).toBe(duration)
		expect(timerService.getElapsedTime(true)).toBe(0) // elapsed time in seconds
		expect(timerService.getElapsedTime()).not.toBe(0) // elapsed time in millseconds
		// Wait for the timer to end
		let promise = new Promise((resolve) => {
			setTimeout(() => resolve('done!'), duration + 100)
		})
		await promise
		// Start a new timer and stop it imediately
		timerService.startTimer(duration)
		timerService.stopTimer()
	} catch (e) {
		expect(e).toMatch('error')
	}
})
