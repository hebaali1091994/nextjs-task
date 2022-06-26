import React, { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../lib/utils/constant";

import axios from "axios";
function Search({setTerm}) {


  return (
    <div className="search">
      <form>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
