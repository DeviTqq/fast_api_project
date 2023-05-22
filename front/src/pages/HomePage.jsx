import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "./store/slices/userSlice";
import React from "react";
import { DocumentForm } from "../pages/InputFields";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      

      <h1>Личный кабинет</h1>
      <h2>Создать учебную программу</h2>
      <ul>
        <li className="educational-plan-list">
          <Link className="link" to="/workProgramm">
            Учебный план -"Направление 09.03.01 Информатика и вычислительная
            техника"
          </Link>
        </li>

        <li className="educational-plan-list">
          <Link className="link" to="">
            Учебный план -""
          </Link>
        </li>

        <li className="educational-plan-list">
          <Link className="link" to="">
            Учебный план -""
          </Link>
        </li>
      </ul>

      <Stack spacing={2} direction="row">
        <Button
          className="buttonRemoveUser"
          onClick={() => dispatch(removeUser())}
          variant="contained"
        >
          {" "}
          Выйти из аккаунта
        </Button>
      </Stack>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { HomePage };
