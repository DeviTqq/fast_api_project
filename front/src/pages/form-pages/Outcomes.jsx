import React from 'react'
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

const Outcomes = () => {
  const [outcomes, setOutcomes] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    disciplineTask: "",
    positinInPLO: "",
    codeResultLearning: "",
    competenceName: "",
    codesResultLearning: "",
    indicatorsResultLearning: "",
    ResultLearning: "",

  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOutcomes((prevOutcomes) => ({
      ...prevOutcomes,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(outcomes);

    // Очищаем поля после отправки
    setOutcomes({
      disciplineTask: "",
      positinInPLO: "",
      codeResultLearning: "",
      competenceName: "",
      codesResultLearning: "",
      indicatorsResultLearning: "",
      ResultLearning: "",
      
    });
    // здесь отправляем данные на сервер
  };

  // const handleAddInput = () => {
  //   setFormData((prevformData) => ({ ...prevformData, input2: "" }));
  // };

  return ( 
    <div>
      <Link className="link" to="/electronics">Назад</Link>
      <form className="document-form" onSubmit={handleSubmit}>
      
      <ul>

       

      <li className="field-block">
          <label className="labelField" htmlFor="disciplineTask">
          9. Цели и задачи учебной дисциплины:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="disciplineTask"
            name="disciplineTask"
            autoComplete="off"
            value={outcomes.disciplineTask}
            onChange={handleInputChange}
          />
        </li>

{/* 10 */}
        <li className="field-block">
          <label className="labelField" htmlFor="positinInPLO">
          10. Место учебной дисциплины в структуре ООП:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="positinInPLO"
            name="positinInPLO"
            autoComplete="off"
            value={outcomes.positinInPLO}
            onChange={handleInputChange}
          />
        </li>

{/*ТАБЛИЦА 11 */}
        <li style={{marginTop: "50px"}}>
          11. Планируемые результаты обучения по дисциплине/модулю (знания, умения,
          навыки), соотнесенные с планируемыми результатами освоения
          образовательной программы (компетенциями выпускников):
        </li>
{/*ТАБЛИЦА 11.1 */}
        <li className="field-block">
          <label className="labelField" htmlFor="codeResultLearning">
          1. Код:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="codeResultLearning"
            name="codeResultLearning"
            autoComplete="off"
            value={outcomes.codeResultLearning}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 11.2 */}
        <li className="field-block">
          <label className="labelField" htmlFor="competenceName">
          2. Название компетенции:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="competenceName"
            name="competenceName"
            autoComplete="off"
            value={outcomes.competenceName}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 11.3 */}
        <li className="field-block">
          <label className="labelField" htmlFor="codesResultLearning">
          3. Код(ы):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="codesResultLearning"
            name="codesResultLearning"
            autoComplete="off"
            value={outcomes.codesResultLearning}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 11.4 */}
        <li className="field-block">
          <label className="labelField" htmlFor="indicatorsResultLearning">
          4. Индикатор(ы):{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="indicatorsResultLearning"
            name="indicatorsResultLearning"
            autoComplete="off"
            value={outcomes.indicatorsResultLearning}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 11.5 */}
        <li className="field-block">
          <label className="labelField" htmlFor="ResultLearning">
          5. Планируемые результаты обучения:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="ResultLearning"
            name="ResultLearning"
            autoComplete="off"
            value={outcomes.ResultLearning}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>






      </ul>

      {/* <div> */}
        {/* <label htmlFor="course">Курс:</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
        >
          <option value="">Выберите курс</option>
          {data.course.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div> */}

      <Stack spacing={2} direction="row">
        <Button className="form-button" type="submit" variant="contained">
          Создать документ
        </Button>
      </Stack>
    </form>
    </div>

  );
};

export {Outcomes}