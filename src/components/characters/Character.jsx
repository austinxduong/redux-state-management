/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image }) => (
  <figure>
    <section className={styles.Character}>
      <img src={image} alt={name} />
      <figcaption>
        <p>Name: {name}</p>
        {/* <p> placeholder to add more stuff once api connects and renders</p> */}
      </figcaption>
    </section>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
