import React from "react";
import { IoFilterOutline, IoSearch, IoToggleOutline } from "react-icons/io5";
import { IoBedOutline, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import Call from "../../assets/images/call.png";

const BrowseHomes = () => {
	const properties = [
		{
			availableIn: 264,
			location: "School Junction Plaza, Ashale Bo...",
			unit: "Entire House",
			type: "Single room",
			price: "¢200/month",
		},
		{
			availableIn: 283,
			location: "PWWM+JCR Tema, Greater Accra",
			unit: "Entire House",
			type: "1 Bedroom ",
			price: "¢390/month",
		},
		{
			availableIn: 218,
			location: "PRFJ+6QW Adenta Municipality...",
			unit: "Apartment",
			type: "Single room",
			price: "¢420/month",
		},
		{
			availableIn: 350,
			location: "PRFJ+6QW Adenta Municipality...",
			unit: "Storey",
			type: "3 Bedrooms",
			price: "¢2500/month",
		},
	];
	return (
		<section className="">
			<div className="pt-[5%]">
				<form action="" className="flex justify-between items-center border-b border-gray-200 p-5">
					<div className="flex items-center gap-4  border rounded-md border-gray-300 ">
						<input
							type="text"
							placeholder="Enter an address or city"
							className="focus:outline-none w-[200px]"
						/>
						<button className="bg-green-900 text-white p-4 rounded-tr-lg rounded-br-lg">
							<IoSearch />
						</button>
					</div>

					<div className="flex items-center gap-10 border rounded-md border-gray-300 p-2">
						<p className="text-zinc-600">Available Properties</p>
						<div className="border border-gray-500 mr-5  h-[20px]"></div>
						<input
							type="text"
							placeholder="Show only available properties "
							disabled
							className="w-[250px] focus:outline-none caret-transparent"
						/>
						<IoToggleOutline size={40} className="text-gray-300" />
					</div>

					<div className="border border-gray-300 flex items-center space-x-5 p-3">
						<p>Filter Search</p>
						<IoFilterOutline />
					</div>
				</form>
			</div>

			<div className="flex items-center space-x-5">
				{properties.map((property) => {
					return (
						<div
							key={property.id}
							className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4 space-y-3 text-sm"
						>
							<div>{property.image}</div>
							<div className="flex items-center gap-2">
								<IoLocationOutline />
								<p>{property.location}</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex items-center space-x-2">
									<IoBedOutline />
									<p>{property.type}</p>
								</div>

								<div className="flex items-center space-x-2">
									<IoHomeOutline />
									<p>{property.unit}</p>
								</div>
							</div>
							<div>
								<p className="font-bold">{property.price}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="flex p-[5%] items-center justify-between">
				<div className="space-y-3">
					<h1 className="text-4xl font-semibold">Not Finding what you are looking for ?</h1>
					<p>
						Let us know your preference and our team wil contact you with options that align your
						request
					</p>
					<button className="bg-green-900 text-white px-5 py-1">Send request</button>
				</div>
				<div>
					<img src={Call} alt="" />
				</div>
			</div>
		</section>
	);
};

export default BrowseHomes;
