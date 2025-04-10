"use client";

import { useEffect, useState } from 'react';
import { Search, Plus, Settings, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  'All Apps', 'CRM', 'Customer Support', 'Office Management', 'OA', 'Voice & Video', 'Recently Used', 'Productivity', 'Comprehensive Finance', 'Business Travel','Project Management','Comprehensive HRM', 'Social & Fun', 'Media & News'
];

const apps = [
    { name: 'Salesforce Connector', category: ['CRM'], icon: "/salesforce.png", desc: 'Efficient and intelligent customer relationship management tools' },
    { name: 'Lark Help Center', category: ['Customer Support'], icon: "/help-center.jpg", desc: 'Click larksuite.com/hc and view lark help docs' },
    { name: 'Lark Customer Support', category: ['Customer Support'], icon: "/customer-support.png", desc: 'Lark customer support' },
    { name: 'Lark Forms', category: ['Office Management'], icon: "/forms.png", desc: 'A simple but powerful tool to manage your survey, check-in and registration projects' },
    { name: 'Suite Admin', category: ['Office Management'], icon: "/suite-admin.png", desc: 'Manage your company everywhere' },
    { name: 'Approval', category: ['OA', 'Productivity'], icon: "/approval.png", desc: 'A simple, efficient, and open approval tool' },
    { name: 'Announcement', category: ['OA'], icon: "/announcement.png", desc: 'Important broadcasting for all staff, special notifications for specified members' },
    { name: 'Zoom Connector', category: ['Voice & Video'], icon: "/zoom.png", desc: 'Diversify your video conferencing solutions' },
    { name: 'Business Trip Request', category: ['Business Travel'], icon: "/zoom.png", desc: 'Request for business trip at home and abroad' },
    { name: 'Seal Request', category: ['Comprehensive Finance'], icon: "/zoom.png", desc: 'Request for official seal' },
    { name: 'Reimbursement', category: ['Comprehensive Finance'], icon: "/zoom.png", desc: 'Reimbursement such as travel and activity expense' },
    { name: 'Purchase', category: ['Comprehensive Finance'], icon: "/zoom.png", desc: 'Supply and inventory purchase' },
    { name: 'Payment Request', category: ['Comprehensive Finance'], icon: "/zoom.png", desc: 'Payment request such as cash, checks' },
    { name: 'Direct Reposit Request', category: ['Comprehensive Finance'], icon: "/zoom.png", desc: 'Direct Reposit Request' },
    { name: 'Attendance', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Request for official seal' },
    { name: 'OKR', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Reimbursement such as travel and activity expense' },
    { name: 'Recruitment', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Supply and inventory purchase' },
    { name: 'Leave', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Payment request such as cash, checks' },
    { name: 'Overtime', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Direct Reposit Request' },
    { name: 'Out-of-office', category: ['Comprehensive HRM'], icon: "/zoom.png", desc: 'Direct Reposit Request' },
    { name: 'Meegle', category: ['Project Management'], icon: "/meegle.png", desc: 'Meegle is a professional project management platform for large teams' },
    { name: 'GIPHY', category: ['Social & Fun'], icon: "/giphy.png", desc: 'Chat should be fun for everyone' },
    { name: 'Subscriptions', category: ['Media & News'], icon: "/zoom.png", desc: 'Offer organizations and individuals a new way of sharing written and visual content' },
    { name: 'Reminder', category: ['Productivity'], icon: "/reminder.png", desc: 'It time to stop forgetting' },
    { name: 'Lingo', category: ['Productivity'], icon: "/zoom.png", desc: 'An online encyclopedia to share knowledge' },
    { name: 'Automation Assistant', category: ['Productivity'], icon: "/zoom.png", desc: 'Powering lark automations with third party applications' },
  ];

  const MAX_RECENT = 5;
  
export default function Workplace() {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Apps');
  const [recentApps, setRecentApps] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  

  const toggleFavorite = (appName: string) => {
    let updatedFavorites;
    if (favorites.includes(appName)) {
      updatedFavorites = favorites.filter(fav => fav !== appName);
    } else {
      updatedFavorites = [...favorites, appName];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  

  useEffect(() => {
    const storedRecent = JSON.parse(localStorage.getItem('recentApps') || '[]');
    setRecentApps(storedRecent);
  }, []);

  const handleAppClick = (appName: string) => {
    let updatedRecent = [appName, ...recentApps.filter(name => name !== appName)];
    updatedRecent = updatedRecent.slice(0, MAX_RECENT);

    setRecentApps(updatedRecent);
    localStorage.setItem('recentApps', JSON.stringify(updatedRecent));
  };

  const filteredApps = apps.filter(
    (app) =>
      (selectedCategory === 'All Apps' || app.category.includes(selectedCategory)) &&
      app.name.toLowerCase().includes(search.toLowerCase())
  );  

  const displayedApps =
  selectedCategory === 'Recently Used'
    ? recentApps
        .map(name => apps.find(app => app.name === name))
        .filter((app): app is typeof apps[number] => !!app)
    : filteredApps;

  return (
    <div className="p-4 h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3 flex">
          <Search className="absolute top-2 left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search (Ctrl+K)"
            className="pl-10 py-2 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600">Find more apps</button>
          <button onClick={() => router.push("/product/openplatform")} className="text-gray-600 hover:bg-slate-100 cursor-pointer">Create apps</button>
          <div className='flex text-gray-600 cursor-pointer'>
            <span className='mr-2'>Settings</span>
            <Settings className="cursor-pointer" />
          </div>
        </div>
      </div>

{/* Favorites */}
      <div className="mb-6">
      <div className="grid grid-cols-4 gap-4 mt-6">
  {/* Render favorite apps */}
  {favorites.map((favName, index) => {
    const favApp = apps.find(app => app.name === favName);
    return favApp ? (
      <div 
        key={index} 
        className="p-4 bg-slate-100 rounded-lg shadow-md flex items-center space-x-3 w-full cursor-pointer hover:bg-slate-100 transition"
        onClick={() => handleAppClick(favApp.name)} 
      >
        <img src={favApp.icon} alt={favApp.name} className="w-8 h-8 flex-shrink-0" />
        <h3 className="font-medium text-base">{favApp.name}</h3>
      </div>
    ) : null;
  })}

  {/* "Favorites" button */}
  <div
    className="flex items-center justify-center cursor-pointer p-4 border-2 border-dashed rounded-lg"
    onClick={() => setIsOpen(true)}
  >
    <Plus className="text-gray-500" />
    <span className="ml-1">Favorites ({favorites.length})</span>
  </div>
</div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-[600px] shadow-lg relative z-50">      
            {/* Close Button */}
            <button className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4">My Favorites</h2>

            {/* App List */}
            <div className="max-h-60 overflow-y-auto">
              {apps.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center space-x-2">
                    <img src={app.icon} alt={app.name} className="w-8 h-8" />
                    <div>
                      <h3 className="text-sm font-medium">{app.name}</h3>
                      <p className="text-xs text-gray-500">{app.desc}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={favorites.includes(app.name)}
                    onChange={() => toggleFavorite(app.name)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 space-x-2">
              <button className="px-4 py-2 border rounded-md" onClick={() => setIsOpen(false)}>
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={() => setIsOpen(false)}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-700 mb-4">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`cursor-pointer hover:text-blue-600 whitespace-nowrap ${selectedCategory === cat ? 'text-blue-600 font-bold' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} {index < categories.length - 1 && '/'}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 cursor-pointer mt-8">
  {displayedApps.length > 0 ? (
    displayedApps.map((app, index) => (
      <div
        key={index}
        className="p-4 bg-slate-100 rounded-lg shadow-md flex items-center space-x-3 w-full relative group"
        onClick={() => handleAppClick(app.name)}
      >
        {/* Icon */}
        <img src={app.icon} alt={app.name} className="w-6 h-6 flex-shrink-0" />

        {/* Text Content */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* App Name */}
          <h3 className="font-medium text-base truncate w-full">{app.name}</h3>

          {/* Description with Tooltip */}
          <div className="relative w-full">
            {/* Truncated Text (Ellipsis) */}
            <p className="text-gray-500 text-sm truncate overflow-hidden whitespace-nowrap w-full">
              {app.desc}
            </p>

            {/* Tooltip (Shows Full Text on Hover) */}
            <div className="absolute left-0 bottom-full mb-2 w-max max-w-xs p-2 bg-black text-white text-xs rounded-lg shadow-lg
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out 
            z-50 whitespace-normal break-words">
              {app.desc}
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No apps found.</p>
  )}
</div>



    </div>
  );
}
