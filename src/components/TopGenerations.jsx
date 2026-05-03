// import React from 'react';
// import PhotoCard from './PhotoCard';

// const TopGenerations = async() => {
//     const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json')
//     const photos = await res.json()
//     const topPhotos = photos.slice(0, 8)
//     console.log(topPhotos);
    
    
//     return (
//         <div>
//             <h2 className="text-2xl font-bold my-5">Top Generations</h2>
//             <div className='grid grid-cols-4 gap-5'>
                
//                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
                
//             </div>
//         </div>
//     );
// };

// export default TopGenerations;


"use client";

import React, { useEffect, useState } from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = () => {
    const [topPhotos, setTopPhotos] = useState([]);

    useEffect(() => {
        fetch('https://assignment-8-next-projects.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setTopPhotos(data.slice(0, 8)))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold my-5">Top Generations</h2>
            <div className='grid grid-cols-4 gap-5'>
                {topPhotos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default TopGenerations;