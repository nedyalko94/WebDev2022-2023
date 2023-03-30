#!/usr/bin/env node

const yargs = require("yargs")


const {argv} = yargs(process.argv)
// console.log(process.argv)
//adding option to cli


/*
Building CLI Tools

CLI stand for command line interface

a program that you can run from the terminal

EX npm and GIT

Create a basic CLI tool using node and npm

Pass options to the CLI

Add interactivity to the CLI

building CLI is similar to npm package with few extra step

#!/usr/bin/env node - on top
 this is call hashbank or shibank which tell the operation system which  interpreter to use 

 we have specify node and the location where node is install

 we add in package json new field call bin 
 bin allow us to tread our package as executable field which can be install at  pot  variable
 the value is a object which contain key value pair

 key is the name and value is the entry point // root /path

 for test / install

 npm install -g

 then run it with the name in my case 


 mushmuroka-pokemon

*/
const printFiveMove = async(pokemonName)=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    const pokemon = await response.json()
    const moves =  pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(0,5))
}

// printFiveMove("charmander")
printFiveMove(argv.pokemon)

console.log("mushmurocka-pokedex hello from CLI")

// mushmuroka-pokemon --pokemon=charmander

// mushmuroka-pokemon --pokemon=mew