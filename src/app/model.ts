export class Model {
   user:any;
   items:any;
   constructor () {
    this.user = "Ahmet"
    this.items = [
        new TodoItem("Spor", true),
        new TodoItem("Kahvalti", false),
        new TodoItem("Kitap", false),
        new TodoItem("Sinema", false)
    ];
   
   }
}


export class TodoItem {
    description:any;
    action:any;
    constructor (description:any, action:any) {
     this.description = description;
     this.action = action;
    }
 }