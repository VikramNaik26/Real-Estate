import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { user } = useSelector((state) => state.user)
  console.log()

  return (
    <header className="bg-[#fafafe] shadow-sm relative">
      <nav className="z-10 flex justify-between w-full px-10 py-4 xl:absolute">
        <div className="flex items-center justify-center">
          <Link to="/">
            <h1 className="my-auto text-2xl font-bold sm:text-xl">
              <span className="text-[#7065f0]">LimbePuli</span>
              <span className="text-slate-700"> Estate</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-16">
          <ul className="gap-8 text-[#52586f] font-bold tracking-wide hidden md:flex">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
          </ul>
          {/* {console.log(user.currentUser)} */}
          {user.currentUser ? (
            <Link to={'/profile'}>
              <img
                className="hidden object-cover w-10 h-10 rounded-full md:flex"
                src={user.currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <div className="hidden gap-6 md:flex">
              <Link to="/sign-in">
                <button className="px-6 py-3 font-bold border rounded-lg border-slate-300">
                  Login
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="bg-[#7065f0]  px-5 py-3 text-white font-bold rounded-lg">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center md:hidden">
          hamburger
        </div>
      </nav>
    </header>
  )
}
export default Header
