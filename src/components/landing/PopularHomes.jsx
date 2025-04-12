import React from "react";
import { IoArrowForward, IoBedOutline, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const PopularHomes = () => {
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
		<main className="p-[5%]">
			<div className="flex items-center">
				<div className="bg-green-900 w-10 h-[3px] mr-4"></div>
				<small className="font-semibold text-base uppercase text-green-900">Popular</small>
			</div>
			<div className="flex justify-between items-center mt-4 mb-4">
				<p className="text-2xl font-semibold">Our Popular Residences</p>
				<Link to={'/browse-homes'}>
					<div className="flex items-center gap-2 text-green-900">
						<p>Explore More</p>
						<IoArrowForward />
					</div>
				</Link>
			</div>
			{/* Card Display */}
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
		</main>
	);
};

export default PopularHomes;
