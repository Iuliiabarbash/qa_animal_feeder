class Employee {
    sounfOff(): any {
        throw new Error("Method not implemented.")
    }
    name: string
    title: string
    constructor(name, title) {
        this.name = name
        this.title = title
    }

    //add a function

    soundOff() {
        //it is going to have a switch case and do not have any parameters 
        // let myTitle = this.title
        switch (this.title) {
            case "CEO":
                return 'Big balle'
                break
            case "CFO":
                return "Money man"
                break
            case "Engineer":
                return "Love QA"
                break
            default:
                return "Not Employed here"
        }
    }
}

const myEmployees = [
    new Employee('Dre', 'Instructor'),
    new Employee('Ax', 'CEO'),
    new Employee('Corey', 'CFO'),
    new Employee('Jenet', 'QA Engineer'),
    new Employee('Yulia', 'Customer Support engineer')
]

test('Employee test', () => {
    myEmployees.forEach((person) => {
        console.log(person.soundOff())
    })
    // const dre = new Employee('Dre', 'CEO')
    // console.log(dre)
})