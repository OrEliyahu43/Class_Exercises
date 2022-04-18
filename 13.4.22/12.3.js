const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],

            findPerson(type,id){
            let arrayOfType = this[type];
            let targetObject = arrayOfType.find(Element =>{
            return Element['id'] === id;
             })
            return targetObject;
            },


            assignStudent(id,subject){
              let student = this.findPerson('students',id);
              let  teachersArray = this['teachers'];
              for(let teacher of teachersArray){
                  if(teacher['subjects']===subject && teacher['capacityLeft']>0){
                      let studentsArray = teacher['students'];
                      studentsArray.push(student);
                  }
                  
              }
            }

    
    };
         
           



    console.log(school.findPerson('teachers',1));



    //question 2



    