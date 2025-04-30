import React, { useState } from "react";
import PagesLayout from "../../layouts/PagesLayout";
import Sign2 from "../../assets/images/signup.png";
import { apiSignup } from "../../services/authentication";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true); //start loading
		const formData = new FormData(event.target);

		try {
			const response = await apiSignup(formData);
			console.log(response);

			// save token and role
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("role", response.data.role);

			navigate("/login");

			toast.success("Account created successfully");

			if (response.data.role === "tenant") {
				navigate("/");
			} else if (response.data.role === "landlord") {
				navigate("/dashboard");
			}
		} catch (error) {
			console.log(error);
			// show toast error
			toast.error("Sign Up Failed. Please Try Again");
		} finally {
			setLoading(false);
		}
	};

	return (
		<PagesLayout>
			<section className="flex h-screen bg-gray-100 relative">
				<div className="w-1/2 flex flex-col justify-center p-12 bg-[#2e8284] ">
					<h1 className="text-4xl font-bold text-white mb-4">Welcome to Efiewura ! </h1>
					<h1 className="text-2xl font-semibold text-white">
						You are just a click away to your new home
					</h1>
					{/* <p>Sign up now</p> */}
				</div>
				<div className="w-1/2 ml-auto overflow-y-auto h-full pt-5">
					<form onSubmit={handleSubmit} className=" flex flex-col justify-center p-12 bg-white ">
						<div className="mb-5">
							<h1 className="text-4xl font-semibold text-[#2e8284]">Create Account</h1>
							<p className="text-lg text-gray-500">Sign up to continue your journey with us</p>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="firstName" className="text-lg font-medium text-gray-700 mb-1">
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="Enter your First Name"
								className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-200"
							/>
						</div>

						<div className="flex flex-col mb-4">
							<label htmlFor="lastName" className="text-lg font-medium text-gray-700 mb-1">
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Enter your Last Name"
								className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-200"
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="email" className="text-lg font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="joedoe@gmal.com"
								className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-200"
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="role" className="text-lg font-medium text-gray-700 mb-1">
								Role
							</label>
							<select
								name="role"
								id="role"
								className="border border-gray-300 mb-2 focus:outline-none focus:ring-gray-100 transition duration-200 px-4 py-2 rounded-md focus:ring-2"
							>
								<option value="tenant">Tenant</option>
								<option value="landlord">LandLord</option>
							</select>
						</div>

						<div className="flex flex-col ">
							<label htmlFor="password" className="text-lg font-medium text-gray-700 mb-1">
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
						<div className="flex flex-col ">
							<label htmlFor="confirmPassword" className="text-lg font-medium text-gray-700 mb-1">
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								className="border border-gray-300 mb-2 focus:outline-none focus:ring-gray-100 transition duration-200 px-4 py-2 rounded-md focus:ring-2"
								placeholder="Enter your password"
							/>
						</div>
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
							<span>{loading ? "Creating Account ..." : "Create Account"}</span>
						</button>
					</form>
				</div>
			</section>
		</PagesLayout>
	);
};

export default SignUp;
