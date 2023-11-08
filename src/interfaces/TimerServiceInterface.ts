interface TimerServiceInterface {
	startTimer(duration: number): Promise<void>
	stopTimer(): Promise<void>
}
