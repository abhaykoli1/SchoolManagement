import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerSchool,
  clearSchoolStatus,
} from "../../AppStore/Slices/schoolSlice";
import { unwrapResult } from "@reduxjs/toolkit"; // optional, but not needed with .unwrap()
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";
import { FaCircleNotch } from "react-icons/fa";

const SchoolRegistration = () => {
  const dispatch = useDispatch();

  const { loading, success, error, message } = useSelector(
    (state) => state.school
  );

  const [formData, setFormData] = useState({
    school_name: "",
    email: "",
    phone: "",
    principal_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number_of_students: 0,
    // school_name: "dbn",
    // email: "dbns5@gmail.com",
    // phone: "123456789111",
    // principal_name: "NNC",
    // address: "jaipur",
    // city: "jaipur",
    // state: "rajasthan",
    // country: "+91",
    // pincode: "302003",
    number_of_students: 200,
  });

  const [image, setImage] = useState(null);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        dispatch(clearSchoolStatus());
      }, 4000);
    }
  }, [success, error, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerSchool({ formData, image }));
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-cente text-gray-900">Sign up</h2>
      {/* <p className="text-gray-500 mt-2 ">
        Sign up for free to access to any of our products
      </p> */}

      <p className="text-sm text-cente text-gray-600 mt-2  mb-8">
        Already have an account ?{" "}
        <a href="/login" className="underline">
          Log in
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "School Name", name: "school_name" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Principal Name", name: "principal_name" },
            { label: "Address", name: "address" },
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Country", name: "country" },
            { label: "Pincode", name: "pincode" },
            {
              label: "Number of Students",
              name: "number_of_students",
              type: "number",
            },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 !rounded-md !border !border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
            className="text-sm !rounded-md !border !border-gray-300"
          />
        </div>

        <div className="text-sm text-gray-500">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>

        <div className="space-y-4 mt-4">
          <div className="!flex !items-center space-x-3 cursor-pointer">
            <div>
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                required
                className="!w-5 !h-5 accent-black mt-1"
              />
            </div>
            <span className="!text-[13px] text-gray-700 font-medium">
              Agree to our{" "}
              <a href="#" className="underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>

        {/* Fake reCAPTCHA */}
        <div className="border border-[#d1d5db] rounded-md py-4 px-6 flex items-center justify-between">
          <dic className="!flex !items-center space-x-2">
            <div>
              <input
                type="checkbox"
                checked
                readOnly
                className="w-4 accent-black"
              />
            </div>
            <span className="text-sm text-gray-700 font-medium">
              I’m not a robot
            </span>
          </dic>
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="reCAPTCHA"
            className="w-8 h-8"
          />
        </div>

        <button
          type="submit"
          disabled={!agreed || loading}
          className={`w-full  ${
            agreed
              ? "bg-gray-900 hover:bg-black cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          } text-white font-semibold py-3 rounded-full transition-all`}
        >
          {loading ? (
            <>
              <FaCircleNotch className="animate-spin h-4 w-4" />
              Saving...
            </>
          ) : (
            "Signup"
          )}
        </button>

        {success && (
          <p className="text-center text-sm mt-4 text-green-600">{message}</p>
        )}
        {error && (
          <p className="text-center text-sm mt-4 text-red-600">{error}</p>
        )}
      </form>
    </section>
  );
};

export default SchoolRegistration;
