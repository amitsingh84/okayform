import { HttpBaseService } from '../../../shared/services/http-client/http-base-service';
import { apiConstants } from '../config/apiConstants';
// const header = HttpBaseService.getBaseHeaders()

// const deleteInterruptedTestCandidates = (body) => {
//     const url = apiConstants.deleteInterruptedTestCandidates
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
const activateUser = () => {
        const url = apiConstants;
        const headers = HttpBaseService.getBaseHeaders()
        return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
    };
    
// const interruptedTestCandidates = (body) => {
//     const url = apiConstants.interruptedTestCandidates + "?jobid=" + body
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const employeeBulkInsert = (body) => {
//     const url = apiConstants.employeeBulkInsert
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getAllCandidates = (body) => {
//     const url = apiConstants.getAllCandidates
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const validateJobProcess = (body) => {
//     const url = apiConstants.validateJobProcess
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getAllMasterDepartments = (body) => {
//     const url = apiConstants.getAllMasterDepartments
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const addDepartment = (body) => {
//     const url = apiConstants.addDepartment
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const deleteDepartment = (body) => {
//     const url = apiConstants.deleteDepartment
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getAllContractors = () => {
//     const url = apiConstants.getAllContractors
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const addContractor = (body) => {
//     const url = apiConstants.addContractor
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const deleteContractor = (body) => {
//     const url = apiConstants.deleteContractor
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const setEmployeeHRMEmployeCode = (body) => {
//     const url = apiConstants.setEmployeeHRMEmployeCode
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getDepartmentWithHeads = () => {
//     const url = apiConstants.getDepartmentWithHeads
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const validationQuestion = (body) => {
//     const url = apiConstants.validationQuestion
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const isStageTest = (body) => {
//     const url = apiConstants.isStageTest
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, body, headers, null);
// }
// const getAllDepartmentHead = () => {
//     const url = apiConstants.getAllDepartmentHead
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const candidateStageReDeployment = (body) => {
//     const url = apiConstants.candidateStageReDeployment
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const deleteInvitedUser = (body) => {
//     const url = apiConstants.deleteInvitedUser
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getCandidateInterviewResult = (body) => {
//     const url = apiConstants.getCandidateInterviewResult
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getCandidateTestResult = (body) => {
//     const url = apiConstants.getCandidateTestResult
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const addJobRoundPredefine = (body) => {
//     const url = apiConstants.addJobRoundPredefine
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getRoundPredefineQuestion = (body) => {
//     const url = apiConstants.getRoundPredefineQuestion
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, body, headers, null);
// }

// const getWorkerCertificate = (body) => {
//     const url = apiConstants.getWorkerCertificate
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const createJobMaster = (body) => {
//     const url = apiConstants.createJobMaster
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getAllJobsFromMaster = () => {
//     const url = apiConstants.getAllJobsFromMaster
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const getJobFromMasterById = (body) => {
//     const url = apiConstants.getJobFromMasterById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const deleteJobMaster = (body) => {
//     const url = apiConstants.deleteJobMaster
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const issueCertificate = (body) => {
//     const url = apiConstants.issueCertificate
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getCertificateById = (body) => {
//     const url = apiConstants.getCertificateById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);

// }

// const getDashboardData = () => {
//     const url = apiConstants.getDashboardData
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const getDashboardTotalJoining = () => {
//     const url = apiConstants.getAllJoined
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const getDashboardTotalApplyLeave = () => {
//     const url = apiConstants.getAllApplyLeave
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }


// const deleteTest = (body) => {
//     const url = apiConstants.deleteTest
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const deleteStation = (body) => {
//     const url = apiConstants.deleteStation
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getStationById = (body) => {
//     const url = apiConstants.getStationById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, body);
// }

// const getAllStations = () => {
//     const url = apiConstants.getAllStations
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const addEditStation = (body) => {
//     //const url = "https://localhost:44305/hrapi/line/addLine"
//     const url = apiConstants.addStation
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const deleteProcess = (body) => {
//     const url = apiConstants.deleteProcess
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getProcessById = (body) => {
//     const url = apiConstants.getProcessById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, body);
// }

// const getAllProcesses = () => {
//     const url = apiConstants.getAllProcesses
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const addEditProcess = (body) => {
//     //const url = "https://localhost:44305/hrapi/line/addLine"
//     const url = apiConstants.addProcess
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const deleteLine = (body) => {
//     const url = apiConstants.deleteLine
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getLineById = (body) => {
//     const url = apiConstants.getLineById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, body);
// }

// const getAllLines = () => {
//     const url = apiConstants.getAllLines
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const addEditLine = (body) => {
//     //const url = "https://localhost:44305/hrapi/line/addLine"
//     const url = apiConstants.addEditLine
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getAllTemplates = () => {
//     //const url = "https://localhost:44305/hrapi/Job/JobTemplates"
//     const url = apiConstants.getAllTemplates
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const getAllLeaveRequests = (body) => {
//     //const url = "https://localhost:44305/Hrapi/leave/getworkerallApplyLeave"
//     const url = apiConstants.getAllLeaveRequests
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const leaveAction = (body) => {
//     //const url = "https://localhost:44305/Hrapi/leave/workerApplyLeaveAction"
//     const url = apiConstants.leaveAction
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const markInactive = (id, status) => {
//     //const url = "https://localhost:44305/hrapi/test/testAction?id=&status="
//     const url = apiConstants.markInactive + id + "&status=" + status
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, null);
// }
// const saveNewTest = (body) => {
//     //const url = "https://localhost:44305/hrapi/test/createTest"
//     const url = apiConstants.saveNewTest
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getAllCriterias = () => {
//     //const url = "https://localhost:44305/hrapi/criteria/getAllCriteria"
//     const url = apiConstants.getAllCriterias
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const getAllLanguages = () => {
//     //const url = "https://localhost:44305/api/Language/getLanguages"
//     const url = apiConstants.getAllTestLanguages
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const getAllTestCategories = () => {
//     //const url = "https://localhost:44305/hrapi/TestCategory/getAllTestCategory"
//     const url = apiConstants.getAllTestCategories
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const saveJobTemplate = (body) => {
//     //const url = "https://localhost:44305/hrapi/Job/AddJobTemplate"
//     const url = apiConstants.saveJobTemplate
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const saveJobData = (body) => {
//     //const url = "https://localhost:44305/hrapi/Job/SaveJob"
//     const url = apiConstants.saveTemplateData
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const deleteJobRequestByID = (body) => {
//     //const url = "https://localhost:44305/hrapi/Job/DeleteJobRequest?id="
//     const url = apiConstants.deleteJobRequestByID
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getJobRequestByID = (body) => {
//     //const url = "https://localhost:44305/HRapi/job/getJobRequestByID?id=1"
//     const url = apiConstants.getJobRequestByID + body
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

// const getJobRequestProcessModel = (body) => {
//     //const url = "https://localhost:44305/HRapi/job/getJobRequestByID?id=1"
//     const url = apiConstants.getJobRequestProcessModel + body
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const approveRejectJobRequest = (body) => {
//     //const url = "https://localhost:44305/hrapi/job/jobAction"
//     const url = apiConstants.jobStatusAction
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const createNewJob = (body) => {
//     //const url = "https://localhost:44305/hrapi/job/createJobRequest"
//     const url = apiConstants.createNewJob
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getAllDepartments = () => {
//     //const url = "https://localhost:44305/HRapi/Branch/getAllBranchs"
//     const url = apiConstants.getAllDepartments
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const resendInvitation = (body) => {
//     //const url = "https://localhost:44305/HRapi/adminhr/employeesAction"
//     const url = apiConstants.resendInviteById
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);

// }
// const getTestByID = (body) => {
//     //const url = "https://localhost:44305/hrapi/test/getTestByID?id="
//     const url = apiConstants.getTestById + body
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);

// }
// const getAllTests = (body) => {
//     //const url = "https://localhost:44305/HRapi/Test/getAllTest";
//     const url = apiConstants.getAllTests
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);

// }
// const sendInvitation = (body) => {
//     // const url = "https://localhost:44305/HRapi/adminhr/sendInventation"
//     const url = apiConstants.sendInvitation;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const getAllRoles = () => {
//     // const url = "https://localhost:44305/hrapi/Role/getAllRoles"
//     const url = apiConstants.getAllRoles;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const getJobById = (body) => {
//     // const url = "https://localhost:44305/HRapi/job/getJobRequestByID?id="
//     const url = apiConstants.getJobById + body //appending ID to the URL
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }
// const getAllJobRequests = (body) => {
//     // const url = "https://localhost:44305/hrapi/Job/getAllJobRequest"
//     const url = apiConstants.getAllJobRequests;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }

// const getUsers = (body) => {
//     // const url = https://localhost:44305/HRapi/adminhr/getEmployees
//     const url = apiConstants.getAllUsers;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const getQuestiontype = () => {

//     const url = apiConstants.getAllQuestiontype;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// };

// const saveQuestion = (body) => {
//     const url = apiConstants.saveQuestion;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const deleteQuestionoption = (body) => {

//     const url = apiConstants.deleteOption;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };
// const getTestQuestionList = (param) => {

//     const url = apiConstants.sidetestQuestionsList;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, param, headers, null);
// };

// const getQuestionByID = (param) => {
//     const url = apiConstants.getQuestionDetailsById;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, param, headers, null);
// };

// const fillTestQuestions = (param) => {
//     const url = apiConstants.filltestQuestions;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, param, headers, null);
// };

// const deleteQuestion = (body) => {
//     const url = apiConstants.deleteQuestion;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };


// const changeQuestionStatus = (body) => {
//     const url = apiConstants.DeActivQuestion;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };




// const getcandidateRoundSummary = (body) => {
//     const url = apiConstants.getcandidateRoundSummary;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const fillDepartments = () => {
//     const url = apiConstants.departments;
//     const headers = HttpBaseService.getBaseHeaders()
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// };




// const getHeadersForGrids = (id) => {
//     if (id === 'A001' || id === 'I001' || id === 'C001' || id === 'S001') {
//         return [{
//                 text: "Candidate Name",
//                 align: "start",
//                 sortable: true,
//                 value: "name",
//                 filtersApplied: false,
//                 filterApiName: "name",
//                 filters: {
//                     branch: "",
//                     productCodeSort: "",
//                 },
//             },
//             {
//                 text: "Aadhaar",
//                 align: "start",
//                 sortable: true,
//                 value: "aadhar",
//                 filtersApplied: false,
//                 filterApiName: "aadhar",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Contractor Name",
//                 align: "start",
//                 sortable: true,
//                 value: "contractorName",
//                 filtersApplied: false,
//                 filterApiName: "contractorName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Job Name",
//                 align: "start",
//                 sortable: true,
//                 value: "jobName",
//                 filtersApplied: false,
//                 filterApiName: "jobName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Test Name",
//                 align: "start",
//                 sortable: true,
//                 value: "testName",
//                 filtersApplied: false,
//                 filterApiName: "testName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Department",
//                 align: "start",
//                 sortable: true,
//                 value: "branchName",
//                 filtersApplied: false,
//                 filterApiName: "branchName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Date Of Joining",
//                 align: "start",
//                 sortable: true,
//                 value: "dateOfJoining",
//                 filtersApplied: false,
//                 filterApiName: "dateOfJoining",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Employee Code",
//                 align: "start",
//                 sortable: true,
//                 value: "hrmEmpCode",
//                 filtersApplied: false,
//                 filterApiName: "hrmEmpCode",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Salary",
//                 align: "start",
//                 sortable: true,
//                 value: "salary",
//                 filtersApplied: false,
//                 filterApiName: "salary",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Qualification",
//                 align: "start",
//                 sortable: true,
//                 value: "qualification",
//                 filtersApplied: false,
//                 filterApiName: "qualification",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Current Location",
//                 align: "start",
//                 sortable: true,
//                 value: "currentAddress",
//                 filtersApplied: false,
//                 filterApiName: "currentAddress",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Home Town",
//                 align: "start",
//                 sortable: true,
//                 value: "address",
//                 filtersApplied: false,
//                 filterApiName: "address",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             }, {
//                 text: "Mobile No.",
//                 align: "start",
//                 sortable: true,
//                 value: "mobileNo",
//                 filtersApplied: false,
//                 filterApiName: "mobileNo",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Stage Name",
//                 align: "start",
//                 sortable: true,
//                 value: "stage",
//                 filtersApplied: false,
//                 filterApiName: "stage",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Line Name",
//                 align: "start",
//                 sortable: true,
//                 value: "modelName",
//                 filtersApplied: false,
//                 filterApiName: "modelName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Process Name",
//                 align: "start",
//                 sortable: true,
//                 value: "process",
//                 filtersApplied: false,
//                 filterApiName: "process",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Station Name",
//                 align: "start",
//                 sortable: true,
//                 value: "station",
//                 filtersApplied: false,
//                 filterApiName: "station",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Score",
//                 align: "start",
//                 value: "score",
//                 sortable: false,
//                 groupable: false,
//                 filters: {},
//             },
//             {
//                 text: "Status",
//                 align: "start",
//                 value: "status",
//                 sortable: false,
//                 groupable: false,
//                 filters: {},
//             },
//             {
//                 text: "Created On",
//                 align: "start",
//                 value: "createDate",
//                 sortable: true,
//                 groupable: false,
//                 filterApiName: "createON",
//                 filters: {
//                     branch: "",
//                     productCodeSort: "",
//                 },
//             },
//             {
//                 text: "Actions",
//                 align: "start",
//                 value: "action",
//                 sortable: false,
//                 groupable: false,
//                 filters: {},
//             },
//         ];
//     }
//     // if (id === 'S001') {
//     //     return [{
//     //             text: "Candidate Name",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "name",
//     //             filtersApplied: false,
//     //             filterApiName: "name",
//     //             filters: {
//     //                 branch: "",
//     //                 productCodeSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Aadhaar",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "aadhar",
//     //             filtersApplied: false,
//     //             filterApiName: "aadhar",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Contractor Name",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "contractorName",
//     //             filtersApplied: false,
//     //             filterApiName: "contractorName",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Job Name",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "jobName",
//     //             filtersApplied: false,
//     //             filterApiName: "jobName",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Test Name",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "testName",
//     //             filtersApplied: false,
//     //             filterApiName: "testName",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Department",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "branchName",
//     //             filtersApplied: false,
//     //             filterApiName: "branchName",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Deployment Date",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "deploymentdate",
//     //             filtersApplied: false,
//     //             filterApiName: "deploymentDate",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Test Date",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "testduedate",
//     //             filtersApplied: false,
//     //             filterApiName: "testDueDate",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Score",
//     //             align: "center",
//     //             value: "score",
//     //             sortable: false,
//     //             groupable: false,
//     //             filters: {},
//     //         },
//     //         {
//     //             text: "Stage Name",
//     //             align: "start",
//     //             sortable: true,
//     //             value: "stage",
//     //             filtersApplied: false,
//     //             filterApiName: "stage",
//     //             filters: {
//     //                 productName: "",
//     //                 productNameSort: "",
//     //             },
//     //         },
//     //         {
//     //             text: "Status",
//     //             align: "center",
//     //             value: "status",
//     //             sortable: false,
//     //             groupable: false,
//     //             filters: {},
//     //         },
//     //         {
//     //             text: "Actions",
//     //             align: "center",
//     //             value: "action",
//     //             sortable: false,
//     //             groupable: false,
//     //             filters: {},
//     //         },
//     //     ];
//     // }
//     if (id === 'CRT001') {
//         return [{
//                 text: "Candidate Name",
//                 align: "start",
//                 sortable: true,
//                 value: "name",
//                 filtersApplied: false,
//                 filterApiName: "name",
//                 filters: {
//                     branch: "",
//                     productCodeSort: "",
//                 },
//             },
//             {
//                 text: "Aadhaar",
//                 align: "start",
//                 sortable: true,
//                 value: "aadhar",
//                 filtersApplied: false,
//                 filterApiName: "aadhar",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Contractor Name",
//                 align: "start",
//                 sortable: true,
//                 value: "contractorName",
//                 filtersApplied: false,
//                 filterApiName: "contractorName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Job Name",
//                 align: "start",
//                 sortable: true,
//                 value: "jobName",
//                 filtersApplied: false,
//                 filterApiName: "jobName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Department",
//                 align: "start",
//                 sortable: true,
//                 value: "branchName",
//                 filtersApplied: false,
//                 filterApiName: "branchName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Deployment Date",
//                 align: "start",
//                 sortable: true,
//                 value: "deploymentdate",
//                 filtersApplied: false,
//                 filterApiName: "deploymentdate",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Stage Name",
//                 align: "start",
//                 sortable: true,
//                 value: "stage",
//                 filtersApplied: false,
//                 filterApiName: "stageName",
//                 filters: {
//                     productName: "",
//                     productNameSort: "",
//                 },
//             },
//             {
//                 text: "Actions",
//                 align: "center",
//                 value: "action",
//                 sortable: false,
//                 groupable: false,
//                 filters: {},
//             },
//         ];
//     }
// }

// const CandidateRoundScore = (body) => {
//     // const url = "https://localhost:44305/HRapi/adminhr/sendInventation"
//     const url = apiConstants.CandidateRoundScore;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const CandidateRoundAction = (body) => {
//     // const url = "https://localhost:44305/HRapi/adminhr/sendInventation"
//     const url = apiConstants.candidateRoundEvalution;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// }
// const findCandidatebyAadhar = (body) => {
//     const url = apiConstants.searchCandidate;
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, body, null, null);
// };

// const getcandidateInterViewDetails = (body) => {
//     const url = apiConstants.getcandidateInterViewDetails;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const saveCandidateInterView = (body) => {
//     const url = apiConstants.saveCandidateInterView;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const saveCandidateCommonTest = (body) => {
//     const url = apiConstants.candidateCommonTestEvaluation;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const candidateStageDeployment = (body) => {
//     const url = apiConstants.candidateStageDeployment;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const candidateOJTRecords = (body) => {
//     const url = apiConstants.candidateOJTRecords;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const savecandidateOJTRecords = (body) => {
//     const url = apiConstants.savecandidateOJTRecords;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };


// const getWorkerDeplyDetails = (body) => {
//     const url = apiConstants.getWorkerDeplyDetails;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };



// const getCandidateAnswer = (body) => {
//     const url = apiConstants.getCandidateAnswer;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };

// const getCandidateInterviewAnswer = (body) => {
//     const url = apiConstants.getCandidateInterviewAnswer;
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.POST, null, headers, body);
// };


// const models = () => {
//     const url = apiConstants.model
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, null, null);
// };

// const stages = () => {
//     const url = apiConstants.stage;
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, null, null);
// };


// const getStatusByJobRound = (body) => {
//     const url = apiConstants.getStatusByJobRound
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, body, headers, null);
// };
// const modelProcess = (param) => {
//     const url = apiConstants.modelProcess;
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, param, null, null);
// };
// const processStation = (param) => {
//     const url = apiConstants.processStations;
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, param, null, null);
// };

// const getInterviewer = () => {
//     //const url = "https://localhost:44305/hrapi/criteria/getAllCriteria"
//     const url = apiConstants.getInterviewer
//     const headers = header
//     return HttpBaseService.processRequest(url, HttpBaseService.GET, null, headers, null);
// }

export default {
    activateUser
    // deleteInterruptedTestCandidates,
    // interruptedTestCandidates,
    // isStageTest,
    // validationQuestion,
    // getDepartmentWithHeads,
    // setEmployeeHRMEmployeCode,
    // getAllCandidates,
    // getUsers,
    // getAllJobRequests,
    // getJobById,
    // getCandidateAnswer,
    // getCandidateInterviewAnswer,
    // getAllRoles,
    // sendInvitation,
    // getAllTests,
    // getTestByID,
    // validateJobProcess,
    // employeeBulkInsert,
    // resendInvitation,
    // getAllDepartments,
    // createNewJob,
    // approveRejectJobRequest,
    // getJobRequestByID,
    // deleteJobRequestByID,
    // saveJobData,
    // saveJobTemplate,
    // getAllTestCategories,
    // getAllLanguages,
    // getHeadersForGrids,
    // CandidateRoundScore,
    // getAllCriterias,
    // saveNewTest,
    // markInactive,
    // saveCandidateCommonTest,
    // models,
    // stages,
    // modelProcess,
    // processStation,
    // candidateStageDeployment,
    // candidateOJTRecords,
    // savecandidateOJTRecords,
    // getWorkerDeplyDetails,
    // leaveAction,
    // getAllLeaveRequests,
    // getJobRequestProcessModel,
    // getQuestiontype,
    // saveQuestion,
    // getTestQuestionList,
    // getQuestionByID,
    // getAllTemplates,
    // deleteQuestionoption,
    // fillTestQuestions,
    // deleteQuestion,
    // changeQuestionStatus,
    // CandidateRoundAction,
    // getAllLines,
    // getLineById,
    // addEditLine,
    // deleteLine,
    // getAllProcesses,
    // getProcessById,
    // addEditProcess,
    // deleteProcess,
    // getAllStations,
    // getStationById,
    // addEditStation,
    // deleteStation,
    // findCandidatebyAadhar,
    // getcandidateRoundSummary,
    // getcandidateInterViewDetails,
    // saveCandidateInterView,
    // fillDepartments,
    // deleteTest,
    // getDashboardData,
    // getDashboardTotalJoining,
    // getDashboardTotalApplyLeave,
    // getCertificateById,
    // issueCertificate,
    // getAllJobsFromMaster,
    // getJobFromMasterById,
    // deleteJobMaster,
    // createJobMaster,
    // getInterviewer,
    // getWorkerCertificate,
    // getStatusByJobRound,
    // getRoundPredefineQuestion,
    // getAllDepartmentHead,
    // getAllContractors,
    // getAllMasterDepartments,
    // addDepartment,
    // deleteDepartment,
    // addContractor,
    // deleteContractor,
    // addJobRoundPredefine,
    // getCandidateTestResult,
    // getCandidateInterviewResult,
    // deleteInvitedUser,
    // candidateStageReDeployment
};