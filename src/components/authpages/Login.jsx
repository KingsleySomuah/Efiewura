import React, { useState } from "react";
import PagesLayout from "../../layouts/PagesLayout";
import Img from "../../assets/images/img1.png";
import { apiLogin } from "../../services/authentication";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	// handle submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true); //start loading
		const formData = new FormData(event.target);

		try {
			const response = await apiLogin(formData);
			console.log(response);

			// save the token and role
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("role", response.data.user.role);

			// show toast success
			toast.success("Login Successful");

			// Redirection
			if (response.data.user.role === "tenant") {
				navigate("/");
			} else if (response.data.user.role === "landlord") {
				navigate("/dashboard");
			}
		} catch (error) {
			console.error(error);
			// show toast error
			toast.error("Login Failed. Please Check your credentials");
		} finally {
			setLoading(false); //stop loading
		}
	};
	return (
		<PagesLayout>
			<section className="flex h-screen bg-gray-100">
				<form onSubmit={handleSubmit} className=" w-1/2 flex flex-col justify-center p-12 bg-white">
					<div className="mb-5">
						<h1 className="text-4xl font-bold text-[#2e8284]">Welcome Back !</h1>
						<p className="text-lg text-gray-500">Sign in to continue your journey with us</p>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="email" className="text-lg font-medium text-gray-700 mb-1">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-200"
						/>
					</div>

					<div className="flex flex-col ">
						<label htmlFor="" className="text-lg font-medium text-gray-700 mb-1">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="border border-gray-300 mb-2 focus:outline-none focus:ring-gray-100 transition duration-200 px-4 py-2 rounded-md focus:ring-2"
							placeholder="Enter your password"
						/>
					</div>
					<p className="text-md text-green-900 mb-4 hover:underline cursor-pointer">
						Forgot Password?
					</p>
					<button
						type="submit"
						disabled={loading}
						className={`flex items-center justify-center gap-2 px-10 py-2 text-white rounded transition duration-300 ${
							loading
								? "bg-[#2e8284] opacity-60 cursor-not-allowed"
								: "bg-[#2e8284] hover:bg-[#2e8384d3]"
						}`}
					>
						{loading && (
							<svg
								className="animate-spin h-5 w-5 text-white" // 🟢 Added animate-spin + sizing
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24" // 🟢 Ensures proper sizing and alignment
							>
								<circle
									className="text-gray-100" // 🟢 Backdrop ring
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
									fill="none"
								/>
								<path
									className="text-white" // 🟢 Spinner arc
									fill="currentColor"
									d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" // 🟢 This arc spins around the gray circle
								/>
							</svg>
						)}
						<span>{loading ? "Logging In" : "Login"}</span>
					</button>
				</form>
				<div className="w-1/2 flex flex-col justify-center p-12 bg-[#2e8284]">
					<h2 className="text-3xl font-bold mb-4 text-white">Hello, Friend</h2>
					<p className="text-white mb-4">
						Enter your personal details and start your journey with us
					</p>

					<Link to={"/sign-up"}>
						<button className="w-1/2 border-2 border-gray-300 text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#2e8284]">
							SiGN UP
						</button>
					</Link>
				</div>
			</section>
		</PagesLayout>
	);
};

export default Login;
