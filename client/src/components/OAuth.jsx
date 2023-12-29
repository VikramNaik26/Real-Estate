import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'

const OAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      //   console.log(result)
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoUrl,
        }),
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      console.log("couldn't connect to Google", error)
    }
  }

  return (
    <div className="flex gap-6">
      <button
        onClick={handleGoogleClick}
        className="flex gap-4 justify-center items-center border border-gray-300 p-3 rounded-full"
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/6eac/b3e5/822e87f137588c311769fa6cd346e54d?Expires=1704067200&Signature=o3cTaVp-91hMZYIIlCr9DtmAa25X2l7CXUQR2bK1q3hgFsJufybo-XVLlwMkXlGWLUlvMomoMOQpxtJRK2QU3OMDwYxlTLHgd8Cz1DlNR9QnpCoaBbvkdbzTFUFQS1NKwQsJvVfOQZK4WJN5i-Gb9WTB8HZrnoRDVqOxMTesWDAa558SEVJUdCgo4NPgKl9t1rR8AaN-s02TPozh5gBSekPXxyired6KlUcuSCI8Hl1QkuDORikWHdnbHvhcrCZhcCYp3gaqf3XlYOf0MuN14ERwEZbl4Y-9B7ZUi6wEpSf8FqFm3Kol298a8Xk8xBVh~vdmdcL8CqOnU-EIVuP22g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="google"
          width={24}
          height={24}
        />
        <p className="text-slate-500 hidden xl:block">Login with Google</p>
      </button>
      <button className="flex gap-4 justify-center items-center border border-gray-300 p-3 rounded-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/ebd1/f576/54f63f98cfaba8ed2ad2898a56b21121?Expires=1704067200&Signature=iS7HNlEs8yJHRwsnv3n0KWcDfDpoP~J8fVk48XnF11EpnmojOIqKTWShO~o8LyFyW6JrmsEIXjxUdf6SGLDYEB0MG7OZ7Yt3sFTdvAhWxoBFa3cqFJLdsIEFzopy0Wtd9nEcqfaIKr3oEixvHSbGplb4MWDBavIKuwb4H216voLIcfVrjUMwHmGmC-C49fz-KHoS8iif15lyGwSPkrbfuNlhKjz-yAHC6aDolr5XZCq3hvJ4nL1-bJVaEVpD~KaRBNRo-yBGimtSd4PdpToolJVTlqpmUKhJiJpHduG63a83UtYEb~~JtTr50jdn9XEMe7nik~YdJsYKKtbm~cPLHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={24}
          height={24}
        />
        <p className="text-slate-500 hidden xl:block">Login with Facebook</p>
      </button>
    </div>
  )
}
export default OAuth
