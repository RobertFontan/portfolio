import React from "react";

function Filter(categories) {

    console.log("made it here",categories.categories)



    const set = categories.categories.reduce((uniqueValues, currentValue) => {
        if (!uniqueValues.includes(currentValue)) {
          uniqueValues.push(currentValue);
        }
        return uniqueValues;
    }, []);
    
    console.log(set)
    

    return(
        <div >
            {set.map(cat => (<button>
                {cat}
            </button>))}
        </div>
    )
}


export default Filter;