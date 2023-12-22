import React, { useEffect } from 'react';
// 
const companiesData = [
    { id: 1, name: 'NRI Fintech' },
    { id: 2, name: 'Deutsche Bank' },
    { id: 3, name: 'Zscalar' },
    { id: 4, name: 'Accenture' },
    { id: 5, name: 'Incedo' },
    { id: 6, name: 'Barclays' },
    { id: 7, name: 'Persistent' },
    { id: 8, name: 'Avalara' },
    { id: 9, name: 'Protonshub' },
    { id: 10, name: 'ZS Associates'},
    { id: 11, name: 'Yash Technologies' },
    { id: 12, name: 'Impetus' },
    { id: 13, name: 'Beghou' },
    
  ];
  
  const HorizontalScroll = () => {
    useEffect(() => {
      const scrollContainer = document.getElementById('scrollContainer');
  
      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; // Adjust the speed by changing the value
        }
      };
  
      let scrollInterval = setInterval(scroll, 12); // Adjust the interval for speed
  
      scrollContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
      });
  
      scrollContainer.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(scroll, 12);
      });
  
      return () => {
        clearInterval(scrollInterval);
      };
    }, []);
  
    return (
        <div className="relative mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Companies Experience</h2>
        <div id="scrollContainer" className="flex items-center overflow-hidden py-4 space-x-8">
          {companiesData.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center rounded-md p-3 bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all duration-300"
            >
              <span className="text-blue-800 font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

    );
  };
  
  export default HorizontalScroll;
  