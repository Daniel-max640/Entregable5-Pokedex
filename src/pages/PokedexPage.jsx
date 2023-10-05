import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Cantidad de elementos por página


    const trainer = useSelector(store => store.trainer)

    const  inputSearch = useRef()

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200'

    const [ pokemons, getPokemons, getTypePokemon] = useFetch(url)

    useEffect(() => {
      if (typeSelected === 'allPokemons') {
        getPokemons()
      } else {
        getTypePokemon(typeSelected)
      }      
    }, [typeSelected])

    useEffect(() => {
      setCurrentPage(1); // Restablecer la página actual cuando cambia la búsqueda
    }, [inputValue]);

    const handleSearch = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim().toLowerCase())
    }
    
    const pokeFiltered = pokemons?.results.filter(poke =>poke.name.includes(inputValue))


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtrar los elementos a mostrar en la página actual
  const visiblePokes = pokeFiltered?.slice(startIndex, endIndex);

  // Manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="center-container">

<div className="banner">
        <img src="/Pokédex_3D.png" alt="Banner" />
      </div>
      <p className="cards">Bienvenido {trainer}, <span className="cards-span">aqui podras encontrar tu pokemon favorito</span> </p>
      <form onSubmit={handleSearch}>
        <input className= "input-card" ref={inputSearch} type="text" />
        <button className="button-card">Search</button>
      </form>
      <SelectType className="select-card"
      setTypeSelected={setTypeSelected} 
      />
      <div className="pokemon-card-container">
        {
          visiblePokes?.map(poke => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      <div className="pagination">
        <button className="button-card"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Página anterior
        </button>
        <button className="button-card"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= pokeFiltered?.length}
        >
          Página siguiente
        </button>
    </div>
    </div>
  )
}

export default PokedexPage
