class Name1{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name= name;
    }
}
module.exports = new Name1('Arnav');
