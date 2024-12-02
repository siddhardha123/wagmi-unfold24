import React, { useState } from 'react';
import { getHash, uploadToFirebase } from '../utils/firebase';

const Upload = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Set preview URL
        }
    };

    const handleUpload = async () => {
        if (!image) return alert('Please upload an image.');
        setMessage('Uploading...');
        const hash = await getHash(image);
        const walletAddress = '0xFakeWalletAddressFromMetamask'; // Mock MetaMask call
        await uploadToFirebase({ hash, walletAddress });
        setMessage('Upload successful! 🎉');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Upload and Verify Image
                </h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4"
                />
                {preview && (
                    <div className="mb-4">
                        <img
                            src={preview}
                            alt="Selected Preview"
                            className="w-full h-48 object-cover rounded-md shadow-sm"
                        />
                    </div>
                )}
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    Upload
                </button>
                {message && (
                    <p className="mt-4 text-green-500 font-medium">{message}</p>
                )}
            </div>
        </div>
    );
};

export default Upload;
