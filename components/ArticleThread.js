import ArticleCard from './ArticleCard'

const ArticleThread = (props) => {
	return (
		<section className="ArticleThread">
			{
				props.posts
					.map((post) => {
						return (
							<ArticleCard 
									key={post.id}
									title={post.title}
									body={post.resume}
									image={post.image}
									link={post.image}
							/>	
						)
				})
			}	
				
			</section>
	)
}

export default ArticleThread
