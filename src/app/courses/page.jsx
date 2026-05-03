import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const CoursesPage = async ({searchParams}) => {
    const {category} = await searchParams;
    
    console.log(category);

      const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json')
    const photos = await res.json()
    
  
   const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase()) : photos






    
    
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>Courses</h1>

            <Category></Category>

            <div className='grid grid-cols-4 gap-5'>
                {filteredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default CoursesPage;




