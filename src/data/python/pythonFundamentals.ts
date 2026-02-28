export const pythonFundamentals = {
  name: "Python Functions & Variables",
  import: "/* Python Core Concepts */",
  categories: [
    {
      title: "Variables & Assignment",
      items: [
        { snippet: "x = 10", desc: "Assign an integer to a variable." },
        { snippet: "pi = 3.14159", desc: "Assign a float to a variable." },
        { snippet: "is_active = True", desc: "Assign a boolean value." },
        { snippet: "x, y = 1, 2", desc: "Multiple assignment in a single line." },
        { snippet: "name: str = 'Hello'", desc: "Variable assignment with a type hint." },
        { snippet: "PRICE_CONSTANT = 100", desc: "Convention for declaring constant variables." },
      ],
    },
    {
      title: "Data Types & Casting",
      items: [
        { snippet: "type(x)", desc: "Get the data type of a variable." },
        { snippet: "isinstance(x, int)", desc: "Check if a variable is a specific data type." },
        { snippet: "int('10')", desc: "Cast a string or float to an integer." },
        { snippet: "str(10)", desc: "Cast a value to a string." },
        { snippet: "float(10)", desc: "Cast an integer or string to a float." },
        { snippet: "bool(1)", desc: "Cast a value to a boolean (True/False)." },
      ],
    },
    {
      title: "Functions (Basic)",
      items: [
        { snippet: "def my_function():\n    pass", desc: "Define a simple function." },
        { snippet: "def add(a, b):\n    return a + b", desc: "Function with arguments and a return value." },
        { snippet: "def greet(name='User'):\n    print(f'Hello {name}')", desc: "Function with a default parameter value." },
        { snippet: "func_name()", desc: "Call a defined function." },
      ],
    },
    {
      title: "Functions (Advanced & Type-Hinted)",
      items: [
        { snippet: "def calculate(a: int, b: int) -> int:\n    return a + b", desc: "Function with strict type hints for arguments and return type." },
        { snippet: "def process(*args):\n    for arg in args:\n        print(arg)", desc: "Accept an arbitrary number of positional arguments." },
        { snippet: "def configure(**kwargs):\n    for key, val in kwargs.items():\n        print(key, val)", desc: "Accept an arbitrary number of keyword arguments." },
        { snippet: "square = lambda x: x ** 2", desc: "Create an anonymous inline (lambda) function." },
        { snippet: "def outer():\n    def inner():\n        pass\n    return inner", desc: "Define a nested function (closure)." },
      ],
    },
    {
      title: "Scope & Execution Context",
      items: [
        { snippet: "global x\nx = 5", desc: "Declare a variable as global inside a function to modify it." },
        { snippet: "nonlocal y", desc: "Declare a variable as nonlocal to modify it in an enclosing scope." },
        { snippet: "if __name__ == '__main__':\n    main()", desc: "Standard boilerplate to execute code only when the script is run directly." },
      ],
    },
    {
      title: "Object-Oriented (Classes)",
      items: [
        { snippet: "class MyClass:\n    pass", desc: "Define a basic class." },
        { snippet: "def __init__(self, value):\n    self.value = value", desc: "Define the class constructor method." },
        { snippet: "def my_method(self):\n    return self.value", desc: "Define an instance method inside a class." },
        { snippet: "obj = MyClass(10)", desc: "Instantiate an object from a class." },
        { snippet: "class Child(Parent):\n    pass", desc: "Create a class that inherits from another class." },
      ],
    },
  ],
};