function Player ({ params }) {
  const { id } = params

  return (
    <div>
      <h2>Este es el jugador {id}</h2>
    </div>
  )
}

export default Player
