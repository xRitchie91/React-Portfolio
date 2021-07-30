import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;


    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/" className="header">
                    <span role="img" aria-label="camera"></span>
                    <center>React Portfolio</center>
                </a>
            </h2>
            
        </header >
    );
}

export default Nav;