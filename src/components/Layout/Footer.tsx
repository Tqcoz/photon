import React, { ReactFragment } from 'react';
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 py-8 mt-6 text-center footer">
        <h2 className="text-2xl font-bold">
            Photon
        </h2>
      <div style={{margin: '0px 15px'}} className="flex flex-row flex-wrap gap-24 px-8 py-5 rounded-md links md:flex-nowrap sm:m-auto ring ring-2 ring-gray-600 ring-inset ring-opacity-5 ">
        <div className="flex flex-col flex-1 p-2">
            <h4 className="mb-2 font-bold select-none">Policies</h4>
            <div className="flex flex-col w-full gap-2 text-gray-200">
                <a className="hover:text-gray-300" href="/terms">Terms</a>
                <a className="hover:text-gray-300" href="/privacy">Privacy</a>
            </div>
        </div>
        <div className="flex flex-col flex-1 p-2">
            <h4 className="mb-2 font-bold select-none">Product</h4>
            <div className="flex flex-col w-full gap-2 text-gray-200">
                <a className="hover:text-gray-300" href="/download">Download</a>
                <a className="hover:text-gray-300" href="/bugs">Bug Report</a>
                <a className="hover:text-gray-300" href="/about">Ultra</a>
            </div>
        </div>
        <div className="flex flex-col flex-1 p-2">
            <h4 className="mb-2 font-bold select-none">Features</h4>
            <div className="flex flex-col w-full gap-2 text-gray-200">
                <a className="hover:text-gray-300" href="/features#encrypted">Encrypted</a>
                <a className="hover:text-gray-300" href="/features#layout">Layout</a>
                <a className="hover:text-gray-300" href="/features#layout">Layout</a>
                <a className="hover:text-gray-300" href="/features#messaging">Messaging</a>
            </div>
        </div>
        <div className="flex flex-col flex-1 p-2">
            <h4 className="mb-2 font-bold select-none">Resources</h4>
            <div className="flex flex-col w-full gap-2 text-gray-200">
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