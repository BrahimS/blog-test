
import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const Wrapper = ({ children, title = 'this is a title'}) => (

	<Fragment className="Layout">
			<Head>
				<title>{ title }</title>
			</Head>
				<Header />
			<main>
				{ children }
			</main>
	</Fragment>

)
export default Wrapper
