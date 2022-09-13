import './styles/main.css'
import logo from './assets/logo.png'

function App() {
  return <div className='max-w-7xl mx-auto flex flex-col items-center my-20'>
    <img src={logo} alt="" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='bg-gradient bg-clip-text text-transparent'>duo</span> está aqui.
    </h1>

    <div className='grid grid-cols-6 gap-6 mt-16'>
      <a href="">
        <img src="/image 1.png" alt="" />
      </a>
      <a href="">
        <img src="/image 2.png" alt="" />
      </a>
      <a href="">
        <img src="/image 3.png" alt="" />
      </a>
      <a href="">
        <img src="/image 5.png" alt="" />
      </a>
      <a href="">
        <img src="/image 6.png" alt="" />
      </a>
      <a href="">
        <img src="/image 7.png" alt="" />
      </a>
    </div>

  </div>
}

export default App
