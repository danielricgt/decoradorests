var httpServer = {};
var Families = /** @class */ (function () {
    function Families() {
        this.houses = ['Lannister', 'Stark', 'Targaryen', 'Baratheon', 'Tyrell'];
    }
    Families.prototype.get = function () {
        return this.houses;
    };
    Families.prototype.post = function (request) {
        this.houses.push(request);
    };
    return Families;
}());
var Castles = /** @class */ (function () {
    function Castles() {
        this.castles = ['Winterfell', 'Casterly Rock', 'Kings Landing', 'Dorne', 'Meereen'];
    }
    Castles.prototype.get = function () {
        return this.castles;
    };
    Castles.prototype.post = function (request) {
        this.castles.push(request);
    };
    return Castles;
}());
function registerEndpoint(target) {
    var className = target.name;
    var endpointPath = "/" + className.toLowerCase();
    httpServer[endpointPath] = new target();
}
registerEndpoint(Families);
registerEndpoint(Castles);
console.log(httpServer['/castles'].get());
httpServer['/castles'].post('Castillo Adicional');
console.log(httpServer['/castles'].get());
