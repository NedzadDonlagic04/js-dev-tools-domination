const dogs = [
    { name: 'Snickers', age: 2 }, 
    { name: 'hugo', age: 8 }
];

const p = document.querySelector('p');

p.addEventListener('click', () => {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
});

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', ':D');

// Styled
console.log('%c I am a string', 'font-size: 50px; color: yellow');

// warning!
console.warn('Warning message');

// Error :|
console.error('Error message');

// Info
console.info('Info message');

// Testing
console.assert(p.classList.contains('ouch'), 'Assertion failed');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach( dog => {
    console.groupCollapsed(`${dog.name}`);  // console.group is without collapsing

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);

    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Bob');
console.count('Bob');
console.count('Bob');
console.count('Steve');
console.count('Bob');
console.count('Steve');
console.count('Bob');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/YourFBIAgent')
    .then( response => response.json() )
    .then( json => {
        console.timeEnd('fetching data');
        console.log(json);
    });

// table
console.table(dogs);