import React, { Component } from 'react'
import { getData } from '../api/index'
import Header from '../components/Header'
import SingleArticle from '../components/SingleArticle'
import '../static/css/index.sass'

const Single = ( { posts }) =>  (
	<section className="Layout">
			{ props.posts
					.map((post, index) => {
						return post
					})
			}
		<Header />
		<SingleArticle post={post}/>
	</section>
)

Single.getInitialProps = async ({ request }) => {
	const response = await getData()
	const posts = await response.json()
	return { posts }
}

export default Single
