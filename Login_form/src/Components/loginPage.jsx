


const LoginPage = () => {
     return (
    <div className="flex items-center  justify-center min-h-screen  ">
      <div className="w-96 p-6 bg-gray-800 border-2 hover:border-x-red-800 hover:border-y-amber-400 transition-all duration-1000 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login Form
        </h1>

        <form className="space-y-4 ">
          <div>
            <label className="block mb-1 font-medium text-white">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-white font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );

}

export default LoginPage
