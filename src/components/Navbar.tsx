import { A } from '@solidjs/router'

const Navbar = () => {
	return (
		<nav class="bg-white border-gray-200 dark:bg-gray-900">
			<ul>
				<li>
					<A href="/" activeClass="underlined" inactiveClass="inactive">
						Home
					</A>
				</li>
				<li>
					<A href="/about" activeClass="underlined" inactiveClass="inactive">
						About
					</A>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
