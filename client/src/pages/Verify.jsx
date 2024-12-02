import React, { useState } from 'react';
import { getHash, verifyImage } from '../utils/firebase';
import {useStateContext} from "../context/stateContext";

const Verify = () => {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');
    const {address,approve,reject } = useStateContext();

    const handleVerify = async () => {
        if (!image) return alert('Please upload an image.');
        setResult('Verifying...');
        const hash = await getHash(image);
        const verificationResult = await verifyImage(hash, address);
        approve()
        setResult(verificationResult);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Verify Image
                </h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="mb-4"
                />
                <button
                    onClick={handleVerify}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    Verify
                </button>
                {result && (
                    <p className="mt-4 text-green-500 font-medium">{result}</p>
                )}
            </div>
        </div>
    );
};

export default Verify;
