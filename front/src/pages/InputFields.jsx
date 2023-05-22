import { useState, useEffect } from "react";
import React from "react";
import { TextField } from "@mui/material";
import "./modules.css/InputField.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'
// import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";

// import data from "./data.json";

const DocumentForm = () => {
  const [formData, setFormData] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    codeNameDirection: "",
    specializationProfile: "",
    input1: "",
    input2: "",
    studentQualification: "",
    educationalForm: "",
    educationalForm: "",
    department: "",
    creatorProgramm: "",
    recommended: "",
    academicYear: "",
    course: "",
    numberPhone: "",
    disciplineTask: "",
    positinInPLO: "",
    codeResultLearning: "",
    competenceName: "",
    codesResultLearning: "",
    indicatorsResultLearning: "",
    ResultLearning: "",
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
    basicLiteraturePP: "",
    basicLiteratureSource: "",
    additionalLiteraturePP: "",
    additionalLiteratureSource: "",
    onlineLiteratureNumber: "",
    onlineLiteratureSource: "",
    manualIndependedWorkNumber: "",
    manualIndependedWorkSource: "",
    referencesTechnologies: "",
    disciplineTechnique: "",
    disciplineTechniqueClassroom: "",
    evaluationFund: "",
    competenceCode: "",
    plannedLearning: "",
    formationStagesDiscipline: "",
    FosAssessment: "",
    evaluationCriteria: "",
    competenceLevel: "",
    ratingScale: "",
    questionsList: "",
    questionsListPractice: "",
    additionalMaterials: "",
  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Очищаем поля после отправки
    setFormData({
      codeNameDirection: "",
      specializationProfile: "",
      input1: "",
      input2: "",
      studentQualification: "",
      educationalForm: "",
      department: "",
      creatorProgramm: "",
      recommended: "",
      academicYear: "",
      course: "",
      numberPhone: "",
      disciplineTask: "",
      positinInPLO: "",
      codeResultLearning: "",
      competenceName: "",
      codesResultLearning: "",
      indicatorsResultLearning: "",
      ResultLearning: "",
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
      basicLiteraturePP: "",
      basicLiteratureSource: "",
      additionalLiteraturePP: "",
      additionalLiteratureSource: "",
      onlineLiteratureNumber: "",
      onlineLiteratureSource: "",
      manualIndependedWork: "",
      manualIndependedWorkNumber: "",
      referencesTechnologies: "",
      disciplineTechnique: "",
      disciplineTechniqueClassroom: "",
      evaluationFund: "",
      competenceCode: "",
      plannedLearning: "",
      formationStagesDiscipline: "",
      FosAssessment: "",
      evaluationCriteria: "",
      competenceLevel: "",
      ratingScale: "",
      questionsList: "",
      questionsListPractice: "",
      additionalMaterials: "",
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
          <label className="labelField" htmlFor="codeNameDirection">
            1. Код и наименование направления подготовки/специальности:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="codeNameDirection"
            name="codeNameDirection"
            autoComplete="off"
            value={formData.codeNameDirection}
            onChange={handleInputChange}
          />
        </li>

        {/* <div>  
        <label htmlFor="input1">Input 1:</label>
        <input type="text" id="input1" name="input1" onChange={handleInputChange} />
      </div>
      {formData.input2 && (
        <div>
          <label htmlFor="input2">Input 2:</label>
          <input type="text" id="input2" name="input2" onChange={handleInputChange} />
        </div>
      )}
      <button type="button" onClick={handleAddInput}>
        Add field
      </button> */}


{/* 2 */}
        <li className="field-block">
          <label className="labelField" htmlFor="specializationProfile">
          2. Профиль подготовки/специализация:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="specializationProfile"
            name="specializationProfile"
            autoComplete="off"
            value={formData.specializationProfile}
            onChange={handleInputChange}
          />
        </li>


{/* 3 */}
        <li className="field-block">
          <label className="labelField" htmlFor="studentQualification">
          3. Квалификация (степень) выпускника:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="studentQualification"
            name="studentQualification"
            autoComplete="off"
            value={formData.studentQualification}
            onChange={handleInputChange}
          />
        </li>


{/* 4 */}
        <li className="field-block">
          <label className="labelField" htmlFor="educationalForm">
          4. Форма обучения:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="educationalForm"
            name="educationalForm"
            autoComplete="off"
            value={formData.educationalForm}
            onChange={handleInputChange}
          />
        </li>


{/* 5 */}
        <li className="field-block">
          <label className="labelField" htmlFor="department">
          5. Кафедра, отвечающая за реализацию дисциплины:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="department"
            name="department"
            autoComplete="off"
            value={formData.department}
            onChange={handleInputChange}
          />
        </li>


{/* 6 */}
        <li className="field-block">
          <label className="labelField" htmlFor="creatorProgramm">
          6. Составители программы:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="creatorProgramm"
            name="creatorProgramm"
            autoComplete="off"
            value={formData.creatorProgramm}
            onChange={handleInputChange}
          />
        </li>


{/* 7 */}
        <li className="field-block">
          <label className="labelField" htmlFor="recommended">
          7. Рекомендована:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="recommended"
            name="recommended"
            autoComplete="off"
            value={formData.recommended}
            onChange={handleInputChange}
          />
        </li>


{/* 8 */}
        <li className="field-block">
          <label className="labelField" htmlFor="academicYear">
          8. Учебный год:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="date"
            id="academicYear"
            name="academicYear"
            autoComplete="off"
            value={formData.academicYear}
            onChange={handleInputChange}
          />
        </li>


{/* 9 */}
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
            value={formData.disciplineTask}
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
            value={formData.positinInPLO}
            onChange={handleInputChange}
          />
        </li>



{/*ТАБЛИЦА 11 */}
        <li style={{marginTop: "50px"}}>
          Планируемые результаты обучения по дисциплине/модулю (знания, умения,
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
            value={formData.codeResultLearning}
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
            value={formData.competenceName}
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
            value={formData.codesResultLearning}
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
            value={formData.indicatorsResultLearning}
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
            value={formData.ResultLearning}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>


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
            value={formData.disciplineScope}
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
            value={formData.certificationForm}
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
            value={formData.classroomСlassesLectures3rdSemester}
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
            value={formData.classroomСlassesPractice3rdSemester}
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
            value={formData.independentWork3semester}
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
            value={formData.intermediateFormCertification3}
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
            value={formData.classroomСlassesLectures4rdSemester}
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
            value={formData.classroomСlassesPractice4rdSemester}
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
            value={formData.independentWork4semester}
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
            value={formData.intermediateFormCertification4}
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
            value={formData.disciplineContentPP}
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
            value={formData.disciplineContentName}
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
            value={formData.chapterDisciplineContent}
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
            value={formData.disciplinesClassesPP}
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
            value={formData.disciplinesClassesName}
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
            value={formData.disciplinesClassesLecture}
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
            value={formData.disciplinesClassesPractice}
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
            value={formData.disciplinesClassesIndepWork}
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
            value={formData.disciplinesClassesLab}
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
            value={formData.methodic}
            onChange={handleInputChange}
          />
        </li>


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
            value={formData.basicLiteraturePP}
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
            value={formData.basicLiteratureSource}
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
            value={formData.additionalLiteraturePP}
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
            value={formData.additionalLiteratureSource}
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
            value={formData.onlineLiteratureNumber}
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
            value={formData.onlineLiteratureSource}
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
            value={formData.manualIndependedWorkNumber}
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
            value={formData.manualIndependedWorkSource}
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
            value={formData.referencesTechnologies}
            onChange={handleInputChange}
          />
        </li>

{/* 18 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplineTechnique"
          >
             18. Материально-техническое обеспечение дисциплины:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="disciplineTechnique"
            name="disciplineTechnique"
            autoComplete="off"
            value={formData.disciplineTechnique}
            onChange={handleInputChange}
          />
        </li>
{/* 18.1 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="disciplineTechniqueClassroom"
          >
             18.1 Кабинет:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="number"
            id="disciplineTechniqueClassroom"
            name="disciplineTechniqueClassroom"
            autoComplete="off"
            value={formData.disciplineTechniqueClassroom}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>



{/*19 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="evaluationFund"
          >
             19. Фонд оценочных средств::{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="evaluationFund"
            name="evaluationFund"
            autoComplete="off"
            value={formData.evaluationFund}
            onChange={handleInputChange}
          />
        </li>

        
{/*ТАБЛИЦА 19.1.1 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="competenceCode"
          >
             1. Код и содержание компетенции или ее части:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="competenceCode"
            name="competenceCode"
            autoComplete="off"
            value={formData.competenceCode}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 19.1.2 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="plannedLearning"
          >
             2. Планируемые результаты обучения (показатели 
             достижения заданного уровня освоения компетенции посредством формирования знаний, умений, навыков):{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="plannedLearning"
            name="plannedLearning"
            autoComplete="off"
            value={formData.plannedLearning}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 19.1.3 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="formationStagesDiscipline"
          >
             3. Этапы формирования компетенции (разделы (темы) дисциплины или модуля и
              их наименование):{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="formationStagesDiscipline"
            name="formationStagesDiscipline"
            autoComplete="off"
            value={formData.formationStagesDiscipline}
            onChange={handleInputChange}
          />
        </li>
{/*ТАБЛИЦА 19.1.4 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="FosAssessment "
          >
             4. ФОС (средства оценивания):{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="FosAssessment"
            name="FosAssessment"
            autoComplete="off"
            value={formData.FosAssessment}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>



{/* 19.2 */}
        <li>19.2 Описание критериев и шкалы оценивания компетенций (результатов обучения) 
          при промежуточной аттестации. Для оценивания результатов обучения на экзамене используются следующие показатели:
          1) знание учебного материала и владение понятийным аппаратом операционных систем;
          2) умение связывать теорию с практикой;
          3) умение иллюстрировать ответ примерами, фактами, данными научных исследований в области разработки операционных систем;
        </li>
{/*ТАБЛИЦА 19.2.1 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="evaluationCriteria"
          >
             1.Критерии оценивания компетенций:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="evaluationCriteria"
            name="evaluationCriteria"
            autoComplete="off"
            value={formData.evaluationCriteria}
            onChange={handleInputChange}
          />
        </li>
{/* 19.2.2 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="competenceLevel"
          >
             2. Уровень сформированности компетенций:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="competenceLevel"
            name="competenceLevel"
            autoComplete="off"
            value={formData.competenceLevel}
            onChange={handleInputChange}
          />
        </li>
{/* 19.2.3 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="ratingScale"
          >
             3. Шкала оценок:{" "}
          </label>
          <input
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="ratingScale"
            name="ratingScale"
            autoComplete="off"
            value={formData.ratingScale}
            onChange={handleInputChange}
          />
        </li>
        <Button>Добавить форму</Button>
        <li style={{marginBottom: "50px"}}>Таблица закончена</li>




{/* 19.3 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="questionsList"
          >
             19.3 Перечень вопросов к экзамену::{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="questionsList"
            name="questionsList"
            autoComplete="off"
            value={formData.questionsList}
            onChange={handleInputChange}
          />
        </li>

{/* 19.4 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="questionsListPractice"
          >
             19.4 Перечень практических заданий:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="questionsListPractice"
            name="questionsListPractice"
            autoComplete="off"
            value={formData.questionsListPractice}
            onChange={handleInputChange}
          />
        </li>

{/* 19.5 */}
        <li className="field-block">
          <label
            className="labelField"
            htmlFor="additionalMaterials"
          >
             19.5 Методические материалы, определяющие процедуры оценивания знаний, умений, навыков и (или) опыта деятельности, 
             характеризующих этапы формирования компетенций:{" "}
          </label>
          <textarea
            style={{ backgroundColor: "#cccccc", width: "40%" }}
            type="text"
            id="additionalMaterials"
            name="additionalMaterials"
            autoComplete="off"
            value={formData.additionalMaterials}
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

export { DocumentForm };
