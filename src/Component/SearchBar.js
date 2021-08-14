import React from "react"

function SearchBar() {
	const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
	return (
	  <input 
	   style={BarStyling}
	   key="random1"
	   placeholder={"search country"}
	  />
	);
}

export default SearchBar