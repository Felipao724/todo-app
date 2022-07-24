export class Todo {

    constructor( tarea ) {
        
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.comletado = false;
        this.creado = new Date();
    }
}