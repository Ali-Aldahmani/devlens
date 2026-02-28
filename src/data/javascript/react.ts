export const react = {
  name: "React",
  import: "npm i react",
  categories: [
    {
      title: "Components & Props",
      items: [
        { snippet: "const MyComponent = () => {\n  return (\n    <div>Hello World</div>\n  );\n};\nexport default MyComponent;", desc: "Create and export a basic functional component." },
        { snippet: "const MyComponent = ({ title, isActive }) => {\n  return <h1>{title}</h1>;\n};", desc: "Functional component with destructured props." },
        { snippet: "const Layout = ({ children }) => {\n  return <div className=\"container\">{children}</div>;\n};", desc: "Component that wraps and renders nested children elements." },
      ],
    },
    {
      title: "Core Hooks (State & Lifecycle)",
      items: [
        { snippet: "const [count, setCount] = useState(0);", desc: "Declare a state variable and its setter function." },
        { snippet: "const [user, setUser] = useState({ name: '', age: 0 });", desc: "Declare a state variable with an object as the initial value." },
        { snippet: "useEffect(() => {\n  // Code runs on mount and when dependencies change\n}, [dependencies]);", desc: "Perform side effects, triggering when specific dependencies change." },
        { snippet: "useEffect(() => {\n  // Code runs only once on component mount\n}, []);", desc: "Perform side effects only once when the component first renders." },
        { snippet: "useEffect(() => {\n  return () => {\n    // Cleanup code runs on unmount\n  };\n}, []);", desc: "Perform cleanup operations before the component unmounts." },
      ],
    },
    {
      title: "Advanced Hooks",
      items: [
        { snippet: "const inputRef = useRef(null);", desc: "Create a mutable reference that persists across renders (often used to access DOM elements)." },
        { snippet: "const value = useContext(MyContext);", desc: "Consume a value from a React Context." },
        { snippet: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);", desc: "Memoize a calculated value to optimize performance." },
        { snippet: "const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);", desc: "Memoize a function definition to prevent unnecessary re-renders of child components." },
        { snippet: "const [state, dispatch] = useReducer(reducer, initialState);", desc: "Manage complex state logic using a reducer function." },
      ],
    },
    {
      title: "JSX Patterns & Rendering",
      items: [
        { snippet: "{isVisible && <div>Visible content</div>}", desc: "Conditionally render an element using the logical AND operator." },
        { snippet: "{isLoggedIn ? <Dashboard /> : <Login />}", desc: "Conditionally render between two elements using a ternary operator." },
        { snippet: "<>\n  <Header />\n  <Main />\n</>", desc: "Group multiple elements without adding an extra node to the DOM using Fragments." },
        { snippet: "className={`btn ${isActive ? 'btn-active' : ''}`}", desc: "Apply CSS classes conditionally using template literals." },
      ],
    },
    {
      title: "Lists & Keys",
      items: [
        { snippet: "{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}", desc: "Render a list of elements from an array, ensuring each has a unique 'key' prop." },
        { snippet: "{items.length === 0 && <p>No items found.</p>}", desc: "Display a fallback UI when a list or array is empty." },
      ],
    },
    {
      title: "Context API",
      items: [
        { snippet: "export const ThemeContext = createContext('light');", desc: "Create a new Context object with a default value." },
        { snippet: "<ThemeContext.Provider value=\"dark\">\n  <App />\n</ThemeContext.Provider>", desc: "Wrap components in a Provider to pass down context values." },
      ],
    },
  ],
};