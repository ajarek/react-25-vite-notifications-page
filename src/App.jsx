import './App.css'
import Header from './components/Header/Header'
import ListBlog from './components/ListBlog/ListBlog'
import useFetch from './components/useFetch'


function App() {
  const{data}=useFetch('src/assets/data/data.json')
  console.log(data);

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
