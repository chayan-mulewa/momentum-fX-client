function Header() {

    const GitHub = {
        GitHub: `${import.meta.env.VITE_GITHUB}`
    }

    return (
        <header className='h-20 w-full fixed z-10 bg-transparent backdrop-blur-md'>
            <nav className='h-full w-full flex flex-row px-4 justify-between items-center text-center md:px-10'>
                <ul>
                    <li className='font-bold cursor-pointer hover:text-white' style={{ fontSize: 'clamp(1.2rem, 2.1vw, 2.1vw)', color: '#111111' }}>MomentumFX</li>
                </ul>
                <ul>
                    <li className='font-bold cursor-pointer hover:text-white' style={{ fontSize: 'clamp(1.2rem, 2.1vw, 2.1vw)', color: '#111111' }}> <a href={GitHub.GitHub}>GitHub</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
