import './App.css'
import Header from './components/Header/Header'
import ListBlog from './components/ListBlog/ListBlog'
import useFetch from './components/useFetch'

//npx json-server --watch src/assets/data/data.json --port 8000

function App() {
  const{data}=useFetch('http://localhost:8000/notifications')


  return (
    <div className="App">
   <Header/>
   <ListBlog
   data={data}
   />
  
    </div>
    
  )
}

export default App
