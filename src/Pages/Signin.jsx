import signin from "../assets/img/sss3.jpg";
import { useState } from "react";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Signin = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    // const name = form.name.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password);
      if (user) {
        navigate(from);
      }
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${signin})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div>
          <div className=" font-bold w-[300px] h-[10px]  hover:-translate-y-5 ">
            <div className="mx-24  group card w-[400px] h-[300px] shadow-4xl"></div>
          </div>
        </div> */}

        <div className="-mx-96 hero min-h-screen ">
          <div className=" mt-10 mb-10  rounded-lg hero-content ">
            <div className="">
              {/* form start */}
              <form onSubmit={handleSUbmit} className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Register now!</h1> */}
                    <p className="py-6"></p>
                  </div>
                  <div className=" mx-36 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      {/* <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="name"
                          className="input input-bordered"
                          name="name"
                          required
                        />
                      </div> */}

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          name="email"
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
                          className="input input-bordered"
                          name="password"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="confirm password"
                          className="input input-bordered"
                          name="confirm_password"
                          required
                        />
                      </div>
                      {!passMatch && (
                        <div className="my-2">
                          <p className="text-red-500">
                            Passwords do not match!
                          </p>
                        </div>
                      )}
                      <div className="form-control mt-6">
                        <input
                          className="btn bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white"
                          type="submit"
                          value="Register"
                        />
                      </div>
                      <div className="mt-6 ">
                        <GoogleLogin />
                      </div>
                      <div className="mt-6">
                        <p>
                          Already have an account?{" "}
                          <Link
                            to="/login"
                            className="text-cyan-900 text-lg font-serif font-bold"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
