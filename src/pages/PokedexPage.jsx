import { useSelector } from "react-redux"

const PokedexPage = () => {

    const trainer = useSelector(store => store.trainer)
    console.log(trainer)

  return (
    <div>
      <p>Hi {trainer}</p>
    </div>
  )
}

export default PokedexPage
