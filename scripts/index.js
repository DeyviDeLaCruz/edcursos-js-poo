import Curso from './class/Curso.js'
import Profesor from './class/Profesor.js'
import Alumno from './class/Alumno.js'

/*
//  FORM CURSO
*/

const parentCursos = document.getElementById('cursos')

const mostrarCurso = (curso) => {
  
  const child = document.createElement("div")

  child.innerHTML = `
    <article class="card">
      <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="poster">
      </div>
      <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">
          ${curso.getNombre()}
        </h3>
        <div class="s-mb-2 s-main-center">
          <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
      </div>
    </article>
  `
  
  parentCursos.appendChild(child)
}

const formNewCurso = document.getElementById('formNewCurso')
formNewCurso.addEventListener("submit", function (event) {
  event.preventDefault()

  const target = event.target
  const curso = new Curso(
    target.nombre.value, 
    target.poster.value, 
    target.clases.value
  )

  mostrarCurso(curso)
  formNewCurso.reset()
})

/*
//  FORM PROFESOR
*/

const tableProfesores = document.getElementById('table-profesores')

const mostrarProfesor = profesor => {
  const body = tableProfesores.getElementsByTagName('tbody')[0]
  const row = body.insertRow(body.rows.length)
  row.innerHTML = `
    <tr>
      <td>${profesor.nombres}</td>
      <td>${profesor.apellidos}</td>
      <td>${profesor.correo}</td>
      <td>${profesor.cursosDictados}</td>
      <td>${profesor.calificacion}/10</td>
    </tr>
  `
}

const formNewProfesor = document.getElementById('formNewProfesor')
formNewProfesor.addEventListener("submit", function (event) {
  event.preventDefault()

  const target = event.target
  const profesor = new Profesor(
    target.nombres.value, 
    target.apellidos.value, 
    target.correo.value, 
    target.cursosDictados.value,
    target.calificacion.value
  )

  mostrarProfesor(profesor)
  formNewProfesor.reset()
})

/*
//  FORM ALUMNO
*/

const tableAlumnos = document.getElementById('table-alumnos')

const mostrarAlumno = alumno => {
  const body = tableAlumnos.getElementsByTagName('tbody')[0]
  const row = body.insertRow(body.rows.length)
  row.innerHTML = `
    <tr>
      <td>${alumno.nombres}</td>
      <td>${alumno.apellidos}</td>
      <td>${alumno.correo}</td>
      <td>${alumno.cursosTomados}</td>
    </tr>
  `
}

const formNewAlumno = document.getElementById('formNewAlumno')
formNewAlumno.addEventListener("submit", function (event) {
  event.preventDefault()

  const target = event.target
  const alumno = new Alumno(
    target.nombres.value, 
    target.apellidos.value, 
    target.correo.value, 
    target.cursosTomados.value
  )

  mostrarAlumno(alumno)
  formNewAlumno.reset()
})

export { mostrarCurso, mostrarProfesor, mostrarAlumno }