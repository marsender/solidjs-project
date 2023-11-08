import TimerService from '../../src/services/TimerService'

test('timer get set', () => {
	const timerService = new TimerService()
	timerService.setTimer(12)
	expect(timerService.getTimer()).toBe(12)
})
