import './App.css';
import './index.css';
import { Home } from './pages/index';
import { useParallax } from './hooks/index';

function App() {

  // const [parallax] = useParallax();

  // parallax('4x', 5);

  return (
    <>
      <Home />

      {/* <div className='min-h-dvh bg-slate-500'></div>
      <div className='min-h-dvh flex flex-col justify-between items-center relative bg-slate-600'>
        <div id='8x' style={{ fontSize: 'clamp(3rem, 3vw, 3vw)' }} className='w-fit h-fit px-6 py-4 rounded-full font-thin bg-black text-white'>8X</div>
        <div id='4x' style={{ fontSize: 'clamp(3rem, 3vw, 3vw)' }} className='w-fit h-fit px-6 py-4 rounded-full font-thin bg-black text-white'>4X</div>
      </div>
      <div className='min-h-dvh bg-slate-500'></div> */}

    </>
  )
}

export default App;
