/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>name: {name}</p>
      {/* <p> placeholder to add more stuff once api connects and renders</p> */}
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
