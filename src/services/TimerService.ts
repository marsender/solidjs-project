class TimerService {
	private timer: number | null

	constructor() {
		this.timer = null;
	}

	setTimer(duration: number) {
		this.timer = duration
	}
	getTimer():number | null {
		return this.timer
	}
}

export default TimerService
