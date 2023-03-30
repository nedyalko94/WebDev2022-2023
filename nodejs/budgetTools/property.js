// npm i prompt
//npm i mongoose


const mongoose = require('mongoose');
const prompt = require('prompt')


main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/BudgetTool', (err) => console.log('conected to DB'))

}

//1 create schema  

const propertySchema = new mongoose.Schema({
    NameOfTheProject: String,
    BasePrice: Number,
    Insurance: Number,
    MaintenanceCost: Number,
    Taxes: Number,
    RentIncome: Number,
    ItsFirstProperty: String,
    isInFlandaren: String,
    isInWallonia: String,
    isInBrussel: String,
    TotalBuyPrice: Number,




})

const credit = new mongoose.Schema({
   NameOfTheCredit:String,
    Amount:Number,
    InterestRate:Number,
    Years:Number,
    result :Number
})

// formula
const monthlyInterestRate = InterestRate/12/100
// duration of the credit in month
 const MonthDuration = Years *12

 // formula for credit 
const CreditCost= Amount*monthlyInterestRate*(1+monthlyInterestRate)*MonthDuration/((1+monthlyInterestRate)*MonthDuration-1)


//2  compile schema to model 
// model contain  ' collection/ folder' and schema 
//  collection will be  in lower case and plural form  in db 
const Project = mongoose.model('project', propertySchema)



// start prompt
prompt.start()


//  add new DB 
function AddProject() {

    prompt.get(['NameOfTheProject', 'BasePrice', 'Insurance', 'MaintenanceCost', 'Taxes',
        'RentIncome', 'ItsFirstProperty', 'isInFlandaren', 'isInWallonia', 'isInBrussel'], (err, project) => {

            console.log(project)
            // create new obj from model  line 36 
            const NewProject = new Project(project)
            NewProject.save()
                .then(data => console.log(' your project is save you will be redirect to main menu after 3 seconds'))

                .finally(() => setTimeout(() => {
                    console.clear()
                    Menu()
                }, 3000))

        })

}

// get all 

function getAllProject() {
    Project.find({})
        .then(data => {
            data.forEach((project) => {
                console.table({
                   
                    NameOfTheProject: project.NameOfTheProject,
                    BasePrice: project.BasePrice,
                    Insurance: project.Insurance,
                    MaintenanceCost: project.MaintenanceCost,
                    Taxes: project.MaintenanceCost,
                    RentIncome: project.RentIncome,
                    ItsFirstProperty: project.ItsFirstProperty,
                    isInFlandaren: project.isInFlandaren,
                    isInWallonia: project.isInWallonia,
                    isInBrussel: project.isInBrussel,
                    TotalBuyPrice: project.TotalBuyPrice

                })
            })

        })
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
            })
        })
}

function CalculateCredit() {

}
// check if project exist 

function IsProjectExist(NameOfTheProject) {
    return Project.exists({ NameOfTheProject: NameOfTheProject })
        .then(res => res)

}

function DeleteProject (){
    prompt.get(['NameOfTheProject'], (err, project) => {
        console.log(project.NameOfTheProject)

        IsProjectExist(project.NameOfTheProject)
            .then(NameOfTheProject => {
                NameOfTheProject !== null ?
                    Project.findOneAndDelete({
                        NameOfTheProject: project.NameOfTheProject
                    })
                        .then(() => console.log(`${project.NameOfTheProject} is deleted`))
                    : console.log(' project is not found ')
            })
            .finally(() => {
                setTimeout(() => {
                    console.clear()
                    Menu()
                }, 4000)


            })


    })
}


// menu for it 
function Menu() {
    console.clear()
    console.log("\x1b[31m", '\nUSE THE NUMBER TO NAVIGATE IN THE MENU \n')
    console.log("\x1b[36m", `
    \n1.Add New Project\n2.See All Projects\n3.Calculate Your Credit\n4.Calculate your Cash on Cash\n5.Delete Project\n6 Exit `)
    prompt.get([`Option`], (err, opt) => {
        switch (opt.Option) {
            case '1':
                console.log(' Add New Project')
                AddProject()
                break
            case '2':
                console.log('See all project')
                getAllProject()
                break
            case '3':
                console.log('calculate your credit')
                break
            case '4':
                console.log('Calculate your cash on cash')
                break
            case '5':
                    console.log('delete')
                    DeleteProject ()
                    break
            case '6':
                console.log("Exit")
                process.exit()
            default:
                // console.log('Invalid Option')
                Menu()

        }
    })
}
Menu()