const PokeList = ({pokemonIsList, pokemonIsSelected}) => {
    return (
        <div style={style.gridContent}>
            {pokemonIsList.map((item) => (
                <div style={style.card} key={item.name} onClick={() => pokemonIsSelected(item.name)}>
                    {item.name}
                </div>
            ))}
        </div>
    )

}

const style = {
gridContent: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
},
card: {
    padding: "16px 8px",
    backgroundColor: "aquamarine",
    borderRadius: "8px",
    cursor: "pointer",
},
}

export default PokeList