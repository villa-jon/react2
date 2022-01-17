import React from "react"
import NewsCard from "./NewsCard"
// import './NewsCard.css'
// import { } from "react-bootstrap"
import Header from "./Header"
import {withRouter} from 'react-router';

// Parent

function NewsArticle({articles, search, setSearch}) {

	const newsStyle = {
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		// padding: '20px'
	}
	const newsCard = {
		backgroundColor: "#A7C7E7"
	}

	return (
		<div style={newsCard}>
			<h1
			className="d-flex mx-auto justify-content-center"
			style={newsStyle}
			>News Articles of the World!</h1>
			{/* <br/> */}
			<Header
			articles={articles} 
			search={search} 
			setSearch={setSearch}
			/>
			<NewsCard 
			articles={articles} 
			// search={search}
			/>			
		</div>
	);
}

export default withRouter(NewsArticle)