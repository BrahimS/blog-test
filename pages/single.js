import React, { Component, Fragment} from 'react'
import Header from '../components/Header'
import SingleArticle from '../components/SingleArticle'
import '../static/css/index.sass'

const Single = (props) =>  (
	<section className="Layout">
		<Header />
		<SingleArticle />
	</section>
)

export default Single
