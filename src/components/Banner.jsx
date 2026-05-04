import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/006/518/952/large_2x/down-shot-of-hajee-mohammad-danesh-science-and-technology-university-dinajpur-bangladesh-january-21-2021-free-photo.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
           Enhance Your Future with TechEduca
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
           Lorem ipsum dolor sit amet consectetur adipsicing elit Perspiciatis neque sucsipit aut ullam quisquam laborisoam quos, molestias optis tenetur nobis vel sint quis venima molestiae nemo deserunt autem!
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;