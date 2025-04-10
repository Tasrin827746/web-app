'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from "next/link";



const ChatsSidebar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const testimonialsData = [
      {
        name: "Dana Gilmore",
        image: "https://i.ibb.co/Ssv9BN3/testimonial1.webp",
        rating: 5,
        description:
          "As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
      {
        name: "Susan Barkley",
        image: "https://i.ibb.co/2cKXqPf/testimonial2.webp",
        rating: 3,
        description:
          "As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
      {
        name: "Lisa Simpson",
        image: "https://i.ibb.co/3hg5m85/testimonial3.webp",
        rating: 5,
        description:
          "As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
      {
        name: "Sara Loreley",
        image: "https://i.ibb.co/2W49PJy/testimonial4.webp",
        rating: 5,
        description:
          "As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
      {
        name: "Jessica Fowley",
        image: "https://i.ibb.co/nfHwZGX/testimonial5.webp",
        rating: 2,
        description:
          " As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
      {
        name: "Sarah Adams",
        image: "https://i.ibb.co/sbkvngy/testimonials6.webp",
        rating: 3,
        description:
          "As a software engineer, I've explored various job platforms,but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you! !!!",
      },
    ];
    
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-4">
      <h3 className='pl-2 py-7 text-xl'>Chats</h3>

      <ul className="menu">
        {
          testimonialsData.map((testimonial, index) => (
            <li key={index} className="mb-2">
              <Link
                href={""}
                className={
                  `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                    index === 0 ? "rounded-sm bg-gray-100 border-r-2 border-blue-600" : ""
                  }`
                }
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                
                  <h4 className="">{testimonial.name}</h4>
                  
              </Link>
            </li>
          ))
        }
        {/* <li className="mb-2">
          <Link
            href={"/pages/messenger"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/pages/messenger" ? "rounded-sm bg-gray-100 border-r-2 border-blue-600" : ""
              }`
            }
          >
            
            <span className="ml-2">Messenger</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Meeting</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Calendar</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Docs</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Contacts</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Email</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Tasks</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={"/messages"}
            className={
              `flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                pathName === "/profile" ? "rounded-sm bg-gray-100 border-r-2 border-[#5921cf]" : ""
              }`
            }
          >
            <span className="ml-2">Workplace</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default ChatsSidebar