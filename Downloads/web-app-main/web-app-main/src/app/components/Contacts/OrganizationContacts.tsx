"use client";
import React, { useState } from "react";
import ExternalContacts from "./ExternalContacts";
import NewContacts from "./NewContacts";
import StarredContacts from "./StarredContacts";
import MyGroups from "./MyGroups";
import HelpDesk from "./HelpDesk";

const OrganizationContacts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Organization Contacts");

  const categories = [
    { name: "Organization Contacts", icon: "fas fa-building" },
    { name: "External Contacts", icon: "fas fa-user-friends" },
    { name: "New Contacts", icon: "fas fa-user-plus" },
    { name: "Starred Contacts", icon: "fas fa-star" },
    { name: "My Groups", icon: "fas fa-users" },
    { name: "Help Desk", icon: "fas fa-headset" },
  ];

  const members = [{ name: "Tasmira Tashu", role: "Primary administrator" }];

  const renderContent = () => {
    switch (selectedCategory) {
      case "External Contacts":
        return <ExternalContacts />;
      case "New Contacts":
        return <NewContacts />;
      case "Starred Contacts":
        return <StarredContacts />;
        case "My Groups":
          return <MyGroups />;
        case "Help Desk":
          return <HelpDesk />;
      case "Organization Contacts":
        return (
          <>
            {members.map((member, index) => (
              <div key={index} className="flex items-center p-3 border-b">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center rounded-full mr-3">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{member.name}</p>
                  {member.role && (
                    <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-md">
                      {member.role}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </>
        );
      default:
        return <p>Select a category</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white px-2 py-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Contacts</h2>
        {/* User Info with Manage button */}
        <div className="flex justify-between items-center px-2 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <i className="fas fa-user"></i>
            </div>
            <span className="text-gray-900">Tashu</span>
          </div>
          <button className="text-blue-600 text-sm">Manage</button>
        </div>

        {/* Contacts List */}
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`flex items-center py-4 px-2 cursor-pointer text-sm rounded-md ${
                selectedCategory === category.name
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <i className={`${category.icon} mr-3`}></i>
              {category.name}
            </li>
          ))}
        </ul>
      </div>

     {/* Right Content Section */}
     <div className="w-3/4 bg-white p-4">
  {/* Top Section with Heading & Button */}
  <div className="flex justify-between items-center pb-3 border-b">
    <h2 className="text-xl font-bold">{selectedCategory}</h2>

    {/* Dynamic Button */}
    {["External Contacts", "New Contacts", "Starred Contacts", "My Groups", "Help Desk"].includes(selectedCategory) && (
      <button className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition">
        <i className={
          selectedCategory === "My Groups" ? "fas fa-users" : 
          selectedCategory === "Help Desk" ? "fas fa-headset" : 
          "fas fa-user-plus"
        }></i>
        {selectedCategory === "My Groups" ? "New Group" : 
         selectedCategory === "Help Desk" ? "My Help Desk" : 
         "Add"}
      </button>
    )}
  </div>

  {/* Search Bar */}
  <div className="mt-4">
    <input
      type="text"
      placeholder={`Search ${selectedCategory}`}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  {/* Dynamic Content */}
  {renderContent()}
</div>


    </div>
  );
};

export default OrganizationContacts;
