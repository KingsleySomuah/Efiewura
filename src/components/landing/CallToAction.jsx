import React from "react";
import testimage from "../../assets/images/testimage.png";

const CallToAction = () => {
    const testiCards = [
        {
            image: testimage,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus deserunt recusandaefugit est corrupti debitis rem esse ex reprehenderit repudiandae.',
            name: 'Richard Asante',
            status: 'Tenant'
        },
        {
            image: testimage,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus deserunt recusandaefugit est corrupti debitis rem esse ex reprehenderit repudiandae. ',
            name: 'Kingsley Teye',
            status: 'Tenant'
        },
        {
            image: testimage,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus deserunt recusandaefugit est corrupti debitis rem esse ex reprehenderit repudiandae.',
            name: 'Bless Martin',
            status: 'Landlord'
        }

    ]
	return (
		<>
			<div className="bg-zinc-100 p-[5%] flex flex-col items-center justify-center space-y-10">
				<p className="text-5xl font-semibold text-center ">Lets Find a Home That Perfect For You</p>
				<button className="bg-green-900 px-10 py-2 text-white">SIGN UP</button>
			</div>
			{/* Testimonials */}
			<div className="p-[5%]">
				<div>
					<div className="flex items-center">
						<div className="w-7 h-[3px] bg-green-900 mr-5"></div>
						<small className="font-semibold text-base uppercase text-green-900">Testimonials</small>
					</div>
					<p className="font-semibold text-2xl">What customers say about us</p>
				</div>
				<div className="space-y-3 grid grid-cols-3 mt-5 gap-5">
					{testiCards.map((Card, index) => {
                        return(
                            <div key={index} className="border border-gray-200 rounded-lg p-5 space-y-2 ">
                                <div>
                                    <img src={Card.image} alt=""  className="w-20 h-20 rounded-full"/>
                                </div>
                                <p className="leading-loose text-sm text-zinc-700 mt-5">{Card.text}</p>
                                <p className="text-zinc-700">{Card.name}</p>
                                <p className="text-zinc-700">{Card.status}</p>
                            </div>
                        )
                    })}
				</div>
			</div>
		</>
	);
};

export default CallToAction;
