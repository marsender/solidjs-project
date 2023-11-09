import { inject, injectable } from 'inversify'
import TYPES from '../types'
import NotificationService from './NotificationService'

@injectable()
class TimerService implements TimerServiceInterface {
	private timer: number | null
	private duration: number
	private startTime: number
	private notificationService: NotificationService

	constructor(@inject(TYPES.Notification) notificationService: NotificationService) {
		this.notificationService = notificationService
		this.timer = null
		this.duration = 0
		this.startTime = 0
	}

	private resetTimer() {
		this.timer = null
		this.duration = 0
		this.startTime = 0
	}

	/**
	 * Handle the end of timer by sending a notification
	 */
	private handleTimerEnd() {
		this.notificationService.create({
			id: 'timer-end',
			title: 'Timer end !',
			message: 'Take a break',
		})
	}

	/**
	 * Handle the stop of timer by sending a notification
	 */
	private handleTimerStop() {
		this.notificationService.create({
			id: 'timer-stop',
			title: 'Timer stop !',
			message: 'Take a break earlier',
		})
	}

	/**
	 * Start the timer
	 * @param duration Duration of the timer in milliseconds
	 * @returns void
	 */
	public startTimer(duration: number): Promise<void> {
		this.duration = duration
		this.startTime = Date.now()
		this.timer = setTimeout(() => {
			this.handleTimerEnd()
			this.resetTimer()
		}, duration)
		//console.log('Timer started for ' + duration + 'ms')
		return Promise.resolve()
	}

	public stopTimer(): Promise<void> {
		if (this.timer) {
			this.handleTimerStop()
			clearTimeout(this.timer)
			this.resetTimer()
			//console.log('Timer stopped')
		}
		return Promise.resolve()
	}

	/**
	 * Get the duration of the timer in milliseconds if the timer is running else 0
	 * @returns number
	 */
	public getDuration(): number {
		return this.duration
	}

	/**
	 * Get the elapsed time in milli seconds if the timer is running else 0
	 * @param boolean Want the result in seconds ? Else the result is in milliseconds
	 * @returns number
	 */
	public getElapsedTime(wantSeconds: boolean = false): number {
		let elapsed = 0

		if (this.startTime === 0) {
			return elapsed
		}
		if (wantSeconds) {
			elapsed = Math.round((Date.now() - this.startTime) / 1000)
			console.log('Elapsed: %d seconds', elapsed)
		} else {
			elapsed = Date.now() - this.startTime
			console.log('Elapsed: %d milliseconds', elapsed)
		}

		return elapsed
	}
}

export default TimerService
