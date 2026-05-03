// import { Button } from '@heroui/react';
// import { Link } from 'lucide-react';
// import React from 'react';

// const Category = async() => {
//     const res = await fetch("https://assignment-8-next-projects.vercel.app/category.json")
//     const categories = await res.json()
//     console.log(categories);
    
//     return (
//         <div className='mb-5 space-x-3' >
            
//                 {categories.map(Category=><Link><Button variant='outline' size="sm">{Category.name}</Button></Link> )}
            
//         </div>
//     );
// };

// export default Category;


import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch(
    "https://assignment-8-next-projects.vercel.app/category.json",
    { cache: "no-store" }
  );

  const categories = await res.json();

  return (
    <div className="mb-5 space-x-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.name.toLowerCase()}`}
        >
          <Button variant="outline" size="sm">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;




