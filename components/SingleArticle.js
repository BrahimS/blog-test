import React, { Component, Fragment } from 'react'
import Heart from './Heart'


const SingleArticle = () => (
	<section className="Single">
		<div className="Single_banner" style={{background: "url(https://picsum.photos/2000/800/?image=780)"}}></div>
		<div className="Single_content">
			<div className="Single_titleCount">
				<h1 className="Single_headline">Titre News 1</h1>
				<span className="Heart_single"> <Heart /></span>
			</div>
				<p>
					Nullam nec orci eu justo dignissim viverra eu non tortor. 
					Nam consequat egestas hendrerit. Curabitur pulvinar nibh eu laoreet
					condimentum. Donec feugiat suscipit erat dapibus sagittis. Quisque euismod 
					cursus mi non vulputate. Fusce varius lacus ac purus tempor, at consequat 
					erat placerat. Nullam ut diam urna. Nullam velit ex, tempor vel maximus eget, 
					elementum eu nunc. Nulla iaculis lobortis tortor, auctor dapibus nulla tempus vitae. 
				</p>
				<p>
					Nullam nec orci eu justo dignissim viverra eu non tortor. 
					Nam consequat egestas hendrerit. Curabitur pulvinar nibh eu laoreet
					condimentum. Donec feugiat suscipit erat dapibus sagittis. Quisque euismod 
					cursus mi non vulputate. Fusce varius lacus ac purus tempor, at consequat 
					erat placerat. Nullam ut diam urna. Nullam velit ex, tempor vel maximus eget, 
					elementum eu nunc. Nulla iaculis lobortis tortor, auctor dapibus nulla tempus vitae. 
				</p>
				<p>
					Nullam nec orci eu justo dignissim viverra eu non tortor. 
					Nam consequat egestas hendrerit. Curabitur pulvinar nibh eu laoreet
					condimentum. Donec feugiat suscipit erat dapibus sagittis. Quisque euismod 
					cursus mi non vulputate. Fusce varius lacus ac purus tempor, at consequat 
					erat placerat. Nullam ut diam urna. Nullam velit ex, tempor vel maximus eget, 
					elementum eu nunc. Nulla iaculis lobortis tortor, auctor dapibus nulla tempus vitae. 
				</p>
		</div>
	</section>
)

export default  SingleArticle
