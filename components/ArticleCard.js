
import React, { Fragment } from 'react'
import Link from 'next/link'
import Heart from './Heart'

const ArticleCard = (props) => (
	<article className="ArticleCard">	
		<div className="ArticleCard_leftSide" style={{background: `url(${props.image})`}}></div>
		<div className="ArticleCard_rightSide">
			<div className="Heart">
				<Heart />
			</div>
			<h2 className="ArticleCard_headline">{props.title}</h2>
			<p className="ArticleCard_para">{props.body}</p>
			<Link href={props.link}>
				<a className="ArticleCard_link">Link to the news</a>
			</Link>
		</div>
	</article>
)

export default ArticleCard
