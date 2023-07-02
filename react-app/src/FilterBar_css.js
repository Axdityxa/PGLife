import React from 'react';
import { base_path } from './utils.js';

const FilterBar = () => {
  return (
    <div className="filter-bar row justify-content-around">
      <div className="col-auto" data-toggle="modal" data-target="#filter-modal">
        <img src={base_path + "/img/filter.png"} alt="filter" />
        <span>Filter</span>
      </div>
      <div className="col-auto">
        <img src={base_path + "/img/desc.png"} alt="sort-desc" />
        <span>Highest rent first</span>
      </div>
      <div className="col-auto">
        <img src={base_path + "/img/asc.png"} alt="sort-asc" />
        <span>Lowest rent first</span>
      </div>
    </div>
  );
}

export default FilterBar;