class Profile{
    name : string
    gender : string
    birthDate : string
    work : string
    education : string
    hometown : string
    siblings : number
    friends : number

    constructor(name : string,gender : string,birthDate : string,work : string,education : string,hometown : string,siblings : number,friends : number){
        this.name = name
        this.gender = gender
        this.birthDate = birthDate
        this.work = work
        this.education = education
        this.hometown = hometown
        this.siblings = siblings
        this.friends = friends
    }

    getName = ()=>{
        return this.name
    }
    getGender = ()=>{
        return this.gender
    }
    getBirthDate = ()=>{
        return this.birthDate
    }
    getWork = ()=>{
        return this.work
    }
    getEducation = ()=>{
        return this.education
    }
    getHometown = ()=>{
        return this.hometown
    }
    getSiblings = ()=>{
        return this.siblings
    }
    getFriends = ()=>{
        return this.friends
    }
}

let object = new Profile("Paryavaran","Male","10 April 1991","IBM","NSVM Ballia","Ballia", 3, 500)
let work_info = object.getWork()
alert(work_info)
