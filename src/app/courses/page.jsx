// import Category from '@/components/Category';
// import PhotoCard from '@/components/PhotoCard';
// import React from 'react';

// const CoursesPage = async ({searchParams}) => {
//     const {Category} = await searchParams;
   
// const filteredPhotos = photos.filter(
//   (photo) =>
//     photo?.category?.toLowerCase() === category?.toLowerCase()
// );


//       const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json')
//     const photos = await res.json()


    
    
//     return (
//         <div>
//             <h1 className='text-2xl font-bold m-4'>Courses</h1>

//             <Category/>

//             <div className='grid grid-cols-4 gap-5'>
//                 {fillteredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
//             </div>
//         </div>
//     );
// };

// export default CoursesPage;


import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const CoursesPage = async ({ searchParams }) => {
  const category = searchParams?.category || "";

  // fetch আগে
  const res = await fetch(
    'https://assignment-8-next-projects.vercel.app/data.json',
    { cache: "no-store" }
  );
  const photos = await res.json();

  // তারপর filter
  const filteredPhotos = category
    ? photos.filter(
        (photo) =>
          photo?.category?.toLowerCase() === category.toLowerCase()
      )
    : photos;

  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>Courses</h1>

      <Category />

      <div className='grid grid-cols-4 gap-5'>
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;