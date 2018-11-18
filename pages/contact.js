import React, { Component, Fragment} from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Form from '../components/Form.js'
import '../static/css/index.sass'

const ContactPage = (props) =>  (
	<section className="Layout">
		<Head />
		<Header />
		<section className="ContactPage">
			<div className="ContactPage_leftSide">
				<h1 className="ContactPage_headline">Contact us</h1>
				<p className="ContactPage_para">
				Nullam nec orci eu justo dignissim viverra eu non tortor. Nam consequat egestas hendrerit. Curabitur pulvinar nibh eu laoreet condimentum. Donec feugiat suscipit erat dapibus sagittis. Quisque euismod cursus mi non vulputate. Fusce varius lacus ac purus tempor, at consequat erat placerat. Nullam ut diam urna. Nullam velit ex, tempor vel maximus eget, elementum eu nunc. Nulla iaculis lobortis tortor, auctor dapibus nulla tempus vitae. 
				</p>
				<Form />
			</div>
		</section>
	</section>
)

export default ContactPage
