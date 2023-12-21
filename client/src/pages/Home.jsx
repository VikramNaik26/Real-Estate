const Home = () => {
  return (
    <section className="bg-[#f7f7fd] h-screen flex px-10">
      <div className="w-full xl:w-[90%] flex flex-col xl:flex-row-reverse md:justify-between md:items-center px-4 sm:px-14 mx-auto gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/4e88/b851/adbee4126c130a5f358a42d00c9c481a?Expires=1704067200&Signature=n2cz6vHTySMtqfrMR193c5-G9o5SVe7XLjvsJxi0qAceL7jesRbUX~BdE-jAkbsitBJnsbdDxTFCtg8XrGucElcNHlYagaOPyuf2gZKUrWkT4boNHomG-gE6hnGlZi70eZZLz1VA6iDRlSTFfdzuMcrk4gC3kaLK-vz0432vMiNQ0h8ewyOhuhwfW3LAyrExXOt-tChrk6yc7wEp7yiDKKNdps2Gce1QGiPxAm-XqUalIiR1H190HH7b-THXk60CIOnbsSHMCzQfm5J0l2Vr5IhtWXCZxzWXXWrmeK-eLOVB~zj8~p4a0EZ6xCn5G1v1aRJDOJjayulIfwSw-L30Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Real Estate"
            className="md:max-w-2xl h-full object-cover"
          />

          <div className="w-full flex justify-center items-center relative">
            <form
              action=""
              className="bg-white px-4 py-2 md:py-3 rounded-lg w-full max-w-xl flex gap-10 xl:absolute bottom-40 -left-20"
            >
              <input
                type="text"
                className="w-[75%] max-w-4xl px-3 focus:outline-none text-slate-600 placeholder-slate-400"
                placeholder="Type here"
              />
              <button
                type="submit"
                className="bg-[#7065f0] px-5 py-2 md:py-3 text-white font-bold rounded-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-10 flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold flex flex-wrap leading-[1.175] xl:leading-[1.2]">
            Buy, rent or sell your property easily
          </h1>
          <p className="text-slate-400 text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            veritatis voluptatum autem quae a numquam, saepe doloribus culpa
            dolor optio exercitationem fugiat amet harum modi nam non, aliquid
            eius architecto!
          </p>
        </div>
      </div>
    </section>
  )
}
export default Home
