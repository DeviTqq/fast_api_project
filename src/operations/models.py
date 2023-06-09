from sqlalchemy import TIMESTAMP, Column, Integer, MetaData, String, Table

metadata = MetaData()

operation = Table(
    "operation",
    metadata,
    Column("id", Integer, primary_key=True),

    #Страница первая
    # Column("disciplineTechnique", String, nullable=False ),
    # Column("disciplineTechniqueClassroom", String, nullable=False ),
    # Column("evaluationFund", String, nullable=False ),
    # Column("competenceCode", String, nullable=False ),
    # Column("plannedLearning", String, nullable=False ),
    # Column("formationStagesDiscipline", String, nullable=False ),
    # Column("FosAssessment", String, nullable=False ),
    # Column("evaluationCriteria", String, nullable=False ),
    # Column("competenceLevel", String, nullable=False ),
    # Column("ratingScale", String, nullable=False ),
    # Column("questionsList", String, nullable=False ),
    # Column("questionsListPractice", String, nullable=False ),
    # Column("additionalMaterials", String, nullable=False ),

    # Formal
    Column("codeNameDirection", String, nullable=False ),
    Column("specializationProfile", String, nullable=False ),
    Column("studentQualification", String, nullable=False ),
    Column("educationalForm", String, nullable=False ),
    Column("department", String, nullable=False ),
    Column("creatorProgramm", String, nullable=False ),
    Column("recommended", String, nullable=False ),
    Column("academicYear", TIMESTAMP, nullable=False ),

    # Column("disciplineTask", String, nullable=False ),
    # Column("positinInPLO", String, nullable=False ),
    # Column("disciplineTask", String, nullable=False ),
    # Column("positinInPLO", String, nullable=False ),
    # Column("codeResultLearning", String, nullable=False ),
    # Column("competenceName", String, nullable=False ),
    # Column("codesResultLearning", String, nullable=False ),
    # Column("indicatorsResultLearning", String, nullable=False ),
    # Column("ResultLearning", String, nullable=False ),
    # Column("disciplineScope", String, nullable=False ),
    # Column("certificationForm", String, nullable=False ),
    # Column("classroomСlassesLectures3rdSemester", String, nullable=False ),
    # Column("classroomСlassesPractice3rdSemester", String, nullable=False ),
    # Column("independentWork3semester", String, nullable=False ),
    # Column("intermediateFormCertification3", String, nullable=False ),
    # Column("classroomСlassesLectures4rdSemester", String, nullable=False ),
    # Column("classroomСlassesPractice4rdSemester", String, nullable=False ),
    # Column("independentWork4semester", String, nullable=False ),
    # Column("intermediateFormCertification4", String, nullable=False ),
    # Column("disciplineContentPP", String, nullable=False ),
    # Column("disciplineContentName", String, nullable=False ),
    # Column("chapterDisciplineContent ", String, nullable=False ),
    # Column("disciplinesClassesPP", String, nullable=False ),
    # Column("disciplinesClassesName", String, nullable=False ),
    # Column("disciplinesClassesLecture", String, nullable=False ),
    # Column("disciplinesClassesPractice", String, nullable=False ),
    # Column("disciplinesClassesIndepWork", String, nullable=False ),
    # Column("disciplinesClassesLab", String, nullable=False ),
    # Column("methodic", String, nullable=False ),
    # Column("basicLiteraturePP", String, nullable=False ),
    # Column("basicLiteratureSource", String, nullable=False ),
    # Column("additionalLiteraturePP", String, nullable=False ),
    # Column("additionalLiteratureSource", String, nullable=False ),
    # Column("onlineLiteratureNumber", String, nullable=False ),
    # Column("onlineLiteratureSource", String, nullable=False ),
    # Column("manualIndependedWorkNumber", String, nullable=False ),
    # Column("manualIndependedWorkSource", String, nullable=False ),
    # Column("referencesTechnologies", String, nullable=False ),
    
)