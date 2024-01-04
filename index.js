const flags = [
    "US", "AU", "AT", "BY", "BE", "BR", "GB", "BG", "CA", "CL", "CN", "HK", 
    "CO", "CR", "NL", "EC", "PH", "FI", "FR", "GT", "HU", "IN", "ID", "IT", 
     "CH", "JP", "KR", "LU", "MG", "MY", "MT", "MX", "NZ", "PA", "PE", "PL", "PT", 
    "RO", "RU", "SG", "ZA", "ES", "SE", "TZ", "TH", "UY", "VE", "ZW"
];
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
