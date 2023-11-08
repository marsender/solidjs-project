class TimerService {
	private timer: number | null

	constructor() {
		this.timer = null
	}

	setTimer(duration: number): void {
		this.timer = duration
	}

	getTimer(): number | null {
		return this.timer
	}

	addTime(duration: number): void {
		if (this.timer === null) {
			return
		}
		this.timer += duration
	}
}

export default TimerService
