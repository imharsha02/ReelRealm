import { RxExit } from "react-icons/rx";
import { signOut } from "@/auth";
async function logOut(){
  await signOut;
}
const SignoutLink =  () => {
  return (
    <div className="flex items-center space-x-2" onClick = {logOut}>
      Sign out
      <RxExit/>
    </div>
  )
}

export default SignoutLink
