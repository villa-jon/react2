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
		<div style={faqStyle}>
			<h1>FAQ: Frequently Asked Questions</h1>
			<ul>
				<li>
					sure
				</li>
			</ul>
		</div>
	)
}

export default withRouter(Gen1)