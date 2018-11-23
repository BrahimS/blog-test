import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { getData } from '../api/index'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import Slider from 'nuka-carousel'
import ArticleThread from '../components/ArticleThread'



const HomePage = ( { posts } )  => (
			<Wrapper>	
			
				<Head>
					<title>This is the home page</title>
				</Head>
				<section className="Carousel">
					<Slider>
					{
						posts
							.map((post, index) => {
								if (post.date >= "2018-10-18" === true) {
									return (
										<article key={post.id} className="Slider_img" style={{background: `url(${post.image})`}}>
											<div className="Slider_content">
												<h1 className="Slider_headline"> {post.title}</h1>
												<p className="Slider_para">{post.resume}</p>
												<Link href={post.link}>
													<a className="Slider_link">Link to the news</a>
												</Link>
											</div>
										</article>
									)
									} else {
										return
									}
							})}
				</Slider>
				</section>
				<ArticleThread posts={posts}/>
			</Wrapper>
		)

HomePage.getInitialProps = async ({ request }) => {
	const response = await getData()
	const posts = await response.json()
	return { posts }
}

export default HomePage
