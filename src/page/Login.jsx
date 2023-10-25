import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");

        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl py-10 font-bold text-black">Login now!</h1>
      </div>
      <div className="hero ">
        <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white  bg-[#5726F8]">Login</button>
            </div>
          </form>

          <div className="text-center font-semibold text-red-800">
            {/* {loginError && <p>{loginError}</p>} */}
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-3 grid text-center">
              <div>
                <button className=" btn w-1/4">
                  <img
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md pb-5">
            <p className="mt-2 text-center text-base text-gray-600 max-w">
              Or
              <Link
                to="/signUp"
                className="ml-1  font-medium text-blue-600 hover:text-blue-500"
              >
                sign up here!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
