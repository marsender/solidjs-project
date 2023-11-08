import { inject, injectable } from 'inversify'
import TYPES from '../types'
import NotificationService from './NotificationService'

@injectable()
class TimerService implements TimerServiceInterface {
	private timer: number | null
	private notificationService: NotificationService

	constructor(@inject(TYPES.Notification) notificationService: NotificationService) {
		this.notificationService = notificationService
		this.timer = null
	}

	private handleTimerEnd() {
		this.notificationService.create({
			id: 'timer-end',
			title: 'Timer end !',
			message: 'Take a break',
		})
	}

	public startTimer(duration: number) {
		this.timer = setTimeout(() => {
			this.handleTimerEnd()
		}, duration)
		console.log('Timer started for ' + duration + 'ms')
		return Promise.resolve()
	}

	public stopTimer() {
		if (this.timer) {
			clearTimeout(this.timer)
			console.log('Timer stopped')
		}
		return Promise.resolve()
	}
}

export default TimerService
