import React from "react";
import HeroImg from "../../assets/images/blackcouples.jpg";
import { IoCashOutline, IoHomeOutline, IoLocationOutline, IoSearch } from "react-icons/io5";

const HeroSection = ({ searchInput, setSearchInput, onSearch }) => {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSearchInput({ ...searchInput, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSearch();
	};
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
						<span className="bg-[#2e8284] inline-flex w-16 h-16 rounded-full justify-center items-center text-white ">
							E
						</span>
						fiewura
					</h1>
					<p className="text-white text-lg">Find a home, pay rent monthly & Build Credit</p>
				</div>
			</section>
			<form
				onSubmit={handleSubmit}
				action=""
				className="flex justify-between items-center border-1 border-gray-300 shadow-sm shadow-gray-400 bg-white p-5 rounded-md "
			>
				<div className="flex flex-col space-y-3">
					<label htmlFor="" className="text-gray-600 px-4">
						Location
					</label>
					<div className="flex gap-4 items-center border-1 border-gray-200 p-2 rounded-full">
						<input
							name="location"
							type="text"
							placeholder="where do you want to live"
							className="border-none outline-none w-[230px]"
							value={searchInput.location}
							onChange={handleInputChange}
						/>
						<IoLocationOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<div className="flex flex-col space-y-3">
					<label htmlFor="" className="text-gray-600 px-4">
						Property Type
					</label>
					<div className="flex gap-4 items-center border-1 border-gray-200 p-2 rounded-full">
						<select
							name="propertytype"
							id=""
							className=" outline-none w-[230px] text-gray-400"
							value={searchInput.propertytype}
							onChange={handleInputChange}
						>
							<option value="single room">Single room</option>
							<option value="chamber and hall">Chamber and hall</option>
							<option value="1 bedroom">1 Bedroom</option>
							<option value="studio">Studio</option>
						</select>

						<IoHomeOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<div className="flex flex-col space-y-3">
					<label htmlFor="" className="text-gray-600 px-4">
						Monthly budget (GHS)
					</label>
					<div className="flex gap-4 items-center border-1 border-gray-200 p-2 rounded-full">
						<input
							name="price"
							type="number"
							placeholder="Maximum amount to spend"
							className="border-none outline-none w-[230px]"
							value={searchInput.price}
							onChange={handleInputChange}
						/>
						<IoCashOutline size={20} className="text-gray-400" />
					</div>
				</div>
				<button
					type="submit"
					className="bg-[#2e8284] text-white w-12 h-12 rounded-full flex items-center justify-center"
				>
					<IoSearch size={24} />
				</button>
			</form>
		</main>
	);
};

export default HeroSection;
