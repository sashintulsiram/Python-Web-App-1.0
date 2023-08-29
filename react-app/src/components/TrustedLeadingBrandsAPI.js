import React, { useEffect, useState } from "react";
import "../bulma/css/bulma.min.css";
import "../App.css";

function TrustedLeadingBrandsAPI() {
  const parse = require("html-react-parser");
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("http://127.0.0.1:5000/api_get_trusted_leading_brands")
        .then((respose) => respose.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.company_name_tb01
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.economic_sector_tb01
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.sector_tb01
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.industry_tb01
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFilterVal(e.target.value);
  };

  const myData = data;

  const ascendingEvent = () => {
    let data = [...myData];
    if (data.length > 0) {
      let result = data.sort((a, b) =>
        a.company_name_tb01.localeCompare(b.company_name_tb01)
      );
      setData(result);
    }
  };

  const descendingEvent = () => {
    let data = [...myData];
    if (data.length > 0) {
      let result = data.sort((a, b) =>
        b.company_name_tb01.localeCompare(a.company_name_tb01)
      );
      setData(result);
    }
  };

  return (
    <div>
      <div class="column">
        <div className="Rectangle CaseColummn"> </div>
        <div className="font_WhatWeDo1 CaseColummn_Title">
          <p>You'll be in good company</p>
        </div>
        <div className="TrustedBrandsHeading">
          <p>Trusted by Leading Brands</p>
        </div>
      </div>
      <div>
        <div class="columns FilterContainer">
          <div class="column is-one-fifth">
            <p className="FilterText FilterPS">Search Filter</p>
            <div>
              <input
                className="FilterCSS"
                type="search"
                placeholder="Search"
                value={filterVal}
                onInput={(e) => handleFilter(e)}
              />
            </div>
            <div class="tooltip">
              Filter options
              <span class="tooltiptext">
                "Filter by: Company name OR Economic sector (Primary, Secondary,
                Tertiary)"
              </span>
            </div>
          </div>
          <div class="column is-one-fifth">
            <p className="FilterText SortPS">Sort by Company Name</p>
            <button
              class="button is-rounded"
              className="btn_sort"
              onClick={ascendingEvent}
            >
              <span>Ascending</span>
            </button>
            <button
              class="button is-rounded"
              className="btn_sort"
              onClick={descendingEvent}
            >
              <span>Descending</span>
            </button>
          </div>
        </div>
        <div class="TrustedBrandsIconContainer">
          {myData.map((item) => (
            <div className="TrustedBrandsIcon">
              {parse(item.brand_image_tb01)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedLeadingBrandsAPI;
