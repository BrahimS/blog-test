import React, { Component } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import fetch from 'isomorphic-unfetch'
import Wrapper from '../components/Wrapper'
import ArticleThread from '../components/ArticleThread'
import Carousel from '../components/Carousel'


const HomePage = ({ posts }) => (
	<Wrapper>		
		
		{Object.keys(posts).map((key, index) => {
			console.log(posts[key].title)
			return posts[key].date
		})}
		<Head>
			<title>This is the home page</title>
		</Head>
		<section className="Carousel">
			<Carousel 
				title={posts.L96745.title} 
				body={posts.L96745.body.substring(3, 200)} 
				image={posts.L96745.image} 
			/>
		</section>
		<ArticleThread 
			title={posts.L96745.title} 
			body={posts.L96745.body.substring(3, 200)} 
			image={posts.L96745.image} 
		/>
		<Footer />
	</Wrapper>
)

HomePage.getInitialProps = async ({ request }) => {
	const url = 'https://api.myjson.com/bins/p1laa'
	const response = await fetch(url)
	const posts = await response.json()
	return { posts: posts }
}

export default HomePage
