import Link from "next/link";

const SignUp = () => {
  return (
    <div className="p-10 bg-slate-100 border-none rounded-lg">
      <form className=" space-y-4">
        <div className="text-xl flex justify-between">
          <label>Name:</label>
          <input
            type="text"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="text-xl flex justify-between">
          <label>Email:</label>
          <input
            type="email"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="text-xl flex justify-between">
          <label>Password:</label>
          <input
            type="password"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="flex justify-end">
          <button className="font-bold px-4 py-2 border-none rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">
            <Link href="/dashboard">Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
