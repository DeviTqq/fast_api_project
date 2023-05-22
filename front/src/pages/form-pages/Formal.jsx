import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Formal = () => {
  const [formal, setFormal] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    codeNameDirection: '',
    specializationProfile: '',
    studentQualification: '',
    educationalForm: '',
    department: '',
    creatorProgramm: '',
    recommended: '',
    academicYear: '',
  });

  // получение данных из localStorage в стейт
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('formal'));
    if (localStorageData) {
      setFormal(localStorageData);
    }
  }, []);

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormal((prevFormal) => ({
      ...prevFormal,
      [name]: value,
    }));



    // добавление данных в localStorage
    localStorage.setItem('formal', JSON.stringify({ ...formal, [name]: value }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formal);
    // Очищаем поля после отправки
    setFormal({
      codeNameDirection: '',
      specializationProfile: '',
      studentQualification: '',
      educationalForm: '',
      department: '',
      creatorProgramm: '',
      recommended: '',
      academicYear: '',
      disciplineTask: '',
      positinInPLO: '',
    });

    // здесь отправляем данные на сервер
    fetch('http://localhost:8000/operations/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formal)
    })
      .then(response => response.json())
      .then(data => {
        // Обработка ответа от сервера
        console.log(data);
      })
      .catch(error => {
        // Обработка ошибки
        console.error(error);
      });

  };

  //   отправка данных из localStorage в indexedDb
  const handleBlur = (event) => {
    event.preventDefault();
    const { name } = event.target;

    console.log(formal[name]);

    if (formal[name]) {
      const request = window.indexedDB.open('myDatabase', 1);
      let db;

      request.onerror = (event) => {
        console.log('Error opening database');
      };

      request.onsuccess = (event) => {
        db = event.target.result;
        const transaction = db.transaction('myStore', 'readwrite');
        const store = transaction.objectStore('myStore');

        store.getAll().onsuccess = function (event) {
          const currentFormalData = event.target.result;

          const localStorageData = JSON.parse(localStorage.getItem('formal'));
          console.log(currentFormalData)
          if (!currentFormalData[name]) {

            const formalData = formal;

            const request = store.add(formalData);

            request.onerror = (event) => {
              console.log('Error adding data to database');
            };

            request.onsuccess = (event) => {
              console.log('Data added to database');
            };
          }
        };
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objectStore = db.createObjectStore('myStore', {
          keyPath: 'id',
          autoIncrement: true,
        });
      };
    }
  };



  return (
    <div>
      <Link className="link" to="/electronics">
        Назад
      </Link>
      <form className="document-form" onSubmit={handleSubmit}>
        <ul>
          <li className="field-block">
            <label className="labelField" htmlFor="codeNameDirection">
              1. Код и наименование направления подготовки/специальности:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="codeNameDirection"
              name="codeNameDirection"
              autoComplete="off"
              value={formal.codeNameDirection}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="specializationProfile">
              2. Профиль подготовки/специализация:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="specializationProfile"
              name="specializationProfile"
              autoComplete="off"
              value={formal.specializationProfile}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="studentQualification">
              3. Квалификация (степень) выпускника:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="studentQualification"
              name="studentQualification"
              autoComplete="off"
              value={formal.studentQualification}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="educationalForm">
              4. Форма обучения:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="educationalForm"
              name="educationalForm"
              autoComplete="off"
              value={formal.educationalForm}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="department">
              5. Кафедра, отвечающая за реализацию дисциплины:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="department"
              name="department"
              autoComplete="off"
              value={formal.department}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 6 */}
          <li className="field-block">
            <label className="labelField" htmlFor="creatorProgramm">
              6. Составители программы:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="creatorProgramm"
              name="creatorProgramm"
              autoComplete="off"
              value={formal.creatorProgramm}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 7 */}
          <li className="field-block">
            <label className="labelField" htmlFor="recommended">
              7. Рекомендована:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="recommended"
              name="recommended"
              autoComplete="off"
              value={formal.recommended}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 8 */}
          <li className="field-block">
            <label className="labelField" htmlFor="academicYear">
              8. Учебный год:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="date"
              id="academicYear"
              name="academicYear"
              autoComplete="off"
              value={formal.academicYear}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 9 */}
        </ul>


        <Stack spacing={2} direction="row">
          <Button className="form-button" type="submit" variant="contained">
            Создать документ
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export { Formal };

