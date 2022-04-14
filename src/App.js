import {useState,useEffect} from 'react';
import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';
import Searchbar from './components/Searchbar'

function App() {
  const [pokeList, setPokeList] = useState([])
  const [currentPage,setCurrentPage] = useState(1)

  async function getPokemon(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await res.json();
    setPokeList(data.results);
  }

  useEffect(()=>{
    getPokemon()
    
  },[])

  const pokePerPage = 20;
  const lastPokeIndex = pokePerPage * currentPage;
  const firstPokeIndex = lastPokeIndex - pokePerPage;
  const currentPokemon = pokeList.slice(firstPokeIndex,lastPokeIndex);
  const buttonStyle = 'border rounded border-indigo-500/100 h-fit px-2 py-1 transition-all hover:bg-indigo-500/100';

  const nextPage = ()=>{
    if(currentPage>= Math.ceil(pokeList.length / pokePerPage)) return
    setCurrentPage(currentPage+1)
  }

  const prevPage = ()=>{
    if(currentPage<=1) return
    setCurrentPage(currentPage-1)
  }


  return (
    <div className="App ">
      <div className="flex flex-col justify-between items-center w-screen h-screen mx-auto">
        <h1 className="text-3xl font-bold underline mt-10">Pokemon list</h1>
        <Searchbar pokeList={pokeList}/>
        <Pokemon currentPokemon={currentPokemon}></Pokemon>

        <div className="flex items-center mb-10">
          <button className={buttonStyle} onClick={prevPage}>&#10094;</button>
          <Pagination
          listLength={pokeList.length}
          pokePerPage={pokePerPage} 
          currentPage={currentPage}/>
          <button className={buttonStyle} onClick={nextPage}>&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
