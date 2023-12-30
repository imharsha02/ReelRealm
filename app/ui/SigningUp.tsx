import { AiOutlineLoading3Quarters } from "react-icons/ai";
const SignUpLoader = () => {
  return (
    <div className="mt-2 ml-3 flex items-center gap-2">
      <AiOutlineLoading3Quarters className="animate-spin" /> Signing up...
    </div>
  );
};

export default SignUpLoader;
