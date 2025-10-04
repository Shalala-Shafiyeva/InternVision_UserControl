import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function CreateModal({ handleOpenModal }) {
  const [dropdown, setDropdown] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const validateForm = () => {
    let errors = {};
    if (!values.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (values.fullName.length < 3) {
      errors.fullName = "Fullname must be at least 3 characters";
    }
    if (!values.age) {
      errors.age = "Age is required";
    }
    if (typeof values.age !== "number") {
      errors.age = "Age must be a number";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = useMutation({
    mutationFn: async (e, data) => {
      e.preventDefault();

      //   setErrors({
      //     fullName: "",
      //     age: "",
      //     phone: "",
      //     email: "",
      //     gender: "",
      //   });

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[90%] sm:w-[400px] p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleOpenModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-2xl leading-none"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
          Add New User
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => handleSubmit.mutate(e, values)}
        >
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Enter full name"
              value={values.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Enter age"
              value={values.age}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="flex items-center relative">
              <button
                id="dropdown-phone-button"
                data-dropdown-toggle="dropdown-phone"
                className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
                onClick={handleDropdown}
              >
                <svg
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 me-2"
                  viewBox="0 0 20 15"
                >
                  <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  <mask
                    id="a"
                    style={{ maskType: "luminance" }}
                    width="20"
                    height="15"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#D02F44"
                      fillRule="evenodd"
                      d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                      clipRule="evenodd"
                    />
                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                    <g filter="url(#filter0_d_343_121520)">
                      <path
                        fill="url(#paint0_linear_343_121520)"
                        fillRule="evenodd"
                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                        clipRule="evenodd"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_343_121520"
                      x1=".933"
                      x2=".933"
                      y1="1.433"
                      y2="6.1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#F0F0F0" />
                    </linearGradient>
                    <filter
                      id="filter0_d_343_121520"
                      width="6.533"
                      height="5.667"
                      x=".933"
                      y="1.433"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="1" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_343_121520"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_343_121520"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                +1{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdown && (
                <div
                  id="dropdown-phone"
                  className="z-10 absolute top-12 left-0 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm w-52 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-phone-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        United States (+1)
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        United Kingdom (+44)
                      </button>
                    </li>
                  </ul>
                </div>
              )}

              <label
                htmlFor="phone-input"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Phone number:
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="phone-input"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
            {/* <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
              placeholder="+994 XX XXX XX XX"
              value={values.phone}
              onChange={handleInputChange}
            /> */}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-100"
              placeholder="example@mail.com"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Gender
            </span>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-blue-500"
                  defaultChecked
                  onChange={handleInputChange}
                />{" "}
                Male
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-pink-500"
                  onChange={handleInputChange}
                />{" "}
                Female
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleOpenModal}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;
