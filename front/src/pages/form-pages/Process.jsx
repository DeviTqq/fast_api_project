import React from 'react'
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

const Process = () => {
  const [process, setProcess] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    
    disciplineScope: "",
    certificationForm: "",
    classroomСlassesLectures3rdSemester: "",
    classroomСlassesPractice3rdSemester: "",
    independentWork3semester: "",
    intermediateFormCertification3: "",
    classroomСlassesLectures4rdSemester: "",
    classroomСlassesPractice4rdSemester: "",
    independentWork4semester: "",
    intermediateFormCertification4: "",
    disciplineContentPP: "",
    disciplineContentName: "",
    chapterDisciplineContent : "",
    disciplinesClassesPP: "",
    disciplinesClassesName: "",
    disciplinesClassesLecture: "",
    disciplinesClassesPractice: "",
    disciplinesClassesIndepWork: "",
    disciplinesClassesLab: "",
    methodic: "",
    
  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProcess((prevProcess) => ({
      ...prevProcess,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(process);

    // Очищаем поля после отправки
    setProcess({
      
      
      disciplineScope: "",
      certificationForm: "",
      classroomСlassesLectures3rdSemester: "",
      classroomСlassesPractice3rdSemester: "",
      independentWork3semester: "",
      intermediateFormCertification3: "",
      classroomСlassesLectures4rdSemester: "",
      classroomСlassesPractice4rdSemester: "",
      independentWork4semester: "",
      intermediateFormCertification4: "",
      disciplineContentPP: "",
      disciplineContentName: "",
      chapterDisciplineContent : "",
      disciplinesClassesPP: "",
      disciplinesClassesName: "",
      disciplinesClassesLecture: "",
      disciplinesClassesPractice: "",
      disciplinesClassesIndepWork: "",
      disciplinesClassesLab: "",
      methodic: "",
      
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

        


{/*12 */} 
        <li className="field-block">
          <label className="labelField" htmlFor="disciplineScope">
          12. Объем дисциплины в зачетных единицах/час:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplineScope"
            name="disciplineScope"
            autoComplete="off"
            value={process.disciplineScope}
            onChange={handleInputChange}
          />
        </li>
{/*12.1 */} 
        <li className="field-block">
          <label className="labelField" htmlFor="certificationForm">
            12.1 Форма промежуточной аттестации:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="certificationForm"
            name="certificationForm"
            autoComplete="off"
            value={process.certificationForm}
            onChange={handleInputChange}
          />
        </li>




{/*ТАБЛИЦА 13.1 */} 
       <li style={{marginTop: "50px"}}>ТАБЛИЦА (Виды учебной работы)</li>
       
{/*13.1.1 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="classroomСlassesLectures3rdSemester"
          >
           1. Вид учебной работы (Аудиторные занятия - лекции - 3 семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="classroomСlassesLectures3rdSemester"
            name="classroomСlassesLectures3rdSemester"
            autoComplete="off"
            value={process.classroomСlassesLectures3rdSemester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.2 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="classroomСlassesPractice3rdSemester"
          >
             2. Вид учебной работы (Аудиторные занятия - практика и лабораторные - 3
            семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="classroomСlassesPractice3rdSemester"
            name="classroomСlassesPractice3rdSemester"
            autoComplete="off"
            value={process.classroomСlassesPractice3rdSemester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.3 */}
        <li className="field-block">
          <label className="labelField" htmlFor="independentWork3semester">
          3. Вид учебной работы (Самостоятельная работа - 3 семестр) :{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="independentWork3semester"
            name="independentWork3semester"
            autoComplete="off"
            value={process.independentWork3semester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.4 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="intermediateFormCertification3"
          >
             4. Вид учебной работы (Форма промежуточной аттестации - 3 семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="intermediateFormCertification3"
            name="intermediateFormCertification3"
            autoComplete="off"
            value={process.intermediateFormCertification3}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 13.1.5 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="classroomСlassesLectures4rdSemester"
          >
             5. Вид учебной работы (Аудиторные занятия - лекции - 4 семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="classroomСlassesLectures4rdSemester"
            name="classroomСlassesLectures4rdSemester"
            autoComplete="off"
            value={process.classroomСlassesLectures4rdSemester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.6 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="classroomСlassesPractice4rdSemester"
          >
             6. Вид учебной работы (Аудиторные занятия - практика и лабораторные - 4
            семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="classroomСlassesPractice4rdSemester"
            name="classroomСlassesPractice4rdSemester"
            autoComplete="off"
            value={process.classroomСlassesPractice4rdSemester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.7 */}
        <li className="field-block">
          <label className="labelField" htmlFor="independentWork4semester">
          7. Вид учебной работы (Самостоятельная работа - 4 семестр) :{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="independentWork4semester"
            name="independentWork4semester"
            autoComplete="off"
            value={process.independentWork4semester}
            onChange={handleInputChange}
          />
        </li>
{/*13.1.8 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="intermediateFormCertification4"
          >
             8. Вид учебной работы (Форма промежуточной аттестации - 4 семестр):{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="intermediateFormCertification4"
            name="intermediateFormCertification4"
            autoComplete="off"
            value={process.intermediateFormCertification4}
            onChange={handleInputChange}
          />
        </li>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>
        

        
{/*ТАБЛИЦА 13.2.1 */}
        <li>ТАБЛИЦА (Содержание дисциплины)</li>
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplineContentPP"
          >
             1 .п/п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplineContentPP"
            name="disciplineContentPP"
            autoComplete="off"
            value={process.disciplineContentPP}
            onChange={handleInputChange}
          />
        </li>
{/*13.2.2 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplineContentName"
          >
             2. Наименование раздела дисциплины:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplineContentName"
            name="disciplineContentName"
            autoComplete="off"
            value={process.disciplineContentName}
            onChange={handleInputChange}
          />
        </li>
{/*13.2.3 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="chapterDisciplineContent"
          >
             3. Содержание раздела дисциплины:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="chapterDisciplineContent"
            name="chapterDisciplineContent"
            autoComplete="off"
            value={process.chapterDisciplineContent}
            onChange={handleInputChange}
          />
          
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>



{/* ТАБЛИЦА 13.3 */}
        <li style={{marginTop: "50px"}}>
        Темы (разделы) дисциплины и виды занятий
        </li>
{/*13.3.1 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplinesClassesPP"
          >
             № п.п:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplinesClassesPP"
            name="disciplinesClassesPP"
            autoComplete="off"
            value={process.disciplinesClassesPP}
            onChange={handleInputChange}
          />
        </li>
{/*13.3.2 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplinesClassesName"
          >
             Наименование темы (раздела) дисциплины:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="disciplinesClassesName"
            name="disciplinesClassesName"
            autoComplete="off"
            value={process.disciplinesClassesName}
            onChange={handleInputChange}
          />
        </li>
        <li>Вид занятия (часов):</li>
{/*13.3.3  Lecture*/}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplinesClassesLecture"
          >
             1. Лекция:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplinesClassesLecture"
            name="disciplinesClassesLecture"
            autoComplete="off"
            value={process.disciplinesClassesLecture}
            onChange={handleInputChange}
          />
        </li>
{/*13.3.4 Practice*/}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="intermediateFormCertification4"
          >
             2. Практика:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplinesClassesPractice"
            name="disciplinesClassesPractice"
            autoComplete="off"
            value={process.disciplinesClassesPractice}
            onChange={handleInputChange}
          />
        </li>
{/*13.3.5 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplinesClassesIndepWork"
          >
             3. Самостоятельная работа:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplinesClassesIndepWork"
            name="disciplinesClassesIndepWork"
            autoComplete="off"
            value={process.disciplinesClassesIndepWork}
            onChange={handleInputChange}
          />
        </li>
{/*13.3.6 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplinesClassesLab"
          >
             4. Лабораторная работа:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplinesClassesLab"
            name="disciplinesClassesLab"
            autoComplete="off"
            value={process.disciplinesClassesLab}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>



{/* 14 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="methodic"
          >
             14. Методические указания для обучающихся по освоению дисциплины:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="methodic"
            name="methodic"
            autoComplete="off"
            value={process.methodic}
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

export {Process}