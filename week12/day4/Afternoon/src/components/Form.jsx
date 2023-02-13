import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Link } from "react-router-dom";

const Form = () => {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    ageGroup: "",
    veteran: false,
    ethnicity: "",
  });

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";
  const supabaseKey = import.meta.env.VITE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const sumbitData = async (form) => {
    console.log(form);
    const { error } = await supabase.from("reactUserData2").insert(form);
    console.log(error);
  };

  const authenticateForm = () => {
    if (signUpForm?.firstName === "") {
      toast("You must enter a first name");
      return;
    }
    if (signUpForm?.lastName === "") {
      toast("You must enter a last name");
      return;
    }
    if (signUpForm?.address === "") {
      toast("You must enter an address");
      return;
    }
    if (signUpForm?.city === "") {
      toast("You must enter a city");
      return;
    }
    if (signUpForm?.state === "") {
      toast("You must choose a state");
      return;
    }
    if (signUpForm?.veteran === "") {
      toast("You must enter a veteran status");
      return;
    }
    if (signUpForm?.ethnicity === "") {
      toast("You must choose an ethnicity");
      return;
    }
    sumbitData(signUpForm);
  };

  return (
    <div className="grid place-items-center py-20 bg-rose-400 text-white">
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
      <div className="w-fit">
        <form className="bg-gradient-to-r from-indigo-900 to-indigo-800 shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-8 text-indigo-200">Feed me your Soul</h1>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="username"
              type="text"
              placeholder="bobloblaw"
              name="username"
              onChange={(e) => setFormState(e)}
              value={signUpForm.username}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="firstName"
              type="firstName"
              name="firstName"
              placeholder="Bob"
              onChange={(e) => setFormState(e)}
              value={signUpForm.firstName}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="lastName"
              type="lastName"
              name="lastName"
              placeholder="Loblaw"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastName}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="address"
            >
              Street Address
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="address"
              type="text"
              name="address"
              placeholder="123 Main St"
              onChange={(e) => setFormState(e)}
              value={signUpForm.address}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="city"
              type="text"
              name="city"
              placeholder="Poughkeepsie"
              onChange={(e) => setFormState(e)}
              value={signUpForm.city}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="state"
            >
              State
            </label>
            <select
              className="bg-inherit border-b-2 border-indigo-400 w-96 h-6 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline "
              id="state"
              type="select"
              name="state"
              onChange={(e) => setFormState(e)}
              value={signUpForm.state}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="zip"
            >
              Zip Code
            </label>
            <input
              className="bg-inherit border-b-2 border-indigo-400 w-96 py-2 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-indigo-500"
              id="zip"
              type="text"
              name="zip"
              placeholder="10108"
              onChange={(e) => setFormState(e)}
              value={signUpForm.zip}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="ageGroup"
            >
              Age Group
            </label>
            <select
              className="bg-inherit border-b-2 border-indigo-400 w-96 h-6 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ageGroup"
              type="text"
              name="ageGroup"
              onChange={(e) => setFormState(e)}
              value={signUpForm.ageGroup}
            >
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="65-74">65-74</option>
              <option value="75-84">75-84</option>
              <option value="85-94">85-94</option>
              <option value="95+">95+</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="radio"
            >
              Veteran Status
            </label>
            <label onChange={(e) => setFormState(e)} value={signUpForm.veteran}>
              <input type="radio" name="veteran" value={true} /> yes
            </label>
            <br></br>
            <label onChange={(e) => setFormState(e)} value={signUpForm.veteran}>
              <input type="radio" name="veteran" value={false} /> no
            </label>
          </div>
          <div className="mb-2">
            <label
              className="block text-indigo-400 text-sm font-regular mb-2"
              htmlFor="ethnicity"
            >
              Ethnicity
            </label>
            <select
              className="bg-inherit border-b-2 border-indigo-400 w-96 h-6 px-3 text-indigo-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ethnicity"
              name="ethnicity"
              onChange={(e) => setFormState(e)}
              value={signUpForm.ethnicity}
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="asian">Asian</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex items-center justify-around">
            <button
              className="bg-rose-400 hover:bg-rose-800 text-white text-sm font-regular py-1 px-10 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={authenticateForm}
            >
              SUBMIT
            </button>
            <Link to="/contact">
              <button
                className="bg-rose-400 hover:bg-rose-800 text-white text-sm font-regular py-1 px-10 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                CONTACT US
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
