import React, { useEffect, useState } from "react";
import { apiGetSingleListing, apiUpdateListing } from "../../../services/crud";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	const [formData, setFormData] = useState({
		name: "",
		category: "",
		location: "",
		price: "",
		amenities: "",
		description: "",
	});

	useEffect(() => {
		const fetchListing = async () => {
			try {
				const response = await apiGetSingleListing(id);
				// setFormData(response.data);
				console.log(response)
			} catch (error) {
				console.error(error);
				toast.error("Failed to load listing data");
			}
		};
		fetchListing();
	}, [id]);

	const handleUpdate = async (event) => {
		event.preventDefault();

		setLoading(true); //start loading

		try {
			const response = await apiUpdateListing(id, formData);
			console.log(response);

			toast.success("Listing updated successfully");
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
			toast.error("Failed to Update Listing. Please try again");
		} finally {
			setLoading(false); //stop loading
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<section>
			<div className="p-5 space-y-2 border-b border-gray-300">
				<h1 className="font-semibold text-3xl text-[#2e8284] uppercase">Property Description</h1>
				<p>Describe your home so potential tenants know what they are getting</p>
			</div>

			{/* form */}
			<form action="" className="p-5" onSubmit={handleUpdate}>
				<div className="flex items-center gap-10">
					<div className="space-y-3 w-3/5">
						<label htmlFor="" className="text-xl font-semibold text-gray-700 block ">
							Name of Property
						</label>
						<input
							name="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							className=" border border-gray-300 focus:outline-none w-full p-2 rounded-md"
						/>
					</div>
					<div className="w-2/5 space-y-3">
						<label htmlFor="" className="text-xl font-semibold text-gray-700 block">
							Property Type
						</label>
						<select
							value={formData.category}
							onChange={handleChange}
							name="category"
							id=""
							className=" border border-gray-300 focus:outline-none w-full p-2 rounded-md"
						>
							<option value="1 Bedroom">1 Bedroom</option>
							<option value="2 Bedroom">2 Bedroom</option>
							<option value="Single room self-contain">Single Room Self contain</option>
							<option value="chamber and hall">Chamber and Hall</option>
						</select>
					</div>
				</div>

				<div className="flex gap-10 items-center mt-4">
					<div className="space-y-3 w-3/5">
						<label htmlFor="" className="block text-xl font-semibold text-gray-600">
							Location
						</label>
						<input
							value={formData.location}
							onChange={handleChange}
							name="location"
							type="text"
							className="border border-gray-300 focus:outline-none w-full p-2 rounded-md"
						/>
					</div>
					<div className="space-y-3 w-2/5">
						<label htmlFor="" className="block text-xl font-semibold text-gray-600">
							Price per month
						</label>
						<input
							value={formData.price}
							onChange={handleChange}
							name="price"
							type="number"
							className="border border-gray-300 focus:outline-none w-full p-2 rounded-md"
							placeholder="GHS 200.00"
						/>
					</div>
					<div className="space-y-3 w-2/5">
						<label htmlFor="" className="block text-xl font-semibold text-gray-600">
							Amenities
						</label>
						<input
							value={formData.amenities}
							onChange={handleChange}
							name="amenities"
							type="text"
							className="border border-gray-300 focus:outline-none w-full p-2 rounded-md"
							placeholder="e.g kitchen, bathroom, balcony etc"
						/>
					</div>
				</div>
				<div className="mt-4">
					<label htmlFor="photo upload" className="block text-xl font-semibold text-gray-600">
						Upload an image
					</label>
					<input
						name="pictures"
						type="file"
						className="mt-2 w-full p-3 border-dashed border border-gray-300 focus:outline-none rounded-lg h-30vh"
						multiple
					/>

					<div className="mt-4">
						<label htmlFor="" className="block text-xl font-semibold text-gray-600">
							Add Description
						</label>
						<textarea
							value={formData.description}
							onChange={handleChange}
							type="text"
							name="description"
							id=""
							className="mt-2 w-full p-3  border border-gray-300 focus:outline-none rounded-lg h-30vh"
						></textarea>
					</div>
				</div>
				<div className="flex justify-center items-center mt-5">
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
						<span>{loading ? "Updating Listing" : "Update Listing"}</span>
					</button>
				</div>
			</form>
		</section>
	);
};

export default Update;
