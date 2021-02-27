export default class User {

  constructor (nombres, apellidos, correo) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.activo = true;
  }

  presentarse() {
    return `Hola soy ${this.nombres} y mi correo es ${this.correo}`
  }

  getNombres() {
    return this.nombres
  }

  getApellidos() {
    return this.apellidos
  }

  setNombres(nuevosNombres) {
    this.nombres = nuevosNombres
  }

  setApellidos(nuevosApellidos) {
    this.apellidos = nuevosApellidos
  }
}