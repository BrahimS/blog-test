import ArticleCard from './ArticleCard'
import ArticleData from '../data/data.json'

const ArticleThread = (props) => {
	return (
		<section className="ArticleThread">
				{
					ArticleData
					.map((post, index) => {
						return (
							<ArticleCard 
								key={post.id}
								title={post.title}
								body={post.resume}
								image={post.image}
							/>	
							)
						})
				}
				
			
			</section>
	)
}

export default ArticleThread
