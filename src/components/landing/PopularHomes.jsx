import React, { useEffect, useState } from "react";
import { IoArrowForward, IoBedOutline, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router"; // Fixed import
import { apiGetAllListings } from "../../services/crud";
import { BeatLoader } from "react-spinners";

const PopularHomes = ({ activeFilters }) => {
	const CLOUDINARY_BASE = "https://res.cloudinary.com/dxtgslrxg/image/upload";
	const [listings, setListings] = useState([]);
	const [currentImages, setCurrentImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchListings = async () => {
		setLoading(true); // Start loading indicator
		try {
			const response = await apiGetAllListings();
			setListings(response.data.data);
			// Initialize current images for each listing
			setCurrentImages(new Array(response.data.data.length).fill(0));
		} catch (error) {
			console.error("Error fetching listings:", error);
		} finally {
			setLoading(false); // Stop loading indicator regardless of success/error
		}
	};

	useEffect(() => {
		fetchListings();
	}, []);

	const handleNext = (index) => {
		setCurrentImages((prev) => {
			const newCurrentImages = [...prev];
			const listing = listings[index];
			if (listing && listing.pictures) {
				newCurrentImages[index] = (newCurrentImages[index] + 1) % listing.pictures.length;
			}
			return newCurrentImages;
		});
	};

	const handlePrev = (index) => {
		setCurrentImages((prev) => {
			const newCurrentImages = [...prev];
			const listing = listings[index];
			if (listing && listing.pictures) {
				newCurrentImages[index] =
					(newCurrentImages[index] - 1 + listing.pictures.length) % listing.pictures.length;
			}
			return newCurrentImages;
		});
	};

	const filteredProperties = listings.filter((property) => {
		const locationMatch = property.location
			?.toLowerCase()
			.includes(activeFilters?.location?.toLowerCase() || "");

		const typeMatch =
			!activeFilters?.propertytype ||
			property.type?.toLowerCase().includes(activeFilters.propertytype.toLowerCase());

		const priceMatch =
			!activeFilters?.price || property.price <= parseInt(activeFilters.price || Infinity);

		return locationMatch && typeMatch && priceMatch;
	});

	return (
		<main className="p-[5%]">
			<div className="flex items-center">
				<div className="bg-[#2e8284] w-10 h-[3px] mr-4"></div>
				<small className="font-semibold text-base uppercase text-[#2e8284]">Popular</small>
			</div>
			<div className="flex justify-between items-center mt-4 mb-4">
				<p className="text-2xl font-semibold">Our Popular Residences</p>
				<Link to={"/browse-homes"}>
					<div className="flex items-center gap-2 text-green-900">
						<p>Explore More</p>
						<IoArrowForward />
					</div>
				</Link>
			</div>

			{/* Loading State - shown when data is being fetched */}
			{loading && (
				<div className="flex justify-center items-center h-64">
					<BeatLoader color="#1a5c1a" size={20} />
				</div>
			)}

			{/* Empty State - shown when loading is complete but no properties match */}
			{!loading && filteredProperties.length === 0 && (
				<div className="flex justify-center items-center h-64">
					<p className="text-gray-500">
						{listings.length === 0 ? "No properties available" : "No properties match your filters"}
					</p>
				</div>
			)}

			{/* Success State - shown when loading is complete and we have properties to display */}
			{!loading && filteredProperties.length > 0 && (
				<div className="flex items-start flex-wrap gap-6">
					{filteredProperties.map((property, index) => (
						<div
							key={property.id || index}
							className="w-64 border border-gray-200 rounded-lg shadow-md overflow-hidden"
						>
							{/* Image Slider */}
							<div className="relative w-full h-40 overflow-hidden">
								{property.pictures?.[currentImages[index]] ? (
									<img
										src={`${CLOUDINARY_BASE}/${property.pictures[currentImages[index]]}`}
										alt="Property"
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="w-full h-full bg-gray-200 flex items-center justify-center">
										<span className="text-gray-500">No image available</span>
									</div>
								)}
								{/* Prev/Next buttons */}
								<button
									onClick={() => handlePrev(index)}
									className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 text-xs font-bold"
								>
									{"<"}
								</button>
								<button
									onClick={() => handleNext(index)}
									className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 text-xs font-bold"
								>
									{">"}
								</button>
							</div>

							{/* Info Section */}
							<Link to={"/listings/:id"}>
								<div className="p-4 space-y-2 text-sm">
									<div className="flex items-center gap-2 text-gray-600">
										<IoLocationOutline />
										<p>{property.location || "Location not specified"}</p>
									</div>
									<div className="flex items-center gap-4 text-gray-600">
										<div className="flex items-center space-x-2">
											<IoHomeOutline />
											<p>{property.category || "Category not specified"}</p>
										</div>
									</div>
									<div>
										<p className="font-bold text-[#2e8284]">
											&#x00A2;{property.price || "N/A"}/month
										</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			)}
		</main>
	);
};

export default PopularHomes;
