import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const CoursesPage = async () => {

      const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json')
    const photos = await res.json()
    
    
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>Courses</h1>

            <div className='grid grid-cols-4 gap-5'>
                {photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default CoursesPage;