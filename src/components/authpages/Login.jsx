import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import Img from "../../assets/images/image.png";
const Login = () => {
	return (
		<PagesLayout>
			<section className="flex ">
				<form action="" className=" w-[60%] p-[10%]">
					<div className="mb-5">
						<h1 className="text-4xl font-semibold">Welcome Back !</h1>
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
					<p className="text-md text-green-900 mb-4">Forgot Password?</p>
					<button type="submit" className="bg-green-900 text-white px-10 py-2">
						Sign in
					</button>
				</form>
				<div className="flex items-center justify-center">
					<img src={Img} alt="" />
				</div>
			</section>
		</PagesLayout>
	);
};

export default Login;
