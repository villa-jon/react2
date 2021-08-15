import React from "react"
import NewsCard from "./NewsCard"
// import './NewsCard.css'
// import { } from "react-bootstrap"
import Header from "./Header"
import {withRouter} from 'react-router';

function NewsArticle({articles}) {
	const newsStyle = {
		padding: '20px'
	}
	const newsCard = {
		backgroundColor: "blue"
	}
	return (
		<div style={newsCard}>
			<h1
			class="d-flex mx-auto justify-content-center"
			style={newsStyle}
			>News Articles of the World!</h1>
			<br/>
			<Header 
			/>
		
			<NewsCard 
			articles={articles} 
			
			/>			
		</div>
	);
}

export default withRouter(NewsArticle)