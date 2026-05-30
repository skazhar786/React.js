


const LoginPage = () => {
  return (

    <div className="flex items-center  justify-center min-h-screen  ">

      <div className="w-96 p-6 border-2 bg-gray-800 rounded-3xl  ">


        <h1 className="text-white mb-6 text-bold text-center font-bold text-3xl ">Login Form</h1>

        <form className="space-y-4">

          <div>

            <label htmlFor="" className="text-white text-lg ">Username</label>
            <input
              type="text"
              required
              placeholder="UserName"
              className="w-full border-2 px-3 py-2  rounded-2xl hover:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none "
            />
          </div>
          <div>

            <label htmlFor="" className="text-white text-lg ">Email</label>
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full border-2 px-3 py-2  rounded-2xl  hover:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>

            <label htmlFor="" className="text-white text-lg ">Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full border-2 px-3 py-2  rounded-2xl  hover:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <a href="# " className="text-blue-600 text-l">forget password</a>

          <div className="flex justify-around mt-8">

            <button className="bg-blue-700 text-xl  duration-300 hover:scale-110 transition-transform rounded-4xl  border hover:bg-blue-800 outline-none font-bold px-10 py-4 focus:ring-2 focus:ring-blue-400">Login</button>


            <button  className="bg-green-700 text-xl rounded-4xl border hover:bg-green-900 transition-transform hover:scale-110 duration-300 font-bold px-10 py-4 focus:ring-2 focus:ring-green-400">SignUp</button>
          </div>

        </form>

      </div>
    </div>



  );

}

export default LoginPage
