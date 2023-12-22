import React from 'react'
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    // <footer className="dark:bg-dark dark:text-white">
    //   <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400"></div>
    // </footer>
    <footer className="bg-[#023047] text-white flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center align-center">
      <Typography color="blue-gray" className="font-normal">
      &copy; 2023 Campus Connect | All Rights Reserved
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {/* <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li> */}
        {/* <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li> */}
        {/* <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li> */}
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
