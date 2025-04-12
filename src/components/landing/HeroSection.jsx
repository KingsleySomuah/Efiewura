import React from "react";
import HeroImg from "../../assets/images/blackcouples.jpg";
import { IoCashOutline, IoHomeOutline, IoLocationOutline, IoSearch } from "react-icons/io5";

const HeroSection = () => {
	return (
		<main className="">
			<section
				className="h-screen bg-cover bg-no-repeat bg-scroll bg-top "
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg})`,
				}}
			>
				<div className="flex justify-center items-center h-screen flex-col space-y-1">
					<h1 className="text-5xl font-semibold text-white">
						Renting Made Easy with{" "}
						<span className="bg-green-900 inline-flex w-16 h-16 rounded-full justify-center items-center text-white ">
							E
						</span>
						fiewura
					</h1>
					<p className="text-white text-lg">Find a home, pay rent monthly & Build Credit</p>
				</div>
			</section>
			<form
				action=""
				className="flex justify-around items-center border-1 border-gray-300 shadow-sm shadow-gray-400 bg-white p-5 rounded-md "
			>
				<div className="flex flex-col">
					<label htmlFor="">Location</label>
					<div className="flex gap-4 items-center">
						<input
							type="text"
							placeholder="where do you want to live"
							className="border-none outline-none"
						/>
						<IoLocationOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Property Type</label>
					<div className="flex gap-4 items-center">
						<input
							type="text"
							placeholder="where do you want to live"
							className="border-none outline-none"
						/>
						<IoHomeOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Monthly budget (GHS)</label>
					<div className="flex gap-4 items-center">
						<input
							type="text"
							placeholder="Maximum amount to spend"
							className="border-none outline-none"
						/>
						<IoCashOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<div className="bg-green-900 text-white w-12 h-12 rounded-full flex items-center justify-center">
					<IoSearch size={24} />
				</div>
			</form>
		</main>
	);
};

export default HeroSection;
