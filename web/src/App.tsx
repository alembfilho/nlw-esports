import './styles/main.css'
import logo from './assets/logo.png'

function App() {
  return <div className='max-w-7xl mx-auto flex flex-col items-center m-10 p-10'>
    <img src={logo} alt="" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='bg-gradient bg-clip-text text-transparent'>duo</span> está aqui.
    </h1>

    <div className='grid grid-cols-6 gap-3 mt-16'>
      <a href="" className='relative rounded-md overflow-hidden'>
        <div className='w-full h-1/2 absolute bottom-0 left-0 bg-overlay p-2 pt-8'>
          <h3 className='font-bold text-white text-[.7rem] tracking-tighter mb-[-8px]'>League of Legends</h3>
          <span className='text-zinc-300 text-[.6rem]'>4 anúncios</span>
        </div>
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

    <div className=' bg-gradient w-full mt-8 pt-1 rounded-lg overflow-hidden'>
      <div className='rounded-t bg-zinc-800 px-6 py-4 w-full flex justify-between items-center'>
        <div>
          <h2 className='text-white font-bold'>Não encontrou seu duo?</h2>
          <span className='text-zinc-400 text-xs'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <button className='text-white text-sm bg-violet-500 hover:bg-violet-600 rounded px-4 h-10 flex items-center gap-2'>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.875 10.875H13.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.875 7.875V13.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.4438 16.4437L21.0001 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Publicar anúncio
        </button>
      </div>
    </div>

  </div>
}

export default App
