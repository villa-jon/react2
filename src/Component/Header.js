import React from "react"
import SearchBar from "./SearchBar"
// import {Button} from "react-bootstrap"
import {withRouter} from 'react-router';
import './Header.css'

// Parent

function Header({articles, search, setSearch}) {	

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
		class="d-flex mx-auto justify-content-center"
		style={faqStyle}
		>
			<div>
			<SearchBar
			articles={articles}
			search={search}
			setSearch = {setSearch}
			/>						
			</div>

		</div>
	)
}

export default withRouter(Header)