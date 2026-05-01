import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // React icons install thakte hobe

const Footer = () => {
  return (
    // <footer className="bg-[#244D3F] text-white py-16 px-4">
    //   <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
    //     {/* Brand Name */}
    //     <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        
    //     {/* Tagline */}
    //     <p className="text-gray-300 max-w-md mb-8">
    //       Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    //     </p>

    //     {/* Social Links */}
    //     <div className="mb-12">
    //       <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Social Links</h3>
       


    //       <div className="flex gap-4 justify-center">
    //         {/* YouTube */}
    //           <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#FF0000] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    //             <FaYoutube size={20} />
    //         </a>
  
    //         {/* Facebook */}
    //         <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    //         <FaFacebook size={20} />
    //          </a>
  
    //        {/* Twitter/X */}
    //        <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    //        <FaTwitter size={20} />
    //        </a>
    //        </div>
    //     </div>

    //     {/* Bottom Bar */}
    //     <div className="w-full border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
    //       <p>© 2026 KeenKeeper. All rights reserved.</p>
          
    //       <div className="flex gap-6">
    //         <a href="#" className="hover:text-white transition">Privacy Policy</a>
    //         <a href="#" className="hover:text-white transition">Terms of Service</a>
    //         <a href="#" className="hover:text-white transition">Cookies</a>
    //       </div>
    //     </div>
        
    //   </div>
    // </footer>

    <footer class="bg-gray-900 text-white p-10">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 class="text-2xl font-bold hover:underline">SkillSphere</h2>
      <p class="mt-2 text-gray-400 hover:underline">Programming Hero</p>
    </div>

    <div>
      <h3 class="font-bold mb-3 hover:underline">Contact Us</h3>
      <p className='hover:underline'>Email: rimon072159@gmail.com</p>
      <p className='hover:underline'>Phone: +880 1317420674</p>
      <p className='hover:underline'>WhatsApp: +880 1943639436</p>
    </div>

    <div>
      <h3 class="font-bold mb-3 hover:underline">Follow Us</h3>
      <div class="">
        <a href="#" class="hover:underline">Md Rimon Hasan</a><br />
        <a href="#" class="hover:underline">LinkedIn</a><br />
        <a href="#" class="hover:underline">GitHub</a> <br />
        <a href="#" class="hover:underline">Telegram</a>

      </div>
    </div>

    <div>
      <h3 class="font-bold mb-3 hover:underline">Legal</h3>
      <ul class="space-y-2">
        <li><a href="/terms" class="hover:underline">Terms & Conditions</a></li>
        <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  
  <div class="text-center mt-10 border-t border-gray-700 pt-5">
    <p>&copy; 2026 YourBrand. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;