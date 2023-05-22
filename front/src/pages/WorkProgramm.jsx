import React from "react";
import { Link } from "react-router-dom";

const WorkProgramm = () => {
  return (
    <div>
      <h1>Рабочие программы</h1>
      <ul>
        <li className="work-programm-list">
          <Link className="link" to="/electronics">
            Рабочая программа для кафедры Электроники
          </Link>
        </li>

        <li className="work-programm-list">
          <Link className="link" to="">
            Рабочая программа ""
          </Link>
        </li>
        
        <li className="work-programm-list">
          <Link className="link" to="">
            Рабочая программа ""
          </Link>
        </li>

        <li className="work-programm-list">
          <Link className="link" to="">
            Рабочая программа ""
          </Link>
        </li>

        <li className="work-programm-list">
          <Link className="link" to="">
            Рабочая программа ""
          </Link>
        </li>

        <li className="work-programm-list">
          <Link className="link" to="">
            Рабочая программа ""
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { WorkProgramm };
