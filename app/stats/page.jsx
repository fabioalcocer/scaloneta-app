const getStats = () => {
  return fetch('https://scaloneta-api.vercel.app/seleccion').then(
    (res) => res.json()
  )
}

async function Stats () {
  const stats = await getStats()

  return (
    <div>
      <h2>{stats[0].nombre}</h2>
      <div>
        <p>Entrenador: {stats[0].entrenador.nombre}</p>
      </div>
    </div>
  )
}

export default Stats
