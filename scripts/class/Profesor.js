import Usuario from './Usuario.js'

export default class Profesor extends Usuario {
  constructor (nombres, apellidos, correo, cursosDictados, calificacion) {
    super(nombres, apellidos, correo)
    this.cursosDictados = cursosDictados
    this.calificacion = calificacion
  }
}