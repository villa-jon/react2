import React from "react"

function SearchBar({ search, setSearch }) {
	// const [search, setSearch] = useState('')	
	const BarStyling = {
	// display: 'flex', 
	// alignItems: 'center', 
	// justifyContent: "center",
	// flexDirection: 'column',
	// paddingTop: '20px',
	// fontFamily: 'Montserrat',
	// fontWeight: 'bolder',
	width:"20rem",
	background:"#F2F1F9", 
	border:"none", 
	padding:"0.5rem"};

	// function handleSearch(event) {
	// 	console.log(event.target.value)
	// 	let value = event.target.value.toLowerCase();
	// 	let result;
		
	// 	result = articles.filter((article) => {
	// 	return article.title.search(value) !== -1;
	// 	});
	// 	setSearch(result);  
	// 	}  
		// This is where the user can type in what to search for on screen 
	return (
	  <input 
	   style={BarStyling}
	//    id="search"
	   value={search}
	   placeholder={"search"}
	   onChange={(w) => setSearch(w.target.value)}
	  />
	);
}

export default SearchBar