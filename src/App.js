import './App.css';
import React,{useState,useEffect} from 'react';
import Recipie from './components/Recipe'



function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])
  const [query, setQuery] = useState('chicken')
  const APP_ID = ""
  const APP_KEY = ""
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  useEffect(() => {
    getRecipie();
  }, [query])

  const getRecipie=()=>{
    fetch(API).then(response=>response.json()).then(data=>{
      setData(data.hits)
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setQuery(search)
  }

  const handleChangeInput=e=>{
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={search}
          onChange={handleChangeInput}
        />
        <button>Submit</button>
      </form>
      <div className="recipies">
        {data.map(recipe=>(
          <Recipie 
          title={recipe.recipe.label}
          key={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredient={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
