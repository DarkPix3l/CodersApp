import SignUpForm from "../components/SignUpForm.jsx";
import LoginImg from "../components/LoginImg.jsx";

function SignUp() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <LoginImg />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
