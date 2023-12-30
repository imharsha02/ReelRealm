"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

type LoginFormProps = {
  loginButtonClicked: boolean;
  setLoginButtonClicked: (clicked: boolean) => void;
};

const LoginForm:React.FC<LoginFormProps> = ({ loginButtonClicked, setLoginButtonClicked }) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <div className="flex flex-col my-10">
      <form
        action={dispatch}
        className="bg-slate-200 max-w-max p-3 mx-auto my-3 rounded space-y-3"
      >
        <p className="text-2xl font-bold text-center">Login</p>
        <div className="flex gap-2 items-center">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="p-1 focus:outline-none border-none rounded-md"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="p-1 focus:outline-none border-none rounded-md"
          />
        </div>
        <LoginButton
          loginButtonClicked={loginButtonClicked}
          setLoginButtonClicked={setLoginButtonClicked}
        />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
              {setLoginButtonClicked(false)}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

const LoginButton:React.FC<LoginFormProps> = ({ loginButtonClicked, setLoginButtonClicked }) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          setLoginButtonClicked(true);
        }}
        className="bg-blue-500 text-white w-full px-5 py-2 rounded-md hover:bg-blue-400 transition"
        aria-disabled={pending}
      >
        Sign in
      </button>
    </div>
  );
}

export default LoginForm;
