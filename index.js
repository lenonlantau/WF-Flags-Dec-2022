const flags = ["at"]

const flagContainer = document.querySelector("#flag-container")

for (let flag of flags) {

    flagContainer.innerHTML += `
    <img
    src="https://flagcdn.com/84x63/${flag}.png"
    srcset="https://flagcdn.com/168x126/${flag}.png 2x,
    https://flagcdn.com/252x189/${flag}.png 3x"
    width="48"
    height="36"
    alt="${flag}">
`
}
