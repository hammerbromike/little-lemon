import React from 'react';
import aboutPhotoA from '../images/Mario_and_Adrian A.jpg';
import aboutPhotoB from '../images/Mario_and_Adrian b.jpg';

const Chicago = () => {
    return (
        <section id="about" name="about">
            <div class="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div class="right">
                <img src={aboutPhotoA} alt="Mario and Adrian" />
                <img src={aboutPhotoB} alt="Mario and Adrian" />
            </div>
        </section>
    )
}

export default Chicago;