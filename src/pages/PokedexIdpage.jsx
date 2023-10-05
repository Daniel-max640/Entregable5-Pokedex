import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokedexIdpage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [id])
  
console.log(pokemon)
  return (
    <div className="pokemon-details">

        <div className="banner">
        <img src="./public/img/Pokédex_3D.png" alt="Banner" />
        </div>

        <div className="pokemon-card">

        <section className="pokemon-header">
            <img className="pokemon-image"
            src={pokemon?.sprites.other['official-artwork'].front_default}
            alt=""
            />
            <h2 className="titulos">#{pokemon?.id}</h2>
            <h2 className="titulos">{pokemon?.name}</h2>
        </section>

        <section className="pokemon-section-information">
            <div className="pokemon-info">
                <div className="info-item">
                <span className="info-label">Peso</span>
                <span className="info-value">{pokemon?.weight}</span>
                </div>
                <div className="info-item">
                <span className="info-label">Altura</span>
                <span className="info-value">{pokemon?.height}</span>
                </div>
            </div>
        </section>

        <section className="pokemon-section">
            <div className="type-abilities">
                <div className="type">
                <h2 className="section-title">Tipo</h2>
                <div className="pokemon-types">
                    {pokemon?.types.map((typeInfo) => (
                    <div className="type-item" key={typeInfo.type.url}>
                        <div className="type-label">{typeInfo.type.name}</div>
                    </div>
                    ))}
                </div>
                </div>

                <div className="abilities">
                <h2 className="section-title">Habilidades</h2>
                <div className="pokemon-abilities">
                    {pokemon?.abilities.map((abilityInfo) => (
                    <div className="ability-item" key={abilityInfo.ability.url}>
                        <div className="ability-label">{abilityInfo.ability.name}</div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>

        <section className="pokemon-section-stats">
            <h2 className="section-title-stats">Stats</h2>
            <ul className="pokemon-stats-list">
                {pokemon?.stats.map((statInfo) => (
                <li className="pokemon-stats-item" key={statInfo.stat.url}>
                    <span className="stat-name">{statInfo.stat.name}</span>
                    <span className="stat-value">{statInfo.base_stat}</span>
                </li>
                ))}
            </ul>
        </section>

       <section className="pokemon-section-move">
            <h2 className="section-title-movements">Movements</h2>
            <ul>
                {pokemon?.moves.map((moveInfo) => (
                <li key={moveInfo.move.url}>
                    {moveInfo.move.name}
                </li>
                ))}
            </ul>
       </section>

       </div>                
    </div>
  )
}

export default PokedexIdpage