import React from 'react';

const Card = ({ data }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
            src={data.image}
            alt="Card visual"
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <p className="text-gray-800 font-semibold truncate">
                Wallet Address:
            </p>
            <p className="text-gray-600 text-sm truncate">
                {data.walletAddress}
            </p>
        </div>
    </div>
);

export default Card;
