import React from "react"
import SearchBar from "./SearchBar"
import {Button} from "react-bootstrap"
import {withRouter} from 'react-router';

function Header({input, onChange}) {	

	return (
		<div 
		class="d-flex mx-auto justify-content-center"
		style={{width: "200px",}}
		>
			<SearchBar
			input={input}
			setInput={onChange}
			/>	
			<Button
			type="submit"
			>Search
			</Button>	
		</div>
	)
}

export default withRouter(Header)