import {addUser} from '@/app/lib/actions'
const SignUp = () => {
  return (
    <div className="p-10 bg-slate-100 border-none rounded-lg">
      <form className=" space-y-4" action={addUser}>
        <div className="text-xl flex justify-between">
          <label>Name:</label>
          <input
            type="text"
            name="username"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="text-xl flex justify-between">
          <label>Email:</label>
          <input
            type="email"
            name="useremail"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="text-xl flex justify-between">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            className="border ml-1 border-black outline-none p-1"
          />
        </div>
        <div className="flex justify-end">
          <button type = "submit" className="font-bold px-4 py-2 border-none rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
