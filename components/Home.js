import React, { Component, Fragment} from 'react'
import Head from './Head'
import Header from './Header'
import ArticleThread from './ArticleThread'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Logo from './Logo'
import Nav from './Nav'
import Carousel from './Carousel'

class Home extends Component {
	render () {
		return (
			<Fragment>		
				<section className="Layout">
					<Head />
					<Header />
					<section className="Carousel">
						<Carousel />
					</section>
				<ArticleThread />
				</section>
			</Fragment>
		)
	}
}


export default Home
