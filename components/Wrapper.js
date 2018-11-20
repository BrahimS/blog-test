
import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import '../static/css/index.sass'

const Wrapper = ({ children, title }) => (

	<Fragment className="Layout">
			<Head>
				<title>{ title }</title>
			</Head>
				<Header />
			<main>
				{ children }
		</main>
		<Footer />
	</Fragment>

)
export default Wrapper
