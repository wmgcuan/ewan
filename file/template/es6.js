
/*
数据类型
String  Number  Boolean  Object   Null  Undefined  Symbol
常量    
作用域    
箭头函数   
默认参数    
对象代理
解构赋值   
模板文本  
多行字符串   
正则扩展   
数字扩展   
Iterator    
Set和Map   
Generator
函数扩展   
*/



/* Class 
     * super 
     *       super()调用父类的构造函数，返回的是子类的实例
     *       super.say()指向Person.prototype，相当于Person.prototype.say()
     *       
     */
class Person {
  constructor(name) {
    this.name = name
  }
  say () {
    console.log('My name is ' + this.name)
  }
}
class Student extends Person {
  constructor(name, age) {
    super() // 必须执行一次super函数，必须在使用this之前
    this.name = 'test'
    this.age = age
    super.x = 3 // 赋值时super指向Student.prototype, 读取时super指向Person.prototype
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
  todo () {
    super.say() // 调用父类的方法时，super会绑定子类的this
    console.log("I'm coding...");
  }
}
console.log(Person.prototype)
const person = new Person('person'),
  student = new Student('student')
// student.say() //My name is student
student.todo() //I'm coding...
    // person.say() //My name is person

/*
Module   
Symbol
对象扩展
数组扩展
增强对象文本
Promises对象

export default function bar () { console.log('Module bar') }
import bar from './bar' //bar();

出export { login }             进 直接使用pass.login          import {getId} from '../common/utils.js'
出：export default login .   进： import login from './init'  运行：login()

import Vue from 'vue'                  default匿名
import {sum, minus} from './util'  解构 sum() minus()
import {router} from './router
import * as util from './util'           通配 util.sum() util.minus()
import('./util')                                异步请求

 (...m) => {}                      rest参数
:let [x, y, z] = [1, 2, 3]      数组解构 x: 1 .  y: 2 .  z:3
let [x, ...y] = [1,2,3,4,5]    x: 1 .  y:[2,3,4,5]
:[...[1,2,3], ...[4,5,6]]        数组的扩展 [1,2,3,4,5,6]
 ...[1,2,3]                           函数的扩展

export let name = ''
export function fn(){ }
export class cls{}
export default 123
export default function(){}
export default cls{}
const a = ''
function b()()
export {a, b}
export {a as aa, b as bb}
export * from ''
export {foo, bar} from ''
export {foo as myFoo, bar} from ''

import wanyuaning, {name1, name2} from 'src/lib'
import wanyuaning from 'src/lib'
import {name1, name2} from 'src/lib'    // 

import {name1 as n1, name2} from 'src/lib'    // 重命名
import * as mylib from 'src/lib'    // 导入所有的方法入mylib
import 'src/lib'    // 
*/