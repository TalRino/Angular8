import { Skill } from './skill.model';

export class Developer {
    public lastName: string
    public firstName: string
    public age: number
    public sexe: string
    public bio: string
    public skill: Skill[] = []


constructor (param_lastName:string, param_firstName:string, param_age:number, param_sexe:string, param_bio:string, param_skills) {
    this.lastName = param_lastName
    this.firstName = param_firstName
    this.age = param_age
    this.sexe = param_sexe
    this.bio = param_bio
    this.skill = param_skills
    }
}