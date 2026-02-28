export const typescript = {
  name: "TypeScript",
  import: "npm i typescript",
  categories: [
    {
      title: "Basic Types & Annotations",
      items: [
        { snippet: "let isDone: boolean = false;", desc: "Declare a variable with a boolean type." },
        { snippet: "let price: number = 99.99;", desc: "Declare a variable with a number type (integers and floats)." },
        { snippet: "let username: string = 'admin';", desc: "Declare a variable with a string type." },
        { snippet: "let scores: number[] = [85, 90, 95];", desc: "Declare an array of a specific type." },
        { snippet: "let user: [string, number] = ['Alice', 25];", desc: "Declare a tuple (an array with fixed length and known types)." },
        { snippet: "let data: any = 'could be anything';", desc: "Opt-out of type checking for a variable (use sparingly)." },
      ],
    },
    {
      title: "Interfaces & Type Aliases",
      items: [
        { snippet: "interface User {\n  id: number;\n  name: string;\n  email?: string;\n}", desc: "Define an interface with an optional property." },
        { snippet: "type Status = 'pending' | 'success' | 'failed';", desc: "Define a union type of specific string literals." },
        { snippet: "type ID = string | number;", desc: "Define a union type allowing multiple data types." },
        { snippet: "interface Employee extends User {\n  role: string;\n}", desc: "Extend an existing interface to inherit its properties." },
        { snippet: "type Point = { x: number } & { y: number };", desc: "Create an intersection type combining multiple types." },
      ],
    },
    {
      title: "Functions & Typing",
      items: [
        { snippet: "function greet(name: string): string {\n  return `Hello, ${name}`;\n}", desc: "Function with typed parameters and a defined return type." },
        { snippet: "const add = (a: number, b: number): number => a + b;", desc: "Arrow function with type annotations." },
        { snippet: "function logMessage(msg: string): void {\n  console.log(msg);\n}", desc: "Function that does not return a value (void)." },
        { snippet: "function buildName(first: string, last: string = 'Smith') {\n  return `${first} ${last}`;\n}", desc: "Function with a default parameter value (type is inferred)." },
      ],
    },
    {
      title: "Object-Oriented (Classes)",
      items: [
        { snippet: "class Project {\n  public title: string;\n  private budget: number;\n\n  constructor(title: string, budget: number) {\n    this.title = title;\n    this.budget = budget;\n  }\n}", desc: "Define a class with public and private access modifiers." },
        { snippet: "class DataService implements Logger {\n  log(msg: string) {\n    console.log(msg);\n  }\n}", desc: "Implement an interface in a class to enforce a contract." },
        { snippet: "class AppError extends Error {\n  constructor(public code: number, message: string) {\n    super(message);\n  }\n}", desc: "Extend a base class and use parameter properties for concise initialization." },
      ],
    },
    {
      title: "Generics",
      items: [
        { snippet: "function identity<T>(arg: T): T {\n  return arg;\n}", desc: "Create a generic function that works with any data type." },
        { snippet: "interface ApiResponse<T> {\n  data: T;\n  status: number;\n}", desc: "Define a generic interface for reusable data structures." },
        { snippet: "const numbers: Array<number> = [1, 2, 3];", desc: "Use the built-in generic Array type." },
      ],
    },
    {
      title: "Utility Types",
      items: [
        { snippet: "type PartialUser = Partial<User>;", desc: "Make all properties of an existing type optional." },
        { snippet: "type ReadonlyUser = Readonly<User>;", desc: "Make all properties of a type read-only so they cannot be reassigned." },
        { snippet: "type UserPreview = Pick<User, 'id' | 'name'>;", desc: "Create a new type by picking specific properties from another type." },
        { snippet: "type UserWithoutEmail = Omit<User, 'email'>;", desc: "Create a new type by excluding specific properties from another type." },
        { snippet: "const roles: Record<string, string[]> = {\n  admin: ['read', 'write'],\n};", desc: "Construct an object type whose property keys and values are specified." },
      ],
    },
  ],
};