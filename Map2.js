

const Students = [
    {name: 'Rodolfo' , testeGrade: 7 },
    {name: 'Maria' , testeGrade: 5 },
    {name: 'João' , testeGrade: 3 },
    {name: 'Fabio' , testeGrade: 8 },
    {name: 'Geraldo' , testeGrade: 10 },
    {name: 'Ana' , testeGrade: 2 },
    {name: 'Julia' , testeGrade: 6 },
]

const newStudents = Students.map( student => {

   return {
        name: student.name,
        status: student.testeGrade >= 5 ? 'aprovado' : 'reprovado'
    }

})

console.log(newStudents)