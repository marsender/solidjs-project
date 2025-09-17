import { JSX } from 'solid-js'
import Navbar from './Navbar'

const Layout = (props: { children?: JSX.Element }) => {
	return (
		<div class="min-h-screen p-5 bg-white dark:bg-gray-900">
			<Navbar />
			<div class="p-4 sm:ml-64">
				{/* The routed component will be rendered here */}
				<div class="p-4">{props.children}</div>
			</div>
		</div>
	)
}

export default Layout
