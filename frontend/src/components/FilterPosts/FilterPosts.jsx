import React, { useState , useEffect } from 'react';

function FilterPosts({ onFilter }) {
  const [filters, setFilters] = useState({
    company: '',
    status: '',
    role: '',
    type: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    // Trigger filter when 'filters' state changes
    onFilter(filters);
  }, [filters, onFilter]);


  const applyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="mb-4 my-3">
      <div className="flex flex-col items-justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        {/* <div className="flex items-center">
          <label htmlFor="company" className="mr-2 font-bold">Company:</label>
          <select
            name="company"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">Company</option>
            <option value="Flipkart">Flipkart</option>
            <option value="Amazon">Amazon</option>
            <option value="">none</option>
          </select>
        </div> */}
         <div className="flex items-center">
        <label htmlFor="status" className="mr-2 font-bold">Filter by</label>
        </div>
        <div className="flex items-center">
          <label htmlFor="status" className="mr-2 font-bold"></label>
          <select
            name="status"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">Status</option>
            <option value="Selected">Selected</option>
            <option value="Not Selected">Not Selected</option>
            <option value="">None</option>
            
          </select>
        </div>

        {/* <div className="flex items-center">
          <label htmlFor="role" className="mr-2 font-bold">Role:</label>
          <select
            name="role"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option  value="">Choose a role</option>
            <option value="Full Time">Full Time</option>
            <option value="Intern">Intern</option>
            <option value="FT+Intern">FT+Intern</option>
          
          </select>
        </div> */}

        <div className="flex items-center">
          <label htmlFor="postType" className="mr-2 font-bold"></label>
          <select
            name="type"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Intern">Intern</option>
            <option value="">None</option>
            {/* Populate post type options dynamically */}
          </select>
        </div>

        {/* <button
          onClick={applyFilter}
          className="bg-[#fb8500] hover:bg-[#ffb703] text-text-black font-bold py-2 px-4 rounded-full"
        >
          Apply
        </button> */}
      </div>
    </div>
  );
}

export default FilterPosts;
