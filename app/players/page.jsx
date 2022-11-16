import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const getPlayers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return fetch('https://scaloneta-api.vercel.app/jugadores', {
    cache: 'no-store'
  }).then((res) => res.json())
}

async function Players () {
  const players = await getPlayers()

  return (
    <div className={styles.container}>
      {players.map((player) => (
        <article key={player.id} className={styles.card}>
          <div className={styles.img_container}>
            <Image
              style={{ objectFit: 'contain' }}
              fill
              src='https://logodownload.org/wp-content/uploads/2016/11/afa-seleccion-argentina-futbol-logo-1.png'
              alt='card-img'
            />
          </div>
          <div className={styles.name}>
            <Link href='/players/[id]' as={`/players/${player.id}`}>
              <h2>{player.name}</h2>
              <p>{`(${player['fecha-nacimiento'].slice(-4)})`}</p>
            </Link>
          </div>
          <p className={styles.label}>
            Edad: <span>{player.edad}</span>
          </p>
          <p className={styles.label}>
            Equipo: <span>{player['equipo-actual']}</span>
          </p>
          <div className={styles.position}>
            <p>
              Posición: <span>{player.posicion}</span>
            </p>
            <p>
              Dorsal: <span>{player.dorsal}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Players
