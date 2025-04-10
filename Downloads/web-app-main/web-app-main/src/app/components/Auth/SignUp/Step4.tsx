import React, { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

interface CreateOrgProps {
  onNext: (step: number) => void;
  onBack: () => void;
}

const CreateOrg: React.FC<CreateOrgProps> = ({ onNext, onBack }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const cachedCountries = localStorage.getItem("countries");

    if (cachedCountries) {
      setCountries(JSON.parse(cachedCountries));
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data: Country[]) => {
          const countryList = data
            .map((country) => country.name?.common)
            .filter((name): name is string => typeof name === "string")
            .sort((a, b) => a.localeCompare(b));

          localStorage.setItem("countries", JSON.stringify(countryList));

          setCountries(countryList);
        })
        .catch((error) => console.error("Error fetching countries:", error));
    }
  }, []);

  const completeOrganization = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Completing signup with password:", password);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Successfully Created Organization!");
      onNext(6); 
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create organization. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center px-4 min-h-screen">
      <button onClick={onBack} className="text-blue-600 hover:underline mb-4 self-start">
        &larr; Back
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center">Create your organization</h2>
      <form onSubmit={completeOrganization} className="w-full max-w-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Your profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border border-gray-300 rounded-md p-3 w-full mt-4 focus:ring-2 focus:ring-blue-500">
            <option value="">Job Title</option>
            <option value="small">C-Level/Founder</option>
            <option value="medium">VP/Head of</option>
            <option value="large">Director</option>
            <option value="large">Manager</option>
            <option value="large">Educator/Student</option>
            <option value="large">Others</option>
          </select>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Your organization</h3>
          <input
            type="text"
            placeholder="Organization name"
            className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500">
              <option value="">Size</option>
              <option value="small">1-50</option>
              <option value="medium">51-100</option>
              <option value="large">101-500</option>
              <option value="large">501-1000</option>
              <option value="large">1001-5000</option>
              <option value="large">5001-10000</option>
            </select>
            <select className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500">
              <option value="">Industry</option>
              <option value="small">Electronics & Telecommunication</option>
              <option value="medium">Vehicles & Automobile Parts</option>
              <option value="large">Chemicals</option>
              <option value="large">Aerospace & Defense</option>
              <option value="large">IT</option>
              <option value="large">Industrial Materials</option>
            </select>
          </div>

          <select className="border border-gray-300 rounded-md p-3 w-full mt-4 focus:ring-2 focus:ring-blue-500">
            <option value="">Select a Country</option>
            {countries.map((country) => (
              <option key={country} value={country.toLowerCase().replace(/\s/g, "-")}> 
                {country} 
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <input type="checkbox" id="updates" className="mr-2" />
          <label htmlFor="updates" className="text-gray-600">
            Lark may send me updates about its promotional offers.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`$ {
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white rounded-md px-6 py-3 w-full`}
        >
          {loading ? "Creating..." : "Create for Free"}
        </button>
      </form>
    </div>
  );
};

export default CreateOrg;
