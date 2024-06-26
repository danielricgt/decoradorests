interface ApiPEndPoint{

    get():string[];
    post(request:string):void;
}

let httpServer : {[key:string]:ApiPEndPoint}= {};

@registerEndpoint
class Families implements ApiPEndPoint {
    private houses = ['Lannister', 'Stark', 'Targaryen', 'Baratheon', 'Tyrell'];

   
    get() {
        return this.houses;
    }

    post(request: string){ 
        this.houses.push(request);
    }     


    }
    @registerEndpoint
    class Castles implements ApiPEndPoint{
        private castles = ['Winterfell', 'Casterly Rock', 'Kings Landing', 'Dorne', 'Meereen'];

        get() {
            return this.castles;
        }

        @test
        post(request: string){
            this.castles.push(request);
        }
    }

    function registerEndpoint(target:any){
        const className = target.name;
        const endpointPath = "/" + className.toLowerCase();

        httpServer[endpointPath] = new target();
    }

    function test(target:any, key:String, descriptor: PropertyDescriptor){
        console.log(target);
        console.log(`identificador: ${key}`);
        console.log(`${descriptor.value }`);

    }



console.log(httpServer['/castles'].get());
httpServer['/castles'].post('Castillo Adicional')
console.log(httpServer['/castles'].get()); 
