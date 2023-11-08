import { injectable } from 'inversify'

type NotificationOptions = {
	id: string
	title: string
	message: string
}

@injectable()
class NotificationService implements NotificationServiceInterface {
	create(opts: NotificationOptions) {
		console.log('Notification id:%s: title: %s message:%s', opts.id, opts.title, opts.message)
	}
}

export default NotificationService
