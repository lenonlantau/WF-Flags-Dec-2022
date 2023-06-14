const flags = ['AU',
'FR',
'BR',
'MY',
'CA',
'GB',
'ID',
'IT',
'NL',
'PT',
'PH',
'AT',
'ES',
'HK',
'CL',
'BG',
'MX',
'ZW',
'IN',
'RU',
'BE',
'PL',
'JP',
'US',
'ZA',
'MT',
'KZ',
'VE',
'TZ',
'CR',
'PA',
'SG',
'KR',
'NZ',
'SE',
'EC',
'CN',
'PE',
'DE',
'HU',
'TH',
'RO',
'GT',
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
