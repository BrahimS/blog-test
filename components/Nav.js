import React from 'react'
import Link from 'next/link'

const Nav = (props) => (
		<nav className="Nav">
			<ul className="Nav__item">
				<li className="item_link">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className="item_link">
					<Link href="/about">
						<a>About us</a>
					</Link>
				</li>
				<li className="item_link">
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
	</nav>
	)


export default Nav
