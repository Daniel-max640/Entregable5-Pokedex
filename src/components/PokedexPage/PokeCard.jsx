import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"


const PokeCard = ({ url}) => {

    const [ pokemon, getPokemons] = useFetch(url)
    const navigate = useNavigate()

    useEffect(() => {
     getPokemons()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    
  return (
    <article onClick={handleNavigate}>
        <header>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>

        <section>
            <h3>{pokemon?.name}</h3>
            <ul className="card-nom">
                {
                    pokemon?.types.map(typeInfo => (
                        <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr />
            <ul className="card-stat">
                {
                    pokemon?.stats.map(statInfo => (
                      <li className="pokemon-stats-item" key={statInfo.stat.url}>
                        <span className="stat-name">{statInfo.stat.name}</span>
                        <span className="stat-value-2">{statInfo.base_stat}</span>
                      </li>  
                    ))
                }
            </ul>
        </section>

    </article>
  )
}

export default PokeCard