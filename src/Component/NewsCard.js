import React from "react"
import "./NewsCard.css"
import { Card, Button } from "react-bootstrap"

function NewsCard({articles}){
const tasksthing = articles.map((article) => 
	<div className="cardParent">
	
	
	<Card className="card" key={article.title} >
	<Card.Img variant="top" src = {article.image} alt = "holder.js/100px180"/>
	<div className="cardText">
	<Card.Body className="cardText">
		<Card.Title>{article.title}</Card.Title>
		<Card.Text >
			<li>Author: {article.author}</li> 
			{article.description.length > 50 ? <li>
				About: {article.description.substring(0, 15) + "..." }
			</li> : <li>About: {article.description}</li> }
			
			<li>Source: {article.source}</li>
			<li>Country: {article.country}</li>
			<li>Published: {article.published_at}</li>
			<li>Category: {article.category}</li>
			{article.language}
		</Card.Text>
		<Button variant="primary" src={article.url}>Link</Button>
	</Card.Body>
	</div>
	</Card>	
					
	</div>
)

return(
	<div className="newsCardStyle">
		{tasksthing}				
	</div>
)
}

export default NewsCard