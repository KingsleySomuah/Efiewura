import React from "react";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<section className="flex justify-between items-center px-4 py-3 shadow-md shadow-gray-500 fixed left-0 right-0 bg-white">
			<div>
				<Link to={"/"}>
					<p className="font-semibold ">
						<span className="bg-green-900 inline-flex w-8 h-8 rounded-full justify-center items-center text-white  text-base ">
							E
						</span>
						fiewura
					</p>
				</Link>
			</div>
			<ul className="flex items-center gap-10">
				<Link to={"/browse-homes"}>
					<li>Browse Homes</li>
				</Link>

				<Link to={""}>
					<li>How it Works</li>
				</Link>
				<Link to={'/rent-calculator'}>
					<li>Rent Calculator</li>
				</Link>
			</ul>
			<div className="flex gap-10 items-center">
				<Link to={"/login"}>
					<button className="cursor-pointer">Login</button>
				</Link>
				<button>Signup</button>
			</div>
		</section>
	);
};

export default Navbar;
