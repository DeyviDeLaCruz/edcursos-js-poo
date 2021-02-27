export default class Curso {
  constructor (nombre, poster, clases) {
    this.nombre = nombre
    this.poster = poster
    this.clases = clases
    this.inscritos = []
  }

  getNombre() {
    return this.nombre
  }

  getPoster() {
    return this.poster
  }
  
  getClases() {
    return this.clases
  }

  getInscritos() {
    return this.inscritos
  }

  setNombre(newNombre) {
    this.nombre = newNombre
  }

  setPoster(newPoster) {
    this.poster = newPoster
  }

  setClases(newClases) {
    this.clases = newClases
  }
  
  setInscritos(newInscritos) {
    this.inscritos.push(newInscritos)
  }
}