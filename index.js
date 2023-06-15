const flags = ["au",
"fr",
"br",
"my",
"ca",
"gb",
"id",
"it",
"nl",
"pt",
"ph",
"at",
"es",
"hk",
"cl",
"bg",
"mx",
"zw",
"in",
"ru",
"be",
"pl",
"jp",
"us",
"za",
"mt",
"kz",
"ve",
"tz",
"cr",
"pa",
"sg",
"kr",
"nz",
"se",
"ec",
"cn",
"pe",
"de",
"hu",
"th",
"ro",
"gt"
]

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
