import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import ArticleThread from '../components/ArticleThread'
import Carousel from '../components/Carousel'
import '../static/css/index.sass'

class HomePage extends Component {
	static async getInitialProps() {
		const url = 'https://api.myjson.com/bins/p1laa'
		const response = await fetch(url)
		const data = await response.json()
		return { data }
}
	render() {
		return (
			<Fragment>		
				{console.log(this.props.data)}
				<section className="Layout">
					<Header />
					<section className="Carousel">
						<Carousel 
							title={this.props.data.L96745.title} 
							body={this.props.data.L96745.body.substring(3, 200)} 
							image={this.props.data.L96745.image} 
						/>
					</section>
					<ArticleThread 
						title={this.props.data.L96745.title} 
						body={this.props.data.L96745.body.substring(3, 200)} 
						image={this.props.data.L96745.image} 
				/>
				</section>
			</Fragment>
		)
	}
}

export default HomePage
