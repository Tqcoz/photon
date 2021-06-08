import React, { ReactFragment } from 'react';
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-8 footer mt-6 text-center gap-8">
        <h2 className="font-bold text-2xl">
            Photon
        </h2>
      <div className="links flex flex-row gap-24 mx-auto flex-wrap md:flex-nowrap">
        <div className="flex flex-col flex-1">
            <h3 className="font-bold mb-2 select-none">Policies</h3>
            <div className="text-gray-200 flex flex-col gap-2 w-full">
                <a className="hover:text-gray-300" href="/terms">Terms</a>
                <a className="hover:text-gray-300" href="/privacy">Privacy</a>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <h3 className="font-bold mb-2 select-none">Product</h3>
            <div className="text-gray-200 flex flex-col gap-2 w-full">
                <a className="hover:text-gray-300" href="/download">Download</a>
                <a className="hover:text-gray-300" href="/bugs">Bug Report</a>
                <a className="hover:text-gray-300" href="/about">Ultra</a>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <h3 className="font-bold mb-2 select-none">Features</h3>
            <div className="text-gray-200 flex flex-col gap-2 w-full">
                <a className="hover:text-gray-300" href="/features#encrypted">Encrypted</a>
                <a className="hover:text-gray-300" href="/features#layout">Layout</a>
                <a className="hover:text-gray-300" href="/features#layout">Layout</a>
                <a className="hover:text-gray-300" href="/features#messaging">Messaging</a>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <h3 className="font-bold mb-2 select-none">Resources</h3>
            <div className="text-gray-200 flex flex-col gap-2 w-full">
                <a className="hover:text-gray-300" href="/api">API</a>
                <a className="hover:text-gray-300" href="/documentation">Documentation</a>
                <a className="hover:text-gray-300" href="/about">Ultra</a>
            </div>
        </div>

      </div>
      <div className="flex flex-row">
          
      </div>
    </footer>
  );
};

export default Footer;