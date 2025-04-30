import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { apiDeleteListing, apiGetAllListings } from "../../../services/crud";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Link } from "react-router";

const DashHome = () => {
	const CLOUDINARY_BASE = "https://res.cloudinary.com/dxtgslrxg/image/upload";
	const [loading, setLoading] = useState(false);
	const [Listings, setListings] = useState([]);

	const totalListings = Listings.length;
	const fetchListings = async () => {
		setLoading(true); //start loading indicator
		try {
			const response = await apiGetAllListings();
			setListings(response.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchListings();
	}, []);

	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this listing ?")) return;

		try {
			await apiDeleteListing(id);
			setListings((prev) => prev.filter((item) => item.id !== id));
			toast.success("Listed deleted successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to delete listing");
		}
	};

	return (
		<section>
			<div className="grid grid-cols-2 gap-4 p-4 ">
				<div className="shadow-md shadow-zinc-400 p-4 leading-relaxed  bg-[#2e8284] text-white space-y-2">
					<p className="font-bold text-2xl">Total Listing Posted</p>
					{/* <span className="font-semibold">{totalListings}</span> */}
					<p className="font-semi text-lg">You have posted {totalListings} listings</p>
				</div>
				<div className="bg-[#1f4748] shadow-md shadow-zinc-300 p-4 leading-relaxed text-zinc-200 space-y-2">
					<p className="font-bold text-xl">Scheduled Viewing</p>
					<span className="font-semibold"></span>
					<p>You have 1 users for schedule views</p>
				</div>
			</div>

			<div className="overflow-x-auto p-4 bg-white rounded-lg shadow-md text-center">
				<h2 className="text-xl font-semibold mb-5 text-left text-[#2e8284]">Browse Listings</h2>

				{/* loading indicator show */}
				{loading ? (
					<div className="flex justify-center items-center h-32 ">
						<BeatLoader color="#1a5c1a" size={20} />
					</div>
				) : (
					<table className="w-full text-zinc-700 font-semibold border-collapse">
						<thead className="">
							<tr>
								<th className="p-3"></th>
								<th className="p-3">Price</th>
								<th className="p-3">Location</th>
								<th className="p-3">Description</th>
								<th className="p-3">Category</th>
								<th className="p-3">Amenities</th>
								<th className="p-3">Action</th>
							</tr>
						</thead>
						<tbody>
							{Listings.map((listing, index) => {
								return (
									<tr key={listing.id || index} className="border-t border-zinc-300">
										{/* <td className="p-3 text-blue-500 hover:underline cursor-pointer">{order.id}</td> */}
										<td className="p-3 align-middle w-16 h-16">
											{listing.pictures?.[0] ? (
												<img
													src={`${CLOUDINARY_BASE}/${listing.pictures[0]}`}
													alt={listing.name}
													className="w-16 h-16 object-cover rounded"
												/>
											) : (
												<span className="text-xs text-gray-500">No image</span>
											)}
										</td>
										<td className="p-3 text-sm">GHc{listing.price}</td>
										{/* <td className="p-3 text-sm font-sans">{listing.name}</td> */}

										<td className="p-3 text-sm">{listing.location}</td>
										<td className="p-3 text-sm">{listing.description}</td>
										<td className="p-3 text-sm">{listing.category}</td>
										<td className="p-3 text-sm">{listing.amenities}</td>

										<td className="flex items-center justify-center mt-5">
											<Link
												to={`/dashboard/edit/${listing.id}`}
												className="text-gray-600 hover:text-blue-500"
											>
												<HiOutlinePencil size={18} />
											</Link>
											<button className="text-gray-600 hover:text-red-500">
												<IoEyeOutline size={18} />
											</button>
											<button
												className="text-gray-600 hover:text-red-500"
												onClick={() => handleDelete(listing.id)}
											>
												<MdDelete size={18} />
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
			</div>
		</section>
	);
};

export default DashHome;
