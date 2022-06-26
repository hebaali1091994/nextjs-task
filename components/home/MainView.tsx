import React, { useState } from "react";

import TabList from "./TabList";
import ArticleList from "../article/ArticleList";
import Search from "./Search";
import { useRouter } from "next/router";
const MainView = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <TabList />
      </div>
      <Search setTerm={setTerm} />

      <ArticleList term={term} />
    </div>
  );
};

export default MainView;
