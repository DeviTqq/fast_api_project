from datetime import datetime

from pydantic import BaseModel


class OperationCreate(BaseModel):
    id: int

    # disciplineTechnique: str
    # disciplineTechniqueClassroom: str
    # evaluationFund: str
    # competenceCode: str
    # plannedLearning: str
    # formationStagesDiscipline: str
    # FosAssessment: str
    # evaluationCriteria: str
    # competenceLevel: str
    # ratingScale: str
    #questionsList: str
    #questionsListPractice: str
    #additionalMaterials: str

    #Formal

    codeNameDirection: str
    specializationProfile: str
    studentQualification: str
    educationalForm: str
    department: str
    creatorProgramm: str
    recommended: str
    academicYear: str

    #disciplineTask: str
    #positinInPLO: str
    #disciplineTask: str
    #positinInPLO: str
    #codeResultLearning: str
    #competenceName: str
    #codesResultLearning: str
    #indicatorsResultLearning: str
    #ResultLearning: str
    #disciplineScope: str
    #certificationForm: str
    #classroomСlassesLectures3rdSemester: str
    #classroomСlassesPractice3rdSemester: str
    #independentWork3semester: str
    #intermediateFormCertification3: str
    #classroomСlassesLectures4rdSemester: str
    #classroomСlassesPractice4rdSemester: str
    #independentWork4semester: str
    #intermediateFormCertification4: str
    #disciplineContentPP: str
    #disciplineContentName: str
    #chapterDisciplineContent: str
    #disciplinesClassesPP: str
    #disciplinesClassesName: str
    #disciplinesClassesLecture: str
    #disciplinesClassesPractice: str
    #disciplinesClassesIndepWork: str
    #disciplinesClassesLab: str
    #methodic: str
    #basicLiteraturePP: str
    #basicLiteratureSource: str
    #additionalLiteraturePP: str
    #additionalLiteratureSource: str
    #onlineLiteratureNumber: str
    #onlineLiteratureSource: str
    #manualIndependedWorkNumber: str
    #manualIndependedWorkSource: str
    #referencesTechnologies: str