import React, { Component } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
// import fetch from 'isomorphic-unfetch'
import Wrapper from '../components/Wrapper'
import ArticleThread from '../components/ArticleThread'
// import Carousel from '../components/Carousel'
import ArticleData from '../data/data.json'
import Link from 'next/link'
import Slider from 'nuka-carousel'



class HomePage extends Component {
	render() {
		return 	(
			<Wrapper>		
				<Head>
					<title>This is the home page</title>
				</Head>
				<section className="Carousel">
					<Slider>
					{
						ArticleData
							.map((post, index) => {
								if (post.date >= "2018-10-18" === true) {
									return (
										<article className="Slider_img" style={{background: `url(${post.image})`}}>
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
				<ArticleThread />
			</Wrapper>
		)
	}
	}


// HomePage.getInitialProps = async ({ request }) => {
// 	const url = 'https://api.myjson.com/bins/p1laa'
// 	const response = await fetch(url)
// 	const posts = await response.json()
// 	return { posts: posts }
// }

export default HomePage
