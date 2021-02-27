import Curso from "./class/Curso.js";
import Profesor from "./class/Profesor.js";
import Alumno from "./class/Alumno.js";
import { mostrarCurso, mostrarProfesor, mostrarAlumno } from './index.js'

const testCursos = [
  new Curso("Programación lógica de controladores", "https://edteam-media.s3.amazonaws.com/courses/medium/0961738d-bc1b-40e8-9f95-95d677aa869a.png", 18),
  new Curso("Introduccion al testing", "https://edteam-media.s3.amazonaws.com/courses/medium/5c7a8ada-4656-44d1-bc5e-b5fde2a5602c.png", 19),
  new Curso("Respberry Pi desde cero", "https://edteam-media.s3.amazonaws.com/courses/medium/d9b4688a-4959-4b57-af76-836504a94ba8.png", 22),
  new Curso("JavaScript desde cero", "https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg", 20),
  new Curso("CSS desde cero", "https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png", 16),
  new Curso("Figma desde cero", "https://edteam-media.s3.amazonaws.com/courses/small/cf0aecf3-0ddb-43b5-8d44-a7a3b9c54fed.png", 25)
]

const testProfesores = [
  new Profesor("Beto", "Quiroga", "beto@edteam.com", 20, 10),
  new Profesor("Alvaro", "Felipe", "alvaro@edteam.com", 15, 9),
  new Profesor("Alexys", "Lozada", "alexys@edteam.com", 13, 8)
]

const testAlumnos = [
  new Alumno("Deyvi", "De La Cruz", "dev@mail.edu", 6),
  new Alumno("Jorge", "Garcia", "jorge@mail.edu", 15),
  new Alumno("Dinora", "Peña", "dinora@mail.edu", 9),
  new Alumno("Edwuard", "Ramos", "edu@mail.edu", 12),
  new Alumno("Evans", "Alcantara", "evans@mail.edu", 10)
]

testCursos.forEach(curso => {
  mostrarCurso(curso)
})

testProfesores.forEach(profesor => {
  mostrarProfesor(profesor)
})

testAlumnos.forEach(alumno => {
  mostrarAlumno(alumno)
})
