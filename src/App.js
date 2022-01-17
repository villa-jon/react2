import React, {useEffect, useState} from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Gen1 from "./Component/Gen1";
import NewsArticle from "./Component/NewsArticle";
import Calculator from "./Component/Calculator"
// this is where the app is being rendered 
const aki = "http://api.mediastack.com/v1/news?access_key=19eb13b51a527ab54654d8a151929493&sources=cnn,bbc"
// Parent
function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')

  const newsCard = {
		backgroundColor: "#A7C7E7"
	}

  let displayNews = articles.filter(
    w => w.title.toLowerCase().includes(search.toLowerCase()))

	useEffect(() => {
		      console.log("useEffect");
		      fetch(aki)
			.then((r) => r.json())
			.then((data) => {
			  setArticles(data.data);
        // setSearch(data.data);
			  console.log(data)
		      })
		    }, []);

  return (
    <div className="App" style={newsCard}>
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
        <NewsArticle 
        articles={displayNews} 
        // setArticles = {displayNews}
        search={search}
        setSearch={setSearch}
        />       
      </div>
      </Route>
      <Route exact path="/calculator" component={Calculator}/>			
    </Switch>
    </div>
  )
}

export default App;
