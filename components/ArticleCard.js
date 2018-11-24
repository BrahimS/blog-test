import React, {Fragment} from 'react';
import Link from 'next/link';
import Heart from './Heart';

const ArticleCard = props => (
	<article className="ArticleCard">
		<div className="ArticleCard_leftSide" style={{background: `url(${props.image})`}} />
		<div className="ArticleCard_rightSide">
			<div className="Heart">
				<Heart />
			</div>
			<h2 className="ArticleCard_headline">{props.title}</h2>
			<p className="ArticleCard_para">{props.body}</p>
			<Link href="/single">
				<a className="ArticleCard_link">Link to the news</a>
			</Link>
		</div>
	</article>
);

export default ArticleCard;
