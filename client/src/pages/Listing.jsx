import React from 'react';
import Card from '../components/Card';

import sampleData from '../assets/sample.json';

const Listing = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 py-6">
        {sampleData.list.map((item) => (
            <Card key={item.id} data={item} />
        ))}
    </div>
);

export default Listing;
