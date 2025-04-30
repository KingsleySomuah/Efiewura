import React, { useEffect, useState } from "react";
import { apiGetAllListings } from "../../../services/crud";
import { BeatLoader } from "react-spinners";


const names = [{
	name: 'Kingsley', 
	contact: '0244599398', 
	date: '30/04/2025'
}]

const ScheduledViews = () => {
	const [loading, setLoading] = useState(false);
	const [Listings, setListings] = useState([]);

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
	return (
		<section>
			<div className="grid grid-cols-3 gap-4 p-4 ">
				<div className="shadow-md shadow-zinc-400 p-4 leading-relaxed  bg-[#2e8284] text-white space-y-2">
					<p className="font-bold text-2xl">Confirmed Request</p>
					{/* <span className="font-semibold">{totalListings}</span> */}
					<p className="font-semi text-lg">You have confirmed listings</p>
				</div>
				<div className="bg-[#1f4748] shadow-md shadow-zinc-300 p-4 leading-relaxed text-zinc-200 space-y-2">
					<p className="font-bold text-xl">Pending Request</p>
					{/* <span className="font-semibold">20,000</span> */}
					<p>You have 2 pending request</p>
				</div>

				<div className="bg-red-300 shadow-md shadow-zinc-300 p-4 leading-relaxed text-zinc-200 space-y-2">
					<p className="font-bold text-xl">Rejected Request</p>
					<span className="font-semibold"></span>
					<p>You have rejected  request</p>
				</div>
			</div>

			<div className="overflow-x-auto p-4 bg-white rounded-lg shadow-md text-center">
				<h2 className="text-xl font-semibold mb-5 text-left text-[#2e8284]">
					Schedule Viewing List
				</h2>

				{/* loading indicator show */}
				{loading ? (
					<div className="flex justify-center items-center h-32 ">
						<BeatLoader color="#1a5c1a" size={20} />
					</div>
				) : (
					<table className="w-full text-zinc-700 font-semibold border-collapse">
						<thead className="">
							<tr>
								<th className="p-3">Name</th>
								<th className="p-3">Date</th>
								<th className="p-3">Contact</th>
								<th className="p-3">Action</th>
							</tr>
						</thead>
						<tbody>
							{names.map((name, index) => {
								return (
									<tr key={name.id || index} className="border-t border-zinc-300">
										<td className="p-3 text-sm">{name.name}</td>
										<td className="p-3 text-sm">{name.date}</td>
										<td className="p-3 text-sm">{name.contact}</td>

										<td className="space-x-3">
											<button className="text-white bg-[#2e8284] px-2 rounded-full">confirm</button>
											<button className="text-white bg-red-300 px-2 rounded-full">reject</button>
											<button className="text-white bg-blue-300 px-2 rounded-full">pending</button>
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

export default ScheduledViews;
