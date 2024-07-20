import { useSmoothScroll, useParallax, useDelayedParallax } from '../hooks/index';
import { Header } from '../components/index';

function Home() {

    const [smoothScroll] = useSmoothScroll();
    const [parallax] = useParallax();
    const [delayedParallax] = useDelayedParallax();

    smoothScroll(0.04, 0.02, 4);

    parallax('momentumfx', 0);
    parallax('version', 5);

    // parallax('8x', 8);
    // parallax('4x', 4);
    // parallax('parallax', 3);

    // delayedParallax('delay', 4, 0.03);

    const theme = {
        backgroundColor: '#EEB76B',
        color: '#11111'
    }

    return (
        <>
            <Header />
            <main style={theme} className='px-4 md:px-10 uppercase'>

                <div style={theme} className='min-h-dvh flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 id='momentumfx' style={{ fontSize: '12vw', color: '#111111' }} className='font-bold'>MomentumFX</h1>
                    <h1 id='version' style={{ fontSize: '8vw', color: 'white' }} className='font-bold'>V1.X</h1>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2vw)', color: '#111111' }} className='font-bold normal-case'>What is MomentumFX?</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5vw)', color: 'white', background: '#1111' }} className='rounded-md p-4 normal-case'>MomentumFX is a React Library that allows you implementing high perfermance smooth scroll cross browsers. It is using all scroll event to perform a momentum based scrolling (aka inertial scrolling) on modern browsers. This is the smooth scroll that you've ever dreamed of!</h1>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2vw)', color: '#111111' }} className='font-bold normal-case'>Installation</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5vw)', color: 'white', background: '#1111' }} className='rounded-md font-bold p-4 normal-case'>npm install momentumfx --save</h1>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2vw)', color: '#111111' }} className='font-bold normal-case'>Usage</h1>
                    <pre style={{ fontSize: 'clamp(0.7rem, 1.5vw, 1.5vw)', background: '#1111' }} className='flex p-4 rounded-md flex-col gap-4 text-white text-start normal-case'>
                        <code>import {'{'} useSmoothScroll {'}'} from 'momentumfx';</code>
                        <code>const [ smoothScroll ] = useSmoothScroll();</code>
                        <code>smoothScroll(0.04, 0.02, 4);</code>
                    </pre>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2vw)', color: '#111111' }} className='font-bold normal-case'>Available Options for smoothScroll()</h1>
                    <div class="normal-case">
                        <table style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.2vw)', background: '#1111' }} class="min-w-full border text-white border-black">
                            <thead>
                                <tr>
                                    <th class="p-2 border-b border-black text-center border-r">Parameter</th>
                                    <th class="p-2 border-b border-black text-center border-r">Type</th>
                                    <th class="p-2 border-b border-black text-center border-r">Default</th>
                                    <th class="p-2 border-b border-black text-center border-r">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">momentum</td>
                                    <td class="p-2 border-b  border-black border-r">number</td>
                                    <td class="p-2 border-b  border-black border-r">0.04</td>
                                    <td class="p-2 border-b  border-black border-r">0.01 - 1</td>

                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">touchMomentum</td>
                                    <td class="p-2 border-b  border-black border-r">number</td>
                                    <td class="p-2 border-b  border-black border-r">0.02</td>
                                    <td class="p-2 border-b  border-black border-r">0.01 - 1</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">speed</td>
                                    <td class="p-2 border-b  border-black border-r">number</td>
                                    <td class="p-2 border-b  border-black border-r">4</td>
                                    <td class="p-2 border-b  border-black border-r">1 - 10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2vw)', color: '#111' }} className='font-bold p-4 normal-case'>Browser Compatibility</h1>
                    <div class="normal-case">
                        <table style={{ background: '#1111', fontSize: 'clamp(0.8rem, 1.2vw, 1.2vw)' }} class="min-w-full border text-white border-black">
                            <thead>
                                <tr>
                                    <th class="p-2 border-b border-black text-center border-r">Browser</th>
                                    <th class="p-2 border-b border-black text-center">Version</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">Chrome</td>
                                    <td class="p-2 border-b  border-black">51+</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">Firefox</td>
                                    <td class="p-2 border-b border-black">52+</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">Safari</td>
                                    <td class="p-2 border-b border-black">10.1+</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">Edge</td>
                                    <td class="p-2 border-b border-black">79+</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border-b border-black border-r">Internet Explorer</td>
                                    <td class="p-2 border-b border-black">Not supported</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                <div style={theme} className='min-h-fit flex flex-col gap-10 py-10 justify-center items-center text-center'>
                    <h1 style={{ fontSize: 'clamp(1rem, 1vw, 1vw)', color: '#111111', backgroundColor: '#1111' }} className='p-4 rounded-md normal-case'>Created By Chayan Mulewa With ❤️ Love</h1>
                </div>
                {/* <div style={theme} className='min-h-dvh flex flex-col gap-10 py-10 justify-center items-center text-start font-bold md:flex-row md:text-start'>
                    <p className='w-full' >A simple scroll library used by developers at MomentumFX. Built as a layer on top of virtual-scroll, it provides smooth scrolling with support for parallax effects, toggling id, and triggering event listeners when elements are in the viewport.</p>
                    <div className='w-full flex flex-col gap-4 justify-center' >
                        <div className='flex flex-row justify-between'><h1>01. Speed Control</h1><h1 className=''>↓</h1></div>
                        <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                        <div className='flex flex-row justify-between'><h1>02. Scroll Parallax Effect</h1><h1 className=''>↓</h1></div>
                        <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                        <div className='flex flex-row justify-between'><h1>03. Delay Parallax Effect</h1><h1 className=''>↓</h1></div>
                        <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />
                    </div>
                </div>

                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />

                <div style={theme} className='min-h-dvh relative flex flex-col gap-10 py-10 justify-center items-center text-start font-bold normal-case md:flex-row'>
                    <div className='w-full flex flex-col gap-4'>
                        <h1>01.
                            Speed control
                        </h1>
                        <p>Each element can be animated at a different speed. You get to choo-choo-choose!</p>
                    </div>

                    <div id='4x' style={{ fontSize: 'clamp(3rem, 3vw, 3vw)', bottom: '-60vh', right: '15vw' }} className='absolute px-6 py-4 rounded-full font-thin bg-black text-white'>4X</div>
                    <div id='8x' style={{ fontSize: 'clamp(3rem, 3vw, 3vw)', bottom: '-110vh', left: '5vw' }} className='absolute px-6 py-4 rounded-full font-thin bg-black text-white'>8X</div>

                    <div className='w-full flex py-10 justify-center'>
                        <img className='' src="https://images.pexels.com/photos/9395052/pexels-photo-9395052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>

                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />

                <div style={theme} className='min-h-dvh relative flex flex-col gap-10 py-10 justify-center items-center text-start font-bold normal-case md:flex-row'>
                    <div className='w-full flex py-10 justify-center'>
                        <img className='' src="https://images.pexels.com/photos/12891684/pexels-photo-12891684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h1>02. Parallax Effect
                        </h1>
                        <p>Parallax Effect those smooth animations using parallax to create a Parallax effect.</p>
                    </div>
                    <div id='parallax' style={{ fontSize: 'clamp(1.5rem, 3vw, 3vw)', bottom: '-40vh', left: '4vh', backgroundColor: 'black', color: '#D6BD98' }} className='absolute p-4 rounded-lg'>Parallax Effect</div>

                </div>

                <div style={{ height: '2px' }} className='rounded-sm w-full bg-black' />

                <div style={theme} className='min-h-dvh relative flex flex-col gap-10 py-10 justify-center items-center text-start font-bold normal-case md:flex-row'>
                    <div className='w-full flex flex-col gap-4'>
                        <h1>03. Delay Parallax Effect
                        </h1>
                        <p>Stagger those smooth animations using delays to create a rushing or dragging effect.</p>
                    </div>
                    <div className='w-full flex py-10 justify-center'>
                        <img className='' src="https://images.pexels.com/photos/18789312/pexels-photo-18789312/free-photo-of-crowd-of-people-standing-in-front-of-a-steam-train.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div id='delay' style={{ fontSize: 'clamp(1.5rem, 3vw, 3vw)', bottom: '-130vh', right: '4vh', backgroundColor: 'black', color: '#D6BD98' }} className='absolute p-4 rounded-lg'>Delay Parallax Effect</div>

                </div> */}

            </main >
        </>
    );
}

export default Home;
