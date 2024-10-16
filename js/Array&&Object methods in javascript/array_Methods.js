// Array Methods
    //1.Array.push()
        // Adds one or more elements to the end of an array and returns the new length of the array.
        let fruits = ['apple', 'banana'];
fruits.push('orange'); // Adds 'orange' to the end
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2.Array.pop()
    // Removes the last element from an array and returns that element.
     fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // Removes 'orange'
console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']

// 3.Array.shift()
    // Removes the first element from an array and returns that element.
     fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift(); // Removes 'apple'
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange']

// 4.Array.unshift()
    // Adds one or more elements to the beginning of an array and returns the new length of the array.
 fruits = ['banana', 'orange'];
fruits.unshift('apple'); // Adds 'apple' to the beginning
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 5.Array.map()
    // Creates a new array populated with the results of calling a provided function on every element in the calling array.
    let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // Doubles each number
console.log(doubled); // Output: [2, 4, 6]

// 6.Array.filter()
    // Creates a new array with all elements that pass the test implemented by the provided function.
     numbers = [1, 2, 3, 4, 5];
    let evens = numbers.filter(num => num % 2 === 0); // Filters even numbers
    console.log(evens); // Output: [2, 4]
    
    // 7.Array.reduce()
    // Executes a reducer function on each element of the array, resulting in a single output value.
     numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // Sums the numbers
console.log(sum); // Output: 10


// Object Methods

    // 1.Object.keys()
        // Returns an array of a given object's own enumerable property names.
        let person = { name: 'Alice', age: 25 };
let keys = Object.keys(person); // Gets keys of the object
console.log(keys); // Output: ['name', 'age']

// 2.Object.values()
    // Returns an array of a given object's own enumerable property values.
     person = { name: 'Alice', age: 25 };
     let values = Object.values(person); // Gets values of the object
    console.log(values); // Output: ['Alice', 25]

// 3.Object.entries()
    // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
     person = { name: 'Alice', age: 25 };
    let entries = Object.entries(person); // Gets entries of the object
    console.log(entries); // Output: [['name', 'Alice'], ['age', 25]]
    
// 4.Object.assign()
    // Copies all enumerable own properties from one or more source objects to a target object.
    let target = { a: 1 };
    let source = { b: 2, c: 3 };
    Object.assign(target, source); // Merges source into target
    console.log(target); // Output: { a: 1, b: 2, c: 3 }
    
    //5. Object.freeze()
    // Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
     person = { name: 'Alice' };
Object.freeze(person); // Freezes the object
person.age = 25; // Attempting to modify will not work
console.log(person); // Output: { name: 'Alice' }


// Define a large object containing a collection of books
let library = {
    name: 'City Library',
    location: 'Downtown',
    books: [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
        { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
    ]
};

// 1. Use Object.keys() to get the keys of the library object
let libraryKeys = Object.keys(library);
console.log('Library Keys:', libraryKeys); // Output: ['name', 'location', 'books']

// 2. Use Object.values() to get the values of the library object
let libraryValues = Object.values(library);
console.log('Library Values:', libraryValues); // Output: ['City Library', 'Downtown', [... books array]]

// 3. Use Object.entries() to get key-value pairs of the library object
let libraryEntries = Object.entries(library);
console.log('Library Entries:', libraryEntries);

// 4. Use Array.map() to create an array of book titles
let bookTitles = library.books.map(book => book.title);
console.log('Book Titles:', bookTitles); // Output: titles of all books

// 5. Use Array.filter() to find books published after 1950
let modernBooks = library.books.filter(book => book.year > 1950);
console.log('Modern Books:', modernBooks);

// 6. Use Array.reduce() to calculate the average publication year of the books
let totalYears = library.books.reduce((acc, book) => acc + book.year, 0);
let averageYear = totalYears / library.books.length;
console.log('Average Publication Year:', averageYear);

// 7. Use Object.assign() to add a new book to the library
let newBook = { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 };
library.books.push(newBook); // Add the new book to the array
console.log('Updated Books:', library.books);

// 8. Use Array.pop() to remove the last book from the library
let removedBook = library.books.pop(); // Remove the last book
console.log('Removed Book:', removedBook);
console.log('Books After Removal:', library.books);

// 9. Use Array.sort() to sort books by publication year
library.books.sort((a, b) => a.year - b.year);
console.log('Books Sorted by Year:', library.books);

// 10. Freeze the library object to prevent further modifications
Object.freeze(library);
console.log('Library Frozen:', library);
