import {getData} from '../api/index';
import Header from '../components/Header';
import Heart from '../components/Heart';
import '../static/css/index.sass';

const Single = ({posts}) => (
	<section className="Layout">
		<Header />
		<section className="Single">
			<div>
				<div
					className="Single_banner"
					style={{background: `url(https://picsum.photos/1500/800/?image=1074)`}}
				/>
				<div className="Single_content">
					<div className="Single_titleCount">
						<h1 className="Single_headline">Premier titre</h1>
						<span className="Heart_single">
							{' '}
							<Heart />
						</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis
						reiciendis tempore, atque libero molestiae. Vel perspiciatis ea sequi in
						cumque nam laboriosam doloribus repudiandae, cum distinctio sit, nostrum
						architecto.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis
						reiciendis tempore, atque libero molestiae. Vel perspiciatis ea sequi in
						cumque nam laboriosam doloribus repudiandae, cum distinctio sit, nostrum
						architecto.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis
						reiciendis tempore, atque libero molestiae. Vel perspiciatis ea sequi in
						cumque nam laboriosam doloribus repudiandae, cum distinctio sit, nostrum
						architecto.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis
						reiciendis tempore, atque libero molestiae. Vel perspiciatis ea sequi in
						cumque nam laboriosam doloribus repudiandae, cum distinctio sit, nostrum
						architecto.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis
						reiciendis tempore, atque libero molestiae. Vel perspiciatis ea sequi in
						cumque nam laboriosam doloribus repudiandae, cum distinctio sit, nostrum
						architecto.
					</p>
				</div>
			</div>
		</section>
	</section>
);

Single.getInitialProps = async ({request}) => {
	const response = await getData();
	const posts = await response.json();
	return {posts};
};

export default Single;
