import React, { Fragment } from 'react'
import Heart from './Heart'


const SingleArticle = (props) => (
<section className="Single">
	<div>
		<div className="Single_banner" style={{background: `url(${props.image})`}}></div>
		<div className="Single_content">
			<div className="Single_titleCount">
				<h1 className="Single_headline">{props.title}</h1>
				<span className="Heart_single"> <Heart /></span>
			</div>
			<p>
			{props.body}
			</p>
		</div>
	</div>
</section>
)

export default  SingleArticle
