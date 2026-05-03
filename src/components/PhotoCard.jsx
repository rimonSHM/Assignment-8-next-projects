import { Button, Card, Chip } from '@heroui/react';
import { Image,  } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { GiVibratingShield } from 'react-icons/gi';

const PhotoCard = ({photo}) => {
  
    
    
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo.image} fill alt={photo.title} className='rounded-xl object-cover'></Image>
                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>

            <div>
                 <h2 className='font-medium'>{photo.title}</h2>
            </div>
            
            <div className='flex gap-15'>
                <div className='flex items-center gap-2'>
                <p><GiVibratingShield /></p>
                <p>{photo.rating}</p>
            </div>


              <div className='flex items-center gap-2'>
                
                <p>{photo.level}</p>
            </div>
            </div>
  {/* <Link href={`/courses/${photo.id}`}><Button variant='outline' className={'w-full'}>view</Button></Link> */}

      <Link href={`/courses/${photo.id}`}>  <Button variant="outline" className="w-full">
              View Details button
             </Button></Link>
      
 
       </Card>
    );
};

export default PhotoCard;