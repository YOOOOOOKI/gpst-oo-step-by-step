const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes)
    {
        super(name,age);
        this.clazzes=clazzes;
    }
    introduce()
    {
        if(this.clazzes.length!==0)
            {
                let arr1=[];
                for(let i of this.clazzes)
                    {
                        arr1.push(i.number);
                    }
                return `${super.introduce()} I am a Teacher. I teach Class ${arr1.join(",")}.`; 
            }
        
        else
        return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
}