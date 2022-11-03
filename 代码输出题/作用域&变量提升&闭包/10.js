const person = {
    name:'xyq',
    say:function(){
        return function(){
            console.log(this.name)
        }
    }
}

person.say()()