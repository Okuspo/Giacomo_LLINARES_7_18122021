import { Recipe } from '../data/interfaces.js'

function onlyUnique (value: string, index: number, self: string[]): boolean {
    return self.indexOf(value) === index
}

function getIngredients (recipes: Recipe[]): string[] {
    const totalIngredients: string[] = []
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(object => {
            const lowerCaseIngredient = object.ingredient.toLowerCase()
            totalIngredients.push(lowerCaseIngredient)
        })
    })

    const fixedIngredients: string[] = []
    totalIngredients.forEach(ingredient => fixedIngredients.push(ingredient.charAt(0).toUpperCase() + ingredient.slice(1)))
    const filteredIngredients = fixedIngredients.filter(onlyUnique)

    filteredIngredients.sort((a:string, b:string) => a.localeCompare(b))

    return filteredIngredients
}

function getAppliances (recipes: Recipe[]): string[] {
    const allAppliances: string[] = []
    recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })

    const uniqueAppliances = allAppliances.filter(onlyUnique)

    return uniqueAppliances
}

function getUstensils (recipes: Recipe[]): string[] {
    const allUstensils: string[] = []
    recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => allUstensils.push(ustensil)))
    const uniqueUstensils = allUstensils.filter(onlyUnique)
    return uniqueUstensils
}

function displayAppliances (appliances: string[]): void {
    const appliancesList = document.getElementById('appliances-list')!
    appliances.forEach(appliance => {
        const li = document.createElement('li')
        li.textContent = appliance
        li.classList.add('appliance-item')
        appliancesList.appendChild(li)
    })
}

function displayIngredients (ingredients: string[]): void {
    const combobox = document.getElementById('ingredients-list')!
    ingredients.forEach(ingredient => {
        const li = document.createElement('li')
        li.textContent = ingredient
        li.classList.add('ingredient-item')
        combobox.appendChild(li)
    })
}

function displayUstensils (ustensils : string[]): void {
    const ustensilsList = document.getElementById('ustensils-list')!
    ustensils.forEach(ustensil => {
        const li = document.createElement('li')
        li.textContent = ustensil
        li.classList.add('ustensil-item')
        ustensilsList.appendChild(li)
    })
}

export { getIngredients, displayIngredients, getAppliances, displayAppliances, getUstensils, displayUstensils }
