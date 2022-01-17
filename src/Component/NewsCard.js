import React from "react"
import "./NewsCard.css"
import { Card, Button } from "react-bootstrap"

// This is where I iterate over the array and go through each card. 

function NewsCard({articles}){
const tasksthing = articles.map((article) => 
	<div className="cardParent">
	<Card border="dark" className="card" key={article.title} >
	<Card.Img variant="top" src = {article.image} placeholder={"holder.js/100px180"}/>
	<div className="cardText">
	<Card.Body className="cardText">
		<Card.Title>{article.title}</Card.Title>
		<Card.Text >
			{article.description.length > 50 ? <li>
			{article.description.substring(0, 15) + "..." }
			</li> : <li>{article.description}</li> }
			<li>Source: {article.source}</li>
			<li>Country: {article.country}</li>
			<li>Category: {article.category}</li>
			<li>{article.published_at}</li>
			{/* {article.language} */}
		</Card.Text>
		<Button variant="primary" href={article.url}>Link</Button>
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