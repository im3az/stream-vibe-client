import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have at least 6 characters or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password has no capital letter");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegisterError("Password has no special character.");
      return;
    }

    // const user = { name, image, email, password };
    // console.log(user);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // if (!user.photoURL) {
        //   user.updateProfile(user, { photoURL: image });
        // }
        // console.log(user);

        updateProfile(user, { displayName: name, photoURL: image });

        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile created",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="min-h-screen  mx-auto">
      <div className="text-center">
        <h1 className="text-5xl py-10 font-bold ">Sign up now!</h1>
      </div>
      <div className="hero ">
        <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="image URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn text-white btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center font-semibold text-red-800">
            {registerError && <p>{registerError}</p>}
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md pb-5">
            <p className="mt-2 text-center text-base max-w">
              Or
              <Link
                to="/login"
                className="ml-1  font-medium text-blue-600 hover:text-blue-500"
              >
                login here!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
