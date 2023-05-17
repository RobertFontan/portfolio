import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Filter from "./Filter"


function Portfolio() {
    const categories = []
    portfolio.map(project => {
        project.stack.map(tech => {
            categories.push(tech)
        })
    })



    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <Filter categories={categories}/>
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

        </div>
    )
}

export default Portfolio;