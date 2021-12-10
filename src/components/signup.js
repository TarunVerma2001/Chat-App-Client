const Signup = () => {
  return (
    <div className="h-screen w-screen ">
      <p className=" text-2xl border-b-gray-800 border px-4 py-2 font-semibold text-gray-900">
        Signup
      </p>
      <p className="uppercase px-4 pt-4 pb-2 text-sky-800 font-bold ">
        Start for Free
      </p>
      <p className=" px-4 font-bold text-2xl text-indigo-900">
        Create New Account
      </p>
      <div className="px-4 py-4 flex flex-col  sm:w-1/2 md:w-1/3">
        <input
          class="focus:ring-2 mb-4 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-4 ring-1 ring-gray-300 shadow-sm"
          type="text"
          placeholder="Name"
        />
        <input
          class="focus:ring-2 mb-4 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-4 ring-1 ring-gray-300 shadow-sm"
          type="email"
          placeholder="Email"
        />
        <input
          class="focus:ring-2 mb-4 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-4 ring-1 ring-gray-300 shadow-sm"
          type="password"
          placeholder="Password"
        />
        <input
          class="focus:ring-2 mb-4 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-4 ring-1 ring-gray-300 shadow-sm"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="hover:shadow-xl rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">Register</button>
      </div>
    </div>
  );
};

export default Signup;
