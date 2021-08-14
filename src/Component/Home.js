import React from "react"
import {withRouter} from 'react-router';

function Home() {
	return (
		<div class="d-flex mx-auto justify-content-center"
		style={{width: "200px",}}>
			<h1>Welcome</h1>
			<br/>
			<p>This is a website designed to understand more about the world around us and the daily struggle of keeping up 
				with the news. This is to help bridge gaps and help people understand more about world politics and other issues 
				around the world. 
			</p>
		</div>
	)
}

export default withRouter(Home) 