const students = [
    { name: "jessika", uid: 1 },
    { name: "vinny", uid: 2 },
    { name: "meg", uid: 3 },
    { name: "jaye", uid: 4 },
    { name: "corey", uid: 5 },
    { name: "adam", uid: 6 },
    { name: "rokhaya", uid: 7 },
    { name: "peter", uid: 8 },
    { name: "mauro", uid: 9 },
];

const jobAssignments = [
    { taskName: "fix github issue 1322", uid: 9 },
    { taskName: "fix github issue 5666", uid: 8 },
    { taskName: "fix frontend issue 123121", uid: 7 },
    { taskName: "fix vscode issue 992223", uid: 6 },
    { taskName: "fix html issue layout", uid: 5 },
    { taskName: "fix dc issue 1323122", uid: 4 },
    { taskName: "fix backend issue 2", uid: 3 },
    { taskName: "fix github issue 130022", uid: 2 },
    { taskName: "fix github issue 444", uid: 1 },
    { taskName: "breakfast", uid: 3 },
    { taskName: "lunch", uid: 2 },
    { taskName: "dinner", uid: 1 },
];

  // const newStudentAssignemnts = [
  //     {name: "jessika", uid: 1, taskName: "fix github issue 444", assignedTask: true},
  // ]

// compare the two objects by looping and looking for same "uid"
// loop through array 1 to get individual element
// loop through object to get uid?

// if uid = uid
// merge the corresponding student "name" and task into one object
// jobass.merge(name)



// =============== my answer =================
// const assignment = (array1,array2) =>{
//     for (let element of array1){
//         if (array1.object.value[1] === array2.object.value[1]){
//             array2.merge(element.value[0])
//             console.log(array2)
//         }
//     }
// }
// assignment(students,jobAssignments)

// ================== correct answer =====================

// const formatData = (students, jobAssignments) => {
//     jobAssignments.sort((a, b) => a.uid - b.uid);
//     const formattedStudents = students.map((student, index) => {
//       if (student.uid === jobAssignments[index].uid) {
//         const formattedStudent = { ...student, ...jobAssignments[index] };
//         return formattedStudent;
//       }
//     });
//     return formattedStudents;
//   };

// loop through array 1
// loop through array 2
// compare uid values
// assign taskname to corresponding student and uid

// const jobAss = (students,jobAssignments) =>{
//     const formattedData = []
//     for (let student of students){
//         const newStudents = {
//             ...student,
//             jobs:[],
//             assignedTasks: true
//         }
//         for (let job of jobAssignments){
//             if (job.uid === student.uid){
//                 newStudents.jobs.push(job.taskName)
                
//             }
//         }
//         formattedData.push(newStudents)
//     }
//     return formattedData
// }

// console.log(jobAss(students,jobAssignments))


// const jobAss = (array1, array2) =>{
//     for(let x of array1){
//         for(let y of array2){
//             const newArray = array1.map((x, index) =>{
//                 if (x.uid.value === y.uid.value){
//                     const newArray = {...x, ...y[index]}
//                     return newArray
//         }})
//         }
//     }
// }

// console.log(jobAss(students,jobAssignments))