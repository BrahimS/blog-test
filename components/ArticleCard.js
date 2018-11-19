
import React, { Fragment } from 'react'
import Link from 'next/link'
import Heart from './Heart'

const ArticleCard = () => (
	<article className="ArticleCard">
				<div className="ArticleCard_leftSide" style={{background: "url(https://picsum.photos/1500/800/?image=50)"}}></div>
				<div className="ArticleCard_rightSide">
					<div className="Heart">
						<Heart />
					</div>
					<h2 className="ArticleCard_headline"> Titre news 1</h2>
					<p className="ArticleCard_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio soluta delectus quasi vel eveniet, voluptate, ullam esse nemo vero voluptatum nihil animi aliquam sapiente exercitationem dicta debitis sit iure!</p>
					<Link href="/single">
						<a className="ArticleCard_link">Link to the news</a>
					</Link>
				</div>
			</article>
)

export default ArticleCard
