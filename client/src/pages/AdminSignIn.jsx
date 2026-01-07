import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/Orbit.png";
import { useState } from "react";
import ButtonLoadingSpinner from "../components/loader/ButtonLoadingSpinner";
import { IoIosArrowRoundBack } from "react-icons/io";
import { signInAction } from "../redux/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const signInError = useSelector((state) => state.admin?.signInError);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setSigningIn(true);
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    dispatch(signInAction(data)).then(() => {
      setSigningIn(false);
      navigate("/admin");
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Logo - Outside Card */}
      <div className="mb-8">
        <img className="h-20 w-auto sm:h-24" src={logo} alt="Orbit Logo" />
      </div>

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-center text-gray-500 dark:text-gray-100 mb-2">Sign in as Admin</h2>
          <form>
            <div className="w-full mt-4">
              <input
                onChange={handleUsernameChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-primary-300 dark:focus:ring-primary-600 transition-colors"
                type="text"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="w-full mt-4">
              <input
                onChange={handlePasswordChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-primary-300 dark:focus:ring-primary-600 transition-colors"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            {signInError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mt-4 flex items-center justify-between">
                <span className="block sm:inline">{signInError}</span>
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <IoIosArrowRoundBack className="inline-block w-5 h-5 mr-1" />
                Back to home
              </Link>
              <button
                disabled={signingIn}
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-xl focus:outline-none focus:ring focus:ring-primary-300 dark:focus:ring-primary-500 focus:ring-opacity-50 disabled:opacity-50"
              >
                {signingIn ? (
                  <ButtonLoadingSpinner loadingText={"Signing in..."} />
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
