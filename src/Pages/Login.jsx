import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import login from "../assets/img/login.jpg";

import GoogleLogin from "./SocialLogin/GoogleLogin";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      Swal.fire({ title: "Logged In Succesfully!", color: "#1d2939" });
    }
  }, [user, from, navigate]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className=" font-bold w-[300px] h-[10px]  hover:-translate-y-5 ">
            <div className="mx-24  group card w-[400px] h-[300px] shadow-4xl">
              {/* form start */}

              <div
                onSubmit={handleSUbmit}
                className="  mt-10 card flex-shrink-0 w-full max-w-sm shadow-4xl  "
              >
                <form>
                  <div className="h-auto mx-36 card flex-shrink-3 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                      <div className="form-control">
                        {/* <h1>Login</h1> */}
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          // ref={emailRef}
                          required
                          className="input input-bordered"
                        />
                        {/* {errors.email && (
                        <span className="text-red-600">
                          Please fill up this field{" "}
                        </span> */}
                        {/* )} */}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                          className="input input-bordered"
                        />
                        <label className="label">
                          <label className="font-bold"> Forgot password?</label>

                          <label
                            // onClick={handleResetPassword}
                            className=" mx-2 font-bold text-[#1d2939] hover:link"
                          >
                            Reset now
                          </label>
                        </label>
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className=" mx-12 btn btn-outline outline-[#1d2939]   text-white h-[50px] w-2/3 bg-gradient-to-r from-cyan-900 to-teal-300 "
                          type="submit"
                          value="Login"
                        />

                        {/* <p>OR</p> */}

                        <div className="mx-auto h-[50px]  w-2/3 mt-6 mb-3">
                          <GoogleLogin />
                        </div>

                        <h1 className="w-full text-[#1d2939] font-bold mt-3 text-center">
                          <Link
                            className="w-full hover:link  text-[#1d2939]  text-center"
                            to="/signin"
                          >
                            Please click here to create a new account
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-10 hero min-h-screen ">
          <div className="mt-44 mb-10  rounded-lg hero-content ">
            <div className="">
              <div className="border bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  font-seif  font-bold text-center text-white rounded-md fade-in-word animate-pulse ">
                <p className="text-3xl"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
