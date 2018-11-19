import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

const ArticleThread = (data) => {
	return (
			<section className="ArticleThread">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</section>
	)
}

export default ArticleThread
