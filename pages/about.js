import React, { Component, Fragment} from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import '../static/css/index.sass'


const AboutPage = (props) =>  (
		<section className="Layout">
      <Head />
      <Header />
      <section className="AboutPage">
        <div className="AboutPage_leftSide">
				<h1 className="AboutPage_headline">About us</h1>
				<p className="AboutPage_para">
				Nullam nec orci eu justo dignissim viverra eu non tortor. Nam consequat egestas hendrerit. Curabitur pulvinar nibh eu laoreet condimentum. Donec feugiat suscipit erat dapibus sagittis. Quisque euismod cursus mi non vulputate. Fusce varius lacus ac purus tempor, at consequat erat placerat. Nullam ut diam urna. Nullam velit ex, tempor vel maximus eget, elementum eu nunc. Nulla iaculis lobortis tortor, auctor dapibus nulla tempus vitae. 
				</p>
				</div>
        <div className="AboutPage_rightSide" style={{background: "url(https://picsum.photos/1500/800/?image=780)"}}>

				</div>
      </section>
		</section>
)




export default AboutPage
