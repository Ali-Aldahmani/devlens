export const rust = {
  name: "Rust",
  import: "",
  categories: [
    {
      title: "Basics & Variables",
      items: [
        { snippet: "fn main() {\n    println!(\"Hello, world!\");\n}", desc: "Basic hello world" },
        { snippet: "let x = 5;\nlet mut y = 10;", desc: "Immutable and mutable variables" },
        { snippet: "const PI: f64 = 3.1415;", desc: "Declare a constant" },
        { snippet: "let guess: u32 = \"42\".parse().expect(\"Not a number\");", desc: "Type annotation & parse" },
      ],
    },
    {
      title: "Control Flow",
      items: [
        { snippet: "if x < 5 {\n    println!(\"x < 5\");\n} else {\n    println!(\"x >= 5\");\n}", desc: "If-else statement" },
        { snippet: "for i in 0..5 {\n    println!(\"{}\", i);\n}", desc: "For loop" },
        { snippet: "while x > 0 {\n    x -= 1;\n}", desc: "While loop" },
        { snippet: "match value {\n    1 => println!(\"One\"),\n    _ => println!(\"Other\"),\n}", desc: "Match statement" },
      ],
    },
    {
      title: "Functions & Ownership",
      items: [
        { snippet: "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}", desc: "Basic function" },
        { snippet: "fn calculate_length(s: &String) -> usize {\n    s.len()\n}", desc: "Function borrowing reference" },
        { snippet: "let s1 = String::from(\"hello\");\nlet s2 = s1;", desc: "Ownership transfer (move)" },
        { snippet: "let s3 = s2.clone();", desc: "Clone to keep copy" },
      ],
    },
    {
      title: "Structs & Enums",
      items: [
        { snippet: "struct Person {\n    name: String,\n    age: u32,\n}", desc: "Define struct" },
        { snippet: "let p = Person { name: String::from(\"Ali\"), age: 25 };", desc: "Instantiate struct" },
        { snippet: "enum Direction {\n    Up,\n    Down,\n    Left,\n    Right,\n}", desc: "Define enum" },
        { snippet: "let dir = Direction::Up;", desc: "Use enum variant" },
      ],
    },
    {
      title: "Vectors & HashMaps",
      items: [
        { snippet: "let mut v = vec![1, 2, 3];\nv.push(4);", desc: "Create and push to vector" },
        { snippet: "for i in &v {\n    println!(\"{}\", i);\n}", desc: "Iterate vector" },
        { snippet: "use std::collections::HashMap;\nlet mut scores = HashMap::new();\nscores.insert(\"Alice\", 10);", desc: "HashMap creation and insert" },
      ],
    },
    {
      title: "Error Handling",
      items: [
        { snippet: "fn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 { Err(String::from(\"Divide by zero\")) } else { Ok(a / b) }\n}", desc: "Function returning Result" },
        { snippet: "let result = divide(10, 2).unwrap();", desc: "Unwrap Result (panic if Err)" },
        { snippet: "let result = divide(10, 0).expect(\"Division failed\");", desc: "Expect with custom error message" },
      ],
    },
    {
      title: "Traits & Generics",
      items: [
        { snippet: "trait Summary {\n    fn summarize(&self) -> String;\n}", desc: "Define trait" },
        { snippet: "impl Summary for NewsArticle {\n    fn summarize(&self) -> String { ... }\n}", desc: "Implement trait for struct" },
        { snippet: "fn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest {\n            largest = item;\n        }\n    }\n    largest\n}", desc: "Generic function with trait bound" },
      ],
    },
    {
      title: "Concurrency",
      items: [
        { snippet: "use std::thread;\nlet handle = thread::spawn(|| {\n    println!(\"Hello from thread\");\n});\nhandle.join().unwrap();", desc: "Spawn thread and join" },
        { snippet: "use std::sync::Mutex;\nlet m = Mutex::new(5);\n{ let mut num = m.lock().unwrap(); *num += 1; }", desc: "Mutex lock example" },
      ],
    },
    {
      title: "File I/O",
      items: [
        { snippet: "use std::fs;\nlet contents = fs::read_to_string(\"file.txt\").expect(\"Read failed\");", desc: "Read file contents" },
        { snippet: "fs::write(\"file.txt\", \"Hello\").expect(\"Write failed\");", desc: "Write file" },
      ],
    },
  ],
};