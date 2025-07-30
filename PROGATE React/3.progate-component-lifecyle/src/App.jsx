import { useEffect, useState } from 'react'
// import Counter from './components/Counter'
// import GameOver from './components/GameOver'
import PokeList from "./components/PokeList"
import PokeDetail from "./components/PokeDetail"

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState("")
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => { // useEffect diperlukan di sini karena mengakses API eksternal merupakan side effect.
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results))
    // Code ini mendapatkan data dari endpoint-nya PokeApi menggunakan method fetch dan mengatur data awalnya dengan setPokemonList(data.results).
    .catch((err) => console.log(err))
  }, []) // Karena useEffect ini hanya dibutuhkan pada awal render untuk menyiapkan data awalnya, dependency [] ditambahkan (= useEffect ini tidak dijalankan ketika state diperbarui.).

  useEffect(() => {
    if (!selectedPokemon) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err))
  }, [selectedPokemon]) // useEffect ini akan dijalankan setiap kali "selectedPokemon" berubah. Jika "selectedPokemon" tidak ada, maka fungsi akan berhenti dengan return.

  const clear = () => {
    setSelectedPokemon("")
    setPokemonDetail()
  }

  ///////////////////////////////////////////////////
  // const [isGameOver, setIsGameOver] = useState(false)

  // const finishGame = () => {
  //   setIsGameOver(true)
  // }
  ///////////////////////////////////////////////////

  return (
    ///////////////////////////////////////////////////
    {/* <div style={styles.container}>
      {isGameOver ?
        <GameOver /> : <Counter setFinishGame={finishGame} />
        // Jika "isGameOver" true, maka tampilkan komponen "GameOver", jika false tampilkan komponen "Counter" dengan props "setFinishGame" yang berisi fungsi "finishGame"
      }
    </div> */},
    ///////////////////////////////////////////////////

    <div style={style.container}>
      <h2>PokeAPI</h2>
      <PokeList pokemonIsList={pokemonList} pokemonIsSelected={setSelectedPokemon}/>
      {pokemonDetail && (
        <div>
          <h2>Pokemon Detail</h2>
          <PokeDetail pokemonDetail={pokemonDetail} />
          <button style={style.button} onClick={() => clear()}>
            Clear
          </button>
        </div>
        
      )}
    </div>
  )
}

const style = {
  container: {
    textAlign: 'center',
    marginTop: '30px,',
    width: "50%",
    margin: "0 auto",
    padding: "80px",
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "32px",
  },
}

export default App
