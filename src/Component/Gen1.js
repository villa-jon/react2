import React from "react"
// import SearchBar from "./SearchBar"
// import { FloatingLabel, Form, Button } from "react-bootstrap";
import {withRouter} from 'react-router';

function Gen1() {
	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder'
	}
	return (	
		<div 
		style={faqStyle}
		>
			<h1>FAQ: Frequently Asked Questions</h1>
			<ul>
				<li>
					What is this about? 
				</li>
				<li>
					This is a website that caters towards the truth and how the truth is presented in the media. 
				</li>
				<li>
					Why create a website like this?  
				</li>
				<li>
					To show what the media and news looks like around the world. 
				</li>				
			</ul>
		</div>
	)
}

export default withRouter(Gen1)