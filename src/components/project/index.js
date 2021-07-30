import React from 'react';
import ProjectList from '../projectlist';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
        <center>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <ProjectList category={currentCategory.name} />
        </center>
        </section>

    );
}

export default Project;