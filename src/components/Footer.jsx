import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // React icons install thakte hobe

const Footer = () => {
  return (
 

    <footer className="bg-gray-900 text-white p-10 mt-24">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     {/* <div>
      <h2 class="text-2xl font-bold hover:underline">SkillSphere</h2>
      <p class="mt-2 text-gray-400 hover:underline">Programming Hero</p>
    </div> */}

    <div>
    <h2 className="text-2xl font-bold hover:underline">SkillSphere</h2>
    <p className="mt-2 text-gray-400 hover:underline">Programming Hero</p>
  </div>


    <div>
      <h3 className="font-bold mb-3 hover">Contact Us</h3>
      <p className='hover:underline'>Email: rimon072159@gmail.com</p>
      <p className='hover:underline'>Phone: +880 1317420674</p>
      <p className='hover:underline'>WhatsApp: +880 1943639436</p>
    </div>

    <div>
      <h3 className="font-bold mb-3 hover:underline">Follow Us</h3>
      <div className="">
        <a href="#" className="hover:underline">Md Rimon Hasan</a><br />
        <a href="#" className="hover:underline">LinkedIn</a><br />
        <a href="#" className="hover:underline">GitHub</a> <br />
        <a href="#" className="hover:underline">Telegram</a>

      </div>
    </div>

    <div>
      <h3 className="font-bold mb-3 hover:underline">Legal</h3>
      <ul className="space-y-2">
        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  
  <div className="text-center mt-10 border-t border-gray-700 pt-5">
    <p>&copy; 2026 YourBrand. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;