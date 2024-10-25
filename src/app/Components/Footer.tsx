import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white text-center py-6 border-x-zinc-950'>
      <h1 className="text-lg font-semibold mb-4">All Rights Reserved</h1>
      <div className="flex justify-center gap-6 text-2xl">
        <div className="flex justify-center space-x-5 transition-transform duration-500 
        ease-in-out transform hover:scale-105">
          <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
            <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="facebook logo" width={48} height={48} />
          </a>

          <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
            <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="instagram logo" width={48} height={48} />
          </a>

          <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
            <img src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="twitter logo" width={48} height={48} />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
            <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="linkedin logo" width={48} height={48} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
