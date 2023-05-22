import React from 'react'
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

const References = () => {
  const [references, setReferences] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    
    basicLiteraturePP: "",
    basicLiteratureSource: "",
    additionalLiteraturePP: "",
    additionalLiteratureSource: "",
    onlineLiteratureNumber: "",
    onlineLiteratureSource: "",
    manualIndependedWorkNumber: "",
    manualIndependedWorkSource: "",
    referencesTechnologies: "",
    
  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReferences((prevReferences) => ({
      ...prevReferences,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(references);

    // Очищаем поля после отправки
    setReferences({
      
      basicLiteraturePP: "",
      basicLiteratureSource: "",
      additionalLiteraturePP: "",
      additionalLiteratureSource: "",
      onlineLiteratureNumber: "",
      onlineLiteratureSource: "",
      manualIndependedWork: "",
      manualIndependedWorkNumber: "",
      referencesTechnologies: "",
      
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

  

{/* ТАБЛИЦА 15.1 */}
        <li>15. Перечень основной и дополнительной литературы, ресурсов интернет, необходимых для освоения 
          дисциплины</li>
        <li> а) основная литература:</li>
{/*15.1.1(a) */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="basicLiteraturePP"
          >
             1. № п.п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="basicLiteraturePP"
            name="basicLiteraturePP"
            autoComplete="off"
            value={references.basicLiteraturePP}
            onChange={handleInputChange}
          />
        </li>
{/*15.1.2(а) */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="basicLiteratureSource"
          >
             2. Источник:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="basicLiteratureSource"
            name="basicLiteratureSource"
            autoComplete="off"
            value={references.basicLiteratureSource}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>

{/* ТАБЛИЦА 15.1.2(б) */}
        <li> б) дополнительная литература:</li>
{/*15.1.1(б) */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="additionalLiteraturePP"
          >
            1. № п.п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="additionalLiteraturePP"
            name="additionalLiteraturePP"
            autoComplete="off"
            value={references.additionalLiteraturePP}
            onChange={handleInputChange}
          />
        </li>
{/*15.1.2(б) */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="additionalLiteratureSource"
          >
             2. Источник:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="additionalLiteratureSource"
            name="additionalLiteratureSource"
            autoComplete="off"
            value={references.additionalLiteratureSource}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
       

{/* ТАБЛИЦА 15.1.2(в) */}
<li> в) информационные электронно-образовательные ресурсы 
  (официальные ресурсы интернет):</li>

        <li className="field-block">
          <label
            className="labelField"
            htmlFor="onlineLiteratureNumber"
          >
             1. № п.п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="onlineLiteratureNumber"
            name="onlineLiteratureNumber"
            autoComplete="off"
            value={references.onlineLiteratureNumber}
            onChange={handleInputChange}
          />
        </li>

        <li className="field-block">
          <label
            className="labelField"
            htmlFor="onlineLiteratureSource"
          >
             2. Ресурс:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="onlineLiteratureSource"
            name="onlineLiteratureSource"
            autoComplete="off"
            value={references.onlineLiteratureSource}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>


{/* ТАБЛИЦА 16*/}
        <li>16. Перечень учебно-методического обеспечения для самостоятельной работы:
        учебно-методические рекомендации, пособия, задачники, методические указания по выполнению практических
         (контрольных) работ и др.
        </li>
{/* ТАБЛИЦА 16.1*/}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="manualIndependedWorkNumber"
          >
             1. № п.п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="manualIndependedWorkNumber"
            name="manualIndependedWorkNumber"
            autoComplete="off"
            value={references.manualIndependedWorkNumber}
            onChange={handleInputChange}
          />
        </li>
{/* ТАБЛИЦА 16.2*/}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="manualIndependedWorkSource"
          >
             2. Ресурс:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="manualIndependedWorkSource"
            name="manualIndependedWorkSource"
            autoComplete="off"
            value={references.manualIndependedWorkSource}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>




{/* 17 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="referencesTechnologies"
          >
             17. Информационные технологии, используемые для реализации учебной дисциплины, включая программное обеспечение и информационно-справочные системы (при необходимости):{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="referencesTechnologies"
            name="referencesTechnologies"
            autoComplete="off"
            value={references.referencesTechnologies}
            onChange={handleInputChange}
          />
        </li>





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

export {References}