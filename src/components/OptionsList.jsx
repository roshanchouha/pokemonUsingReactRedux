import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";

const OptionsList = () => {
  return (
    <div className="homeBtn">
      <Link to="/add" style={{ textDecoration: 'none' }}>
        <button className="addBtn">
          <RiPlayListAddFill />
        </button>
         <div className="AddTitle">
            ADD
         </div>
      </Link>
      <Link to="/list" style={{ textDecoration: 'none' }}>
        <button className="listBtn">
          <CiViewList />
        </button>
        <div className="AddTitle">
            Show List
         </div>
      </Link>
    </div>
  );
};

export default OptionsList;
