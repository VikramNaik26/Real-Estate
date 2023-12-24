import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-[#fafafe] shadow-sm relative">
      <nav className="flex px-10 py-4 justify-between xl:absolute z-10 w-full">
        <div className="flex justify-center items-center">
          <Link to="/">
            <h1 className="text-2xl sm:text-xl font-bold my-auto">
              <span className="text-[#7065f0]">LimbePuli</span>
              <span className="text-slate-700"> Estate</span>
            </h1>
          </Link>
        </div>
        <div className="flex gap-16 justify-center items-center">
          <ul className="gap-8 text-[#52586f] font-bold tracking-wide hidden md:flex">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
          </ul>
          <div className="gap-6 hidden md:flex">
            <Link to="/sign-in">
              <button className="border px-6 py-3 border-slate-300 font-bold rounded-lg">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="bg-[#7065f0]  px-5 py-3 text-white font-bold rounded-lg">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center">
          hamburger
        </div>
      </nav>
    </header>
  )
}
export default Header
