import React, { useEffect, useState } from "react";
import { IoFilterOutline, IoSearch, IoToggleOutline } from "react-icons/io5";
import { IoBedOutline, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { apiGetAllListings } from "../../services/crud";

const BrowseHomes = ({ initialFilters = {} }) => {
	const CLOUDINARY_BASE = "https://res.cloudinary.com/dxtgslrxg/image/upload";
	const [listings, setListings] = useState([]);
	const [currentImages, setCurrentImages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeFilters, setActiveFilters] = useState(initialFilters);

	const fetchListings = async () => {
		try {
			const response = await apiGetAllListings();
			setListings(response.data.data);
			// Initialize current images for each listing
			setCurrentImages(new Array(response.data.data.length).fill(0));
		} catch (error) {
			console.error("Error fetching listings:", error);
		}
	};

	useEffect(() => {
		fetchListings();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		setActiveFilters((prev) => ({
			...prev,
			location: searchTerm,
		}));
	};

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
		<section className="">
			<div className="pt-[5%]">
				<form
					onSubmit={handleSearch}
					className="flex justify-between items-center border-b border-gray-200 p-5"
				>
					<div className="flex items-center gap-4  border rounded-md border-gray-300 ">
						<input
							type="text"
							placeholder="Enter an address or city"
							className="focus:outline-none w-[200px]"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
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
						<div className="p-4 space-y-2 text-sm">
							<div className="flex items-center gap-2 text-gray-600">
								<IoLocationOutline />
								<p>{property.location || "Location not specified"}</p>
							</div>
							<div className="flex items-center gap-4 text-gray-600">
								{/* <div className="items-center flex space-x-1">
							  <IoBedOutline />
							  <p>{property.type || "Type not specified"}</p>
							</div> */}
								<div className="flex items-center space-x-2">
									<IoHomeOutline />
									<p>{property.category || "Category not specified"}</p>
								</div>
							</div>
							<div>
								<p className="font-bold text-green-800">&#x00A2;{property.price || "N/A"}/month</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex p-[5%] items-center justify-between">
				<div className="space-y-3">
					<h1 className="text-4xl font-semibold">Not Finding what you are looking for ?</h1>
					<p>
						Let us know your preference and our team wil contact you with options that align your
						request
					</p>
					<button className="bg-[#2e8284] text-white px-5 py-1">Send request</button>
				</div>
				<div>
					<img src={Call} alt="" />
				</div>
			</div>
		</section>
	);
};

export default BrowseHomes;
