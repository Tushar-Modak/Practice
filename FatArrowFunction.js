console.log("In JavaScript");
var x = 25;
function normal()
{
    console.log("Print normal");
    console.log(this.x);
    
}
normal();

var Course = {
    name : "JavaScript",
    age : "25 years",
    
    arrow : function(){
        console.log("print Arrow")
        console.log("func "+this.name);
        //var n = this.name;
        return ()=>
        {
            console.log("Nested func " +this.name);
        }
        
    }
    // arrow : ()=> {
    //     console.log("print Arrow")
    //     console.log(this.name);
    // },

}
var res=Course.arrow();
res();

