const emailInput = document
  .getElementById('email')
  .getElementsByTagName('input')[0];
const countrySelect = document
  .getElementById('country')
  .getElementsByTagName('select')[0];
const zipInput = document
  .getElementById('zip')
  .getElementsByTagName('input')[0];
const passwordInput = document
  .getElementById('password')
  .getElementsByTagName('input')[0];
const confirmInput = document
  .getElementById('confirm')
  .getElementsByTagName('input')[0];
const submitButton = document.getElementById('submit');

const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

for (let i = 0; i < countryList.length; i += 1) {
  const option = document.createElement('option');
  option.value = countryList[i];
  option.innerHTML = countryList[i];
  countrySelect.appendChild(option);
}

function getWarning(input) {
  return input.parentElement.getElementsByClassName('warning')[0];
}

function validateEmail() {
  const warning = getWarning(emailInput);
  const user = emailInput.value.substring(0, emailInput.value.indexOf('@'));
  const rootDomain = emailInput.value.replace(user, '');
  const domainName = rootDomain.substring(0, rootDomain.indexOf('.'));
  const topLevelDomain = rootDomain.replace(domainName, '');
  const specialCharacters = [
    '!',
    '$',
    '#',
    '%',
    '&',
    "'",
    '*',
    '+',
    '-',
    '/',
    '=',
    '^',
    '_',
    '`',
    '{',
    '}',
    '|',
    '.',
  ];
  const conditions = [
    emailInput.value.length > 0,
    emailInput.value.length < 65,
    emailInput.value.includes('@'),
    rootDomain.includes('.'),
    user.length > 0,
    domainName.length > 1,
    topLevelDomain.length > 1,
    !emailInput.value.includes(' '),
  ];
  for (let i = 0; i < specialCharacters.length; i += 1) {
    for (let j = 0; j < emailInput.value.length; j += 1) {
      if (
        emailInput.value[j] === specialCharacters[i]
        && emailInput.value[j] === emailInput.value[j + 1]
      ) {
        conditions.push(false);
      }
    }
    conditions.push(emailInput.value[0] !== specialCharacters[i]);
    conditions.push(
      emailInput.value[emailInput.value.length - 1] !== specialCharacters[i],
    );
  }
  if (conditions.indexOf(false) === -1) {
    warning.className = 'warning hide';
    warning.innerHTML = '';
    return true;
  }
  warning.className = 'warning show';
  warning.innerHTML = 'Please enter a valid email';
  return false;
}

function validateCountry() {
  const warning = getWarning(countrySelect);
  if (countrySelect.value !== 'none') {
    warning.className = 'warning hide';
    warning.innerHTML = '';
    return true;
  }
  warning.className = 'warning show';
  warning.innerHTML = 'Please select a country';
  return false;
}

function validateZIP() {
  const warning = getWarning(zipInput);
  const firstFive = zipInput.value.substring(0, 5);
  const extFour = zipInput.value.substring(6, 10);
  const nonDigits = new RegExp(/\D/);
  const conditions = [
    zipInput.value.length === 5 || zipInput.value.length === 10,
    !nonDigits.test(firstFive),
  ];
  if (zipInput.value.length === 10) {
    conditions.push(!nonDigits.test(extFour));
    conditions.push(zipInput.value[5] === '-');
  }
  if (conditions.indexOf(false) === -1) {
    warning.className = 'warning hide';
    warning.innerHTML = '';
    return true;
  }
  warning.className = 'warning show';
  warning.innerHTML = 'Please enter a valid ZIP code';
  return false;
}

function validatePassword() {
  const warning = getWarning(passwordInput);
  const digits = new RegExp(/[0-9]/);
  const lowercaseLetters = new RegExp(/[a-z]/);
  const uppercaseLetters = new RegExp(/[A-Z]/);
  const specialCharactersTest = new RegExp(/[!@#$%^&*]/);
  const bannedCharacters = new RegExp(/[^A-Za-z0-9!@#$%^&*]/);
  if (passwordInput.value.length === 0) {
    warning.className = 'warning show';
    warning.innerHTML = 'Please enter a valid password';
    return false;
  }
  if (!digits.test(passwordInput.value)) {
    warning.className = 'warning show';
    warning.innerHTML = 'Password must include at least one number (0-9)';
    return false;
  }
  if (!lowercaseLetters.test(passwordInput.value)) {
    warning.className = 'warning show';
    warning.innerHTML = 'Password must include at least one lowercase letter (a-z)';
    return false;
  }
  if (!uppercaseLetters.test(passwordInput.value)) {
    warning.className = 'warning show';
    warning.innerHTML = 'Password must include at least one uppercase letter (A-Z)';
    return false;
  }
  if (!specialCharactersTest.test(passwordInput.value)) {
    warning.className = 'warning show';
    warning.innerHTML = 'Password must include at least one special character (!, @, #, $, %, ^, &, *)';
    return false;
  }
  if (bannedCharacters.test(passwordInput.value)) {
    warning.className = 'warning show';
    warning.innerHTML = 'Please enter a valid password';
    return false;
  }
  if (passwordInput.value.length < 8) {
    warning.className = 'warning show';
    warning.innerHTML = 'Password must be at least 8 characters';
    return false;
  }
  warning.className = 'warning hide';
  warning.innerHTML = '';
  return true;
}

function validateConfirmation() {
  const warning = getWarning(confirmInput);
  if (confirmInput.value.length === 0) {
    warning.className = 'warning show';
    warning.innerHTML = 'Please re-enter your password';
    return false;
  }
  if (confirmInput.value !== passwordInput.value) {
    warning.className = 'warning show';
    warning.innerHTML = 'Input must match password';
    return false;
  }
  warning.className = 'warning hide';
  warning.innerHTML = '';
  return true;
}

emailInput.addEventListener('keyup', validateEmail);
emailInput.addEventListener('blur', validateEmail);
countrySelect.addEventListener('change', validateCountry);
countrySelect.addEventListener('blur', validateCountry);
zipInput.addEventListener('keyup', validateZIP);
zipInput.addEventListener('blur', validateZIP);
passwordInput.addEventListener('keyup', () => {
  validatePassword();
  if (confirmInput.value.length > 0) {
    validateConfirmation();
  }
});
passwordInput.addEventListener('blur', () => {
  validatePassword();
  if (confirmInput.value.length > 0) {
    validateConfirmation();
  }
});
confirmInput.addEventListener('keyup', validateConfirmation);
confirmInput.addEventListener('blur', validateConfirmation);

submitButton.addEventListener('click', () => {
  validateEmail();
  validateCountry();
  validateZIP();
  validatePassword();
  validateConfirmation();
});
