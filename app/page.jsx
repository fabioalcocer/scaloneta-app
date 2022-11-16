import Image from 'next/image'
import picture from './assets/tuki.jpg'

function Home () {
  return (
    <main>
      <h1 style={{ margin: '1rem 0' }}>Scaloneta App OB</h1>
      <Image src={picture} alt='scaloneta' style={{ objectFit: 'cover', width: '100%', height: '85vh' }} />
    </main>
  )
}

export default Home
