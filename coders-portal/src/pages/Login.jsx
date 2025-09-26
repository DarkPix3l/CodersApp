import LoginForm from "../components/LoginForm.jsx";
import LoginImg from "../components/LoginImg.jsx";

function Login() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <LoginImg />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
