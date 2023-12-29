import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const SignIn = () => {
  // const [error, setError] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  const { loading, error } = useSelector((store) => store.user)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setIsLoading(true)
    dispatch(signInStart())
    // console.log(e.currentTarget)
    const formData = new FormData(e.currentTarget)
    // console.log(formData);
    const newUser = Object.fromEntries(formData)
    // console.log(newUser)
    const res = await fetch('/api/v1/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    const data = await res.json()
    // console.log(data);
    if (!data.email) {
      // setError(data.message)
      // // console.log(error)
      // setIsLoading(false)
      // return
      dispatch(signInFailure(data.message))
      return
    }
    // setIsLoading(false)
    // setError(null)
    dispatch(signInSuccess(data))
    navigate('/')
  }

  return (
    <section className="flex justify-center bg-[#f7f7fd] h-screen">
      <div className="bg-gradient-to-r from-sky-400 to-indigo-500 hidden xl:block w-[50%]">
        <img
          src="https://s3-alpha-sig.figma.com/img/b066/baa1/e8316c663b15db12a89ebae32886491a?Expires=1704067200&Signature=DlyYXyUaHz0wwuR0l2soD6EBg0jNGxKFzUUk~Zpbu4~pbQb5dNBytxMY4SMwmSulR1eXgPiDgrd6mdmPnPfS2mLB5ION3OwTDitwpAdlcG~tHbZEtGJMjt2l1Fx6X2cNFhZ59sBqz05D4387JvZrKs9UQ5sIZkLnBK2dD4gCV5USpDpvuUg01ikKrpUPN1Pcq2UKX3edhupfq4rB~Rqe9jyITyePdxrvsXlYjOGCdaBd8-uNqnXDVFoazgpU4f2TTh~p9IoAh3qKf~ZVl~FAu4ZrQVUBB~b2u4cIA9ObYC7LuE~IKtnYIFpiotDxInOJ9-s1hFTM6y69TBSI3XSrtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Home"
          className="object-comtain h-full w-full opacity-80"
        />
      </div>
      <div className="flex flex-col justify-center gap-16 w-full xl:mt-20 xl:gap-10 md:w-[60%] items-center xl:w-[50%] p-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/b446/ddcc/016ef88132ccaf1c82456e6489519b68?Expires=1704067200&Signature=AgfSe2xV0B4cLHXkrErpUmIsDmVLH5DPRdKjvBWFjtLB1YCoi3noi-YeluTNGUD9523W3lJ1G0qU6UJV2hMp4Tw1fkEhBeuLkaXw9Ndj8uTxlf2Q4l19XAdCK3tkDFMJILvSlQ0qcjc1-cHPHuHhOccthczcMPVwpFjtBPrubSFzJWH88FDzbeRlZpTM2xsDdwFWzZRY1N7juK16UUdqcJFdKh982~OmdnLmVOMUVhpgTvrNm7KLKfwid7-0aC-8YoDY~dxD1HxQfrylyVS-Ev2TM2nN4xG6YAlyeit7bYQd66hUypNyxa2VTUR0SZHbb-QtBs~JojZJxEhiIzeGXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="home logo"
            width={60}
            height={60}
          />
          <h2 className="text-2xl text-center">Login to your account</h2>
          <p className="flex flex-wrap max-w-sm text-center tracking-wider text-slate-500">
            Enter your email id and password
          </p>
        </div>

        <form className="w-[90%] max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
          {error && <p className="mt-6 bg-red-100 p-4 rounded-xl">{error}</p>}
        </form>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-slate-400">--------------- or ---------------</p>
          <OAuth />
          <div className="flex gap-2 justify-center items-center">
            <p className="text-sm">Dont have an account?</p>
            <Link to={'/sign-up'}>
              <span className="text-sm text-blue-400">Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
