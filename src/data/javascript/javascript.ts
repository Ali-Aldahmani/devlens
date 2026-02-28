export const javascript = {
  name: "JavaScript Fundamentals",
  import: "/* Modern JavaScript (ES6+) */",
  categories: [
    {
      title: "Variables & Console",
      items: [
        { snippet: "const name = 'Value';", desc: "Declare a block-scoped, immutable variable (constant)." },
        { snippet: "let count = 0;", desc: "Declare a block-scoped, mutable variable." },
        { snippet: "console.log(value);", desc: "Print output to the console." },
        { snippet: "console.error('Error!');", desc: "Print an error message to the console." },
        { snippet: "console.table(data);", desc: "Display tabular data as a table in the console." },
      ],
    },
    {
      title: "Functions",
      items: [
        { snippet: "function add(a, b) {\n  return a + b;\n}", desc: "Standard function declaration." },
        { snippet: "const multiply = (a, b) => a * b;", desc: "Arrow function with implicit return." },
        { snippet: "const greet = (name = 'User') => {\n  console.log(`Hello ${name}`);\n};", desc: "Arrow function with a default parameter and template literal." },
        { snippet: "(function() {\n  // code\n})();", desc: "Immediately Invoked Function Expression (IIFE)." },
      ],
    },
    {
      title: "Arrays & Iteration",
      items: [
        { snippet: "const newArr = [...oldArr, 4, 5];", desc: "Clone or merge arrays using the spread operator." },
        { snippet: "arr.forEach(item => console.log(item));", desc: "Iterate over each item in an array." },
        { snippet: "const mapped = arr.map(item => item * 2);", desc: "Create a new array by transforming every element." },
        { snippet: "const filtered = arr.filter(item => item > 10);", desc: "Create a new array with elements that pass a test." },
        { snippet: "const sum = arr.reduce((acc, curr) => acc + curr, 0);", desc: "Accumulate array values into a single result." },
        { snippet: "const found = arr.find(item => item.id === 1);", desc: "Return the first element that satisfies a condition." },
        { snippet: "const hasValue = arr.includes('apple');", desc: "Check if an array contains a specific value." },
      ],
    },
    {
      title: "Objects & Destructuring",
      items: [
        { snippet: "const obj = { key: 'value', age: 25 };", desc: "Create an object literal." },
        { snippet: "const { key, age } = obj;", desc: "Extract properties from an object into variables (Destructuring)." },
        { snippet: "const { key: newName } = obj;", desc: "Destructure an object property and assign it to a new variable name." },
        { snippet: "const newObj = { ...obj, newKey: true };", desc: "Clone or merge objects using the spread operator." },
        { snippet: "Object.keys(obj)", desc: "Get an array of the object's keys." },
        { snippet: "Object.values(obj)", desc: "Get an array of the object's values." },
        { snippet: "Object.entries(obj)", desc: "Get an array of [key, value] pairs." },
      ],
    },
    {
      title: "Asynchronous & Fetch",
      items: [
        { snippet: "setTimeout(() => {\n  console.log('Done');\n}, 1000);", desc: "Execute code after a specified delay (in milliseconds)." },
        { snippet: "const myPromise = new Promise((resolve, reject) => {\n  // async task\n});", desc: "Create a new Promise." },
        { snippet: "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));", desc: "Make a network request using the Promise-based Fetch API." },
        { snippet: "async function getData() {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n    return data;\n  } catch (error) {\n    console.error(error);\n  }\n}", desc: "Fetch data using modern async/await syntax with error handling." },
      ],
    },
    {
      title: "DOM Manipulation",
      items: [
        { snippet: "const el = document.getElementById('myId');", desc: "Select an element by its ID." },
        { snippet: "const btn = document.querySelector('.my-class');", desc: "Select the first element matching a CSS selector." },
        { snippet: "const items = document.querySelectorAll('li');", desc: "Select all elements matching a CSS selector." },
        { snippet: "el.addEventListener('click', (e) => {\n  console.log('Clicked!', e);\n});", desc: "Attach an event listener to a DOM element." },
        { snippet: "el.classList.add('active');", desc: "Add a CSS class to an element." },
        { snippet: "el.innerHTML = '<span>New Content</span>';", desc: "Update the HTML content inside an element." },
      ],
    },
  ],
};