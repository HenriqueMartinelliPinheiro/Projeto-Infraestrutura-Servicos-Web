interface EventoProps{
    id?: number;
    name: string;
    status: number;
}

export class Event {
    private id?: number;
    private name: string;
    private status: number;

    constructor(props: EventoProps){
        this.id = props.id;
        this.name = props.name;
        this.status = props.status;
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.name;
    }

    getStatus(){
        return this.status;
    }

    setId(id: number){
        this.id = id;
    }

    setNome(name: string){
        this.name = name;
    }

    setStatus(status: number){
        this.status = status;
    }
}