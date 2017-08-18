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
    isTeaching(student){
        for(let i of this.clazzes)
            {
                if(i.number===student.clazz.number&&i.hasStudent(student.name))
                    return true;
            }
            return false;
    }
         joinClazzes () {
    for (let value of this.clazzes) {
      value.teacherMember.push(this);
    }
  }
    notifyStudentAppended(joinedMessage) {
    console.log(`I am ${this.name}. I know ${joinedMessage}.`);
  }

  notifyLeaderAssigned(joinedMessage) {
    console.log(`I am ${this.name}. I know ${joinedMessage}.`);
  }
}