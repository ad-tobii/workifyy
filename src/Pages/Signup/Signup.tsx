import { Logo } from "./Component/Logo";
import { Header } from "./Component/Header";
import { SignupOptions } from "./Component/SignupOptions";
import { SignupBtns } from "./Component/SignupBtns";
function Signup() {
  return (
    <div>
      <Logo />
      <Header />
      <SignupOptions />
      <SignupBtns />
    </div>
  );
}

export default Signup;
