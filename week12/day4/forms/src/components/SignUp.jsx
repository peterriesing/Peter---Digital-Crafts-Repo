import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({});

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const authenticateForm = () => {
    // username needs to be at least 6 characters long and lesser than 14 characters\
    if (
      signUpForm?.username?.length <= 6 ||
      signUpForm?.username?.length >= 14
    ) {
      toast(
        "Username needs to be at least 6 characters long and no longer than 14"
      );
    }
    // email needs an @ symbol and only one of them
    if (!signUpForm?.email?.includes("@")) {
      toast("Please enter in a valid email");
    }
    if (signUpForm?.password.length < 6) {
      toast("Your password needs to be at least 6 characters");
    }
    // 1 special character, at least 3 numbers, at least 6 characters
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FontAwesomeIcon icon="fa-solid fa-user" />
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setFormState(e)}
              value={signUpForm.username ? signUpForm.username : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="joe@dc.com"
              onChange={(e) => setFormState(e)}
              value={signUpForm.email ? signUpForm.email : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="firstName"
              name="firstName"
              placeholder="Joe"
              onChange={(e) => setFormState(e)}
              value={signUpForm.firstName ? signUpForm.firstName : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="lastName"
              name="lastName"
              placeholder="Frasier"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastName ? signUpForm.lastName : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              onChange={(e) => setFormState(e)}
              value={signUpForm.password ? signUpForm.password : ""}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={authenticateForm}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
