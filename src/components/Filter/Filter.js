import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filter/filterReducer';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };
  return (
    <form>
      <label className={css.filter__text}>
        Find contacts by name
        <input type="text" name="filter" onChange={onChange} />
      </label>
    </form>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
