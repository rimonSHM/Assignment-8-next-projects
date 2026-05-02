// import Image from "next/image";


// const PhotoDetailsPage = async({params}) => {
//     const {id} = await params;
//        const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json')
//     const photos = await res.json()
//      const photo = photos.find( p => p.id ==id)
    
     
    
    
//     return (
//         <div>

          
//         </div>
//     );
// };

// export default PhotoDetailsPage;



import Image from "next/image";
import { Chip, Button } from "@heroui/react";
import Link from "next/link";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  // Fetching the data
  const res = await fetch('https://assignment-8-next-projects.vercel.app/data.json');
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);

  // Handle case where course is not found
  if (!photo) {
    return <div className="p-10 text-center">Course not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Course Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src={photo.image} 
            alt={photo.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Course Info */}
        <div className="space-y-4">
          <Chip color="primary" variant="flat">{photo.category}</Chip>
          <h1 className="text-4xl font-bold">{photo.title}</h1>
          <p className="text-gray-600 text-lg">{photo.description}</p>
          
          <div className="flex gap-4 items-center">
            <p className="font-semibold">Instructor: <span className="text-blue-600">{photo.instructor}</span></p>
            <p className="text-gray-400">|</p>
            <p className="font-semibold">Duration: {photo.duration}</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="block text-xs uppercase text-gray-500">Rating</span>
              <span className="font-bold text-lg">⭐ {photo.rating}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="block text-xs uppercase text-gray-500">Level</span>
              <span className="font-bold text-lg">{photo.level}</span>
            </div>
          </div>

          {/* FIX: Wrap the Button in Link instead of using as={Link} */}
          <Link href="/">
            <Button color="primary" className="mt-4">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;