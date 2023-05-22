import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Electronics = () => {
  return (
    <div>
      <h1>Кафедра электроники</h1>
      <ul>
        <li className="work-programm-form">
          <Link className="link" to="/formal">
            Формальная информация (Formal) (c 1 по 8)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/outcomes">
            Результаты обучения (Outcomes) (с 9 по 11)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/process">
            Процесс - Дисциплины (Process) (c 12- 14)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/references">
          Рекомендаци - Литература (References) (15-18)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/equipment">
          Материально-техническое обеспечение дисциплины (Equipment) (c 18 и до конца)
          </Link>
        </li>
      </ul>

      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained">
          Создать программу
        </Button>
      </Stack>
    </div>
  );
};
export { Electronics };
