const Home = () => {
  return (
    <section className="bg-[#f7f7fd] h-screen flex px-10">
      <div className="w-full xl:w-[90%] flex flex-col xl:flex-row-reverse md:justify-between md:items-center px-4 sm:px-14 mx-auto gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <img
            src="https://images.unsplash.com/photo-1559019095-21c6d71ec450?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Real Estate"
            className="object-cover w-full mt-10 md:max-w-2xl"
          />

          <div className="relative flex items-center justify-center w-full">
            <form
              action=""
              className="flex w-full max-w-xl gap-10 px-4 py-2 bg-white rounded-lg md:py-3 xl:absolute bottom-40 -left-20"
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

        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl md:text-7xl font-bold flex flex-wrap leading-[1.175] xl:leading-[1.2]">
            Buy, rent or sell your property easily
          </h1>
          <p className="text-lg text-slate-400 ">
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
