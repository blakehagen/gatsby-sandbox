import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = props => <h1 className={styles.headerWrapper}>{props.headerText}</h1>;

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
