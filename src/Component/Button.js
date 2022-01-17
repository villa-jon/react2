import React, {useState} from "react"
// import Button from "react-bootstrap/Button"

function FilterButton(){
	// function handleOnClick(w) {
	// 	w.preventDefault()
	// }
	const [tags, Ptags] = useState('')

	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder'
	}

	function handleClick(w) {
		w.preventDefault()
		console.log(tags)
		// reset()
	}

	return(
		<div style={faqStyle} >
			<form onSubmit={handleClick}>
				<input
				value={tags}
				type="text"
				onChange={(w) => Ptags(w.target.value)}
				>
				</input>				
			</form>
		</div>
	)
}

// create an input you can type into, 
// below that input a ptag that tell you how many characters you typed into the input


export default FilterButton