const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  
// standard for loop
for(let i =0; i < companies.length; i++) {
//   console.log(companies[i]);
}
  

// forEach
companies.forEach(function(company) {
// console.log(company.name);
})


// 1. for loop: all ages which are 21 and over
let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
// 2. filter: all ages which are 21 and over
const canDrink1 = ages.filter(function(age) {
    if(age >= 21){
        return true;
    }
});
// 3. filter ES6: all ages which are 21 and over
const canDrink2 = ages.filter(age => age >= 21);
// 4. filter: all retail companies
const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail'){
        return true;
    }
});
// 5. filter ES6: all retail companies
const retailCompanies2 = companies.filter(company => company.category === 'Retail');
// 6. filter ES6: all companies from the 80s
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// 7. filter ES6: all companies that lasted at least 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));



// map (creates a new array every time it runs)
// 1. create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
});
// 2. create array of company names + start and end date
const testMap1 = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});
// 3. create array of company names + start and end date in ES6
const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// 4. create array of ages by square root
const agesSquare = ages.map(age => Math.sqrt(age)); 
// 5. create array of ages multiplied by 2
const agesByTwo = ages.map(age => age * 2); 



// sort
// 1. sort all companies by start year
const sortedCompanies = companies.sort(function(a, b) {
    if(a.start > b.start){
        return 1
    } else {
        return -1;
    }
});
// 2. sort all companies by start year ES6
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// 3. sort ages from lowest to highest
const sortAges = ages.sort((a, b) => a - b);



// reduce
// 1. add all ages together
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
// 2. add all ages together ES6
const ageSum = ages.reduce((total, age) => total + age, 0);
// 3. get total years of activity for all companies
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);
// 4. get total years of activity for all companies ES6
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);



// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);