const animalRegex = /^[a-zA-Z]{1,20}$/
const sexRegex = /^(male|female)?$/i
const ageRegex = /^[1-9]+$/

const animal = prompt('What animal is the superhero most similar to?', 'bat')
if (!animalRegex.test(animal)) {
    alert('Error')
    throw new Error("Something went badly wrong!");
}

const sex = prompt('Is the superhero male or female?', 'male')
if (!sexRegex.test(sex)) {
    alert('Error')
    throw new Error("Something went badly wrong!");
}
const age = prompt('How old is the superhero?', '17')
if (!ageRegex.test(age)) {
    alert('Error')
    throw new Error("Something went badly wrong!");
}

if (!!animal && sex === 'male' && age < 18) {
    alert(`Your superhero is ${animal}-boy`)
} else if (!!animal && sex === 'male' && age >= 18) {
    alert(`Your superhero is ${animal}-man`)
} else if (!!animal && sex === 'female' && age < 18) {
    alert(`Your superhero is ${animal}-girl`)
}  else if (!!animal && sex === 'female' && age >= 18) {
    alert(`Your superhero is ${animal}-woman`)
} else if (!!animal && !sex && age < 18) {
    alert(`Your superhero is ${animal}-kid`)
} else if (!!animal && !sex && age >= 18) {
    alert(`Your superhero is ${animal}-hero`)
}

