import React, {useState} from "react"
// import Dropdown from "react-bootstrap/Dropdown"

function Calculator(){
	// function handleOnClick(w) {
	// 	w.preventDefault()
	// }
	const [tags, Ptags] = useState(0)
	const [tags1, Ptags1] = useState(0)

	const [add, add1] = useState()

	const faqStyle = {
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder'
	}

	function handleOnchange(w) {
		w.preventDefault()
		add1(w.target.value)
	}

	function whyNumberMakeNoSense() {
	switch(add) {
		case "add":
		return parseInt(tags)+parseInt(tags1);
		case "subtract":
		return parseInt(tags)-parseInt(tags1);
		case "multiply":
		return parseInt(tags)*parseInt(tags1);
		case "divide":
		return parseInt(tags)/parseInt(tags1);
		default:
		return 0;	
	}

	}

	return(
		<div style={faqStyle} class="d-flex mx-auto justify-content-center" >
			<h1>News Calculator</h1>
			<form>
				<input
				value={tags}
				type="number"
				onChange={(w) => Ptags(w.target.value)}
				>
				</input>
				<br/>
				<br/>
				<select value={add} onChange={handleOnchange}>
					<option value={"add"} >+</option>
					<option value={"subtract"} >-</option>
					<option value={"multiply"} >X</option>
					<option value={"divide"} >%</option>
				</select>
				<input
				value={tags1}
				type="number"
				onChange={(w) => Ptags1(w.target.value)}
				>
				</input>
				<p
				>{whyNumberMakeNoSense()}
				</p>		
			</form>
		</div>
	)
}

// create an input you can type into, 
// below that input a ptag that tell you how many characters you typed into the input


export default Calculator