import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"

const HomePage = () => {
    

    const inputTrainer = useRef()

    const dispatch = useDispatch()
    
    const handleTrainer = e => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        
    }



  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hi Trainer</h2>
      <p>To start, please, enter tour trainer nasme</p>
      <form onSubmit={handleTrainer}>
        <input ref={inputTrainer} type="text" />
        <button>Start!</button>
      </form>
    </div>
  )
}

export default HomePage
