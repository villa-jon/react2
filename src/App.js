import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Gen1 from "./Component/Gen1";
import NewsArticle from "./Component/NewsArticle";
// import DefaultLayout from "../../../../../../Desktop/Shards-Dashboard-Lite-React-1.0.0/Source Files/src/layouts/Default";

const aki = "http://api.mediastack.com/v1/news?access_key=19eb13b51a527ab54654d8a151929493"

function App() {
  const [articles, setArticles] = useState([])

  const newsCard = {
		backgroundColor: "blue"
	}

	useEffect(() => {
		      console.log("useEffect");
		      fetch(aki)
			.then((r) => r.json())
			.then((data) => {
			  setArticles(data.data);
			  console.log(data)
		      })
		    }, []);
  
  return (
    <div className="App" style={newsCard}>
    <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Home /> */}
      {/* </Route> */}
      <Route path="/gen1">
      <Gen1 />		
      </Route>
      <Route path="/newsarticle">
      <div className="sixteen wide column centered">
        <NewsArticle articles={articles} aki = {aki}/>       
      </div>
      </Route>			
=    </Switch>
    </Router>
    </div>
  )
}

export default App;
