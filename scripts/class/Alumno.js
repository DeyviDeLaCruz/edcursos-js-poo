import Usuario from './Usuario.js'

export default class Alumno extends Usuario {
  constructor (nombres, apellidos, correo, cursosTomados) {
    super(nombres, apellidos, correo)
    this.cursosTomados = cursosTomados
  }
}