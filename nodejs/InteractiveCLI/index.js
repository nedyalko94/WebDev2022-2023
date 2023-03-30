#!/usr/bin/env node

//mushmuroka-pokemon --pokemon=new

// npm i 
// npm i -g

// npm  i inquirer@8.2.5
// version 9 work only with ES module




// ideally should be dev-dep

// const yargs = require("yargs")
// const {argv} = yargs(process.argv)

const inquirer = require("inquirer")




const printFiveMove = async(pokemonName)=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    const pokemon = await response.json()
    const moves =  pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(0,5))
}

// printFiveMove("charmander")

const prompt = inquirer.createPromptModule()

prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter a pokemon name to view its first 5 moves"
}]).then((answers)=>{
    const pokemon = answers.pokemon // pokemon refer to name:pokemon
    printFiveMove(pokemon)

})



console.log("mushmurocka-pokedex hello from CLI")

// npm i -g  
// to update 
// pokemon      -to start it


// check BuildingCLITools
