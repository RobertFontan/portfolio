import React, { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
//import Filter from "./Filter"


function Portfolio() {
    const categories = []
    portfolio.map(project => {
        project.stack.map(tech => {
            categories.push(tech)
        })
    })

    const set = categories.reduce((uniqueValues, currentValue) => {
        if (!uniqueValues.includes(currentValue)) {
          uniqueValues.push(currentValue);
        }
        return uniqueValues;
    }, []);

    const [filters, setFilters] = useState([])

    const handleButtonClick  = (cat) => {
        updateFilter(cat)
    }

    
    const updateFilter = (filterValue) => {
        setFilters((prevFilters) => {
          if (prevFilters.includes(filterValue)) {
            // If the filter already exists, remove it
            return prevFilters.filter((filter) => filter !== filterValue);
          } else {
            // If the filter does not exist, add it
            return [...prevFilters, filterValue];
          }
        });
    };
    
    const renderFilteredPortfolio = (selectedFilters) => {
        if(selectedFilters.length == 0){
            return(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            )
        }
        else{
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio
              .filter((proj) => {
                // Check if any of the selected filters exist in the project's stack
                return proj.stack.some((filter) => selectedFilters.includes(filter));
              })
              .map((proj) => (
                <PortfolioItem
                  key={proj.title} // Assuming title is unique, otherwise use an appropriate key
                  imgUrl={proj.imgUrl}
                  title={proj.title}
                  stack={proj.stack}
                  link={proj.link}
                />
              ))}
          </div>
        );}
    };

    // TODO: make buttons more obvious

    return(
        <div>
            <p className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">Click on any project to view more, use the filters below!</p>
            {/* <p className="text-sm md:text-xl dark:text-white mb-2 md:mb-3 font-normal">Click the filters below</p> */}
            <div className="flex gap-2 items-center mb-4  flex-wrap">

                {set.map(category => 
                <button className={`inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md 
                ${filters.includes(category) ? 'bg-gray-400	 dark:bg-gray-500': ''}`}
                    onClick={()=> handleButtonClick(category)}>
                    {category}
                </button>)}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div>
                    {renderFilteredPortfolio(filters)}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;