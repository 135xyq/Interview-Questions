const number = "1"
const obj = {
    number: 2,
    a:{
        number:4,
        b:{
            number:3,
            c:function(){
                console.log(this,this.number)
            },
            d:()=>{
                console.log(this,this.number)
            }
        }
    },
    e:()=>{
        console.log(this,this.number)
    }
}

obj.a.b.c()
obj.a.b.d()
obj.e()