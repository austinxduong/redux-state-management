import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ Name, PicUrl }) => (
<figure>
    <img src={PicUrl} alt={Name} />
    <figcaption>
        <p>name: {Name}</p>
        {/* <p> placeholder to add more stuff once api connects and renders</p> */}
    </figcaption>
</figure>
);

Character.propTypes = {
    Name: PropTypes.string.isRequired,
    PicUrl: PropTypes.string.isRequired,
};

export default Character