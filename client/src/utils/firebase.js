export const getHash = async (image) => {
    const arrayBuffer = await image.arrayBuffer();
    const hash = crypto.subtle.digest('SHA-256', arrayBuffer);
    return hash.toString();
};

export const uploadToFirebase = async ({ hash, walletAddress }) => {
    // Mock Firebase API call
    console.log('Uploaded to Firebase:', { hash, walletAddress });
};

export const verifyImage = async (hash, walletAddress) => {
    // Mock verification logic
    if (walletAddress === '0x13E0308bda6E015F3e63E914c1A8b5432466B409') {
        return 'You are the owner of the image.';
    }
    if (hash === 'mockHashFromFirebase') {
        return 'Verified image, but not the owner.';
    }
    return 'Image not verified.';
};
