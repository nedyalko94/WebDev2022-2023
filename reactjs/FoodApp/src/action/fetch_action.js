
let baseUrl = 'https://www.themealdb.com/ '

module.exports={

    getAll: async function(){

        let response = await fetch(`${baseUrl}api/json/v1/1/categories.php`)

        let data = await response.json()

        return data

    },

    getById: async function(id){

        let response = await fetch(`${baseUrl}api/json/v1/1/lookup.php?i=${id}`)

        let data = await response.json()

        return data

    },

    getByName: async function(name){

        let response = await fetch(`${baseUrl}api/json/v1/1/search.php?s=${name}`)

        let data = await response.json()

        return data

    },

    getAllByFIrstLetter: async function(a){

        let response = await fetch(`${baseUrl}api/json/v1/1/search.php?f=${a}`)

        let data = await response.json()

        return data

    }
    ,
    getDetailById: async function(id){

        let response = await fetch(`${baseUrl}api/json/v1/1/search.php?f=${id}`)

        let data = await response.json()

        return data

    }
    ,
    getRandom: async function(id){

        let response = await fetch(`${baseUrl}api/json/v1/1/random.php`)

        let data = await response.json()

        return data

    }
    ,
    getCategory: async function(id){

        let response = await fetch(`${baseUrl}api/json/v1/1/list.php?c=list`)

        let data = await response.json()

        return data

    }
    ,
    getCountry: async function(id){

        let response = await fetch(`${baseUrl}api/json/v1/1/list.php?a=list`)

        let data = await response.json()

        return data

    }
    ,
    getIngredientDescription: async function(){

        let response = await fetch(`${baseUrl}api/json/v1/1/list.php?a=list`)

        let data = await response.json()

        return data

    }
    ,
    filterByMainIngredient: async function(ingredien){

        let response = await fetch(`${baseUrl}api/json/v1/1/filter.php?i=${ingredien}`)

        let data = await response.json()

        return data

    }
    ,
    filterByCategory: async function(category){

        let response = await fetch(`${baseUrl}api/json/v1/1/filter.php?c=${ category }`)

        let data = await response.json()

        return data

    }
    ,
    filterByCountry: async function(country){

        let response = await fetch(`${baseUrl}api/json/v1/1/filter.php?a=${ country }`)

        let data = await response.json()

        return data

    }
    // Meal Thumbnail Images
    // Add /preview to the end of the meal image URL
    // /images/media/meals/llcbn01574260722.jpg/preview
    ,
    getIngredienImage: async function(ingredienImg){

        let response = await fetch(`${baseUrl}images/ingredients/${ ingredienImg }`)

        let data = await response.json()

        return data

    }
    ,
    getIngredienImage: async function(ingredienImg){

        let response = await fetch(`${baseUrl}images/ingredients/${ ingredienImg }`)

        let data = await response.json()

        return data

    }
    ,
    getSmallIngredienImage: async function(ingredienImg){

        let response = await fetch(`${baseUrl}images/ingredients/${ ingredienImg }`)

        let data = await response.json()

        return data

    }
    // www.themealdb.com/images/ingredients/Lime-Small.png



}