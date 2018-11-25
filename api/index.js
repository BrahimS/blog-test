import fetch from 'isomorphic-unfetch';

export function getData() {
	const url = `https://raw.githubusercontent.com/BrahimS/bs-blog-next/master/data/data.json`;
	return fetch(url);
}
