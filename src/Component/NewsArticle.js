import React from "react"
import NewsCard from "./NewsCard"
// import './NewsCard.css'
// import { } from "react-bootstrap"
import Header from "./Header"
import {withRouter} from 'react-router';

function NewsArticle({articles}) {
	return (
		<div>
			<h1
			class="d-flex mx-auto justify-content-center"
			style={{width: "200px",}}
			>News Articles of the World!</h1>
			<br/>
			<Header 
			/>
			<br/>
			<NewsCard 
			articles={articles} 
			style={{display: "flex",}}
			/>			
		</div>
	);
}

export default withRouter(NewsArticle)