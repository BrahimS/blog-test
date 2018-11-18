import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

class ArticleThread extends Component {
	render() {
		return (
			<section className="ArticleThread">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</section>
		)
	}
}

export default ArticleThread
