import React from "react"
import "./NewsCard.css"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

function NewsCard({articles}){
const tasksthing = articles.map((article) => 
	<div class="d-flex">
		<Container>
			<Row className="rows">
				<Col md={4}> 
					<Card style={{ width: '18rem' }} key={article.title}  class="d-flex">
						<Card.Img variant="top" src = {article.image} alt = "holder.js/100px180"/>
						<Card.Body>
							<Card.Title>{article.title}</Card.Title>
								<Card.Text>
								<li>Author: {article.author}</li> 
								<li>About: {article.description}</li>
								<li>Source: {article.source}</li>
								<li>Country: {article.country}</li>
								<li>Published: {article.published_at}</li>
								<li>Category: {article.category}</li>
								{article.language}
							</Card.Text>
							<Button variant="primary" src={article.url}>Link</Button>
						</Card.Body>
					</Card>	
				</Col>
			</Row>
		</Container>				
	</div>
)

return(
	<div class="d-flex align-content-stretch flex-wrap">
		{tasksthing}				
	</div>
)
}

export default NewsCard