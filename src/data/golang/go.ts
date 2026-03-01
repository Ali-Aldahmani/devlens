export const go = {
  name: "Go",
  import: "",
  categories: [
    {
      title: "Basic Syntax & Types",
      items: [
        { snippet: "var x int = 5\nvar y float64 = 3.14\nvar flag bool = true\nname := \"Ali\"", desc: "Declare variables, short declaration" },
        { snippet: "fmt.Println(\"Hello World\")", desc: "Print to console" },
        { snippet: "const Pi = 3.1415", desc: "Declare a constant" },
      ],
    },
    {
      title: "Control Flow",
      items: [
        { snippet: "if x > 0 {\n  fmt.Println(\"Positive\")\n} else {\n  fmt.Println(\"Non-positive\")\n}", desc: "If-else statement" },
        { snippet: "for i := 0; i < 10; i++ {\n  fmt.Println(i)\n}", desc: "For loop" },
        { snippet: "for x > 0 {\n  x--\n}", desc: "While-like loop" },
        { snippet: "switch day {\n  case 1: fmt.Println(\"Mon\")\n  default: fmt.Println(\"Other\")\n}", desc: "Switch statement" },
      ],
    },
    {
      title: "Functions & Methods",
      items: [
        { snippet: "func sum(a int, b int) int {\n  return a + b\n}", desc: "Basic function" },
        { snippet: "func multipleReturns() (int, string) {\n  return 1, \"ok\"\n}", desc: "Function with multiple returns" },
        { snippet: "func (p Person) Greet() {\n  fmt.Println(\"Hello\", p.Name)\n}", desc: "Method on struct" },
      ],
    },
    {
      title: "Structs & Interfaces",
      items: [
        { snippet: "type Person struct {\n  Name string\n  Age int\n}", desc: "Define struct" },
        { snippet: "p := Person{Name: \"Ali\", Age: 25}", desc: "Instantiate struct" },
        { snippet: "type Greeter interface {\n  Greet()\n}", desc: "Define interface" },
      ],
    },
    {
      title: "Slices & Maps",
      items: [
        { snippet: "arr := []int{1,2,3}\narr = append(arr, 4)", desc: "Slice creation and append" },
        { snippet: "m := map[string]int{\"a\": 1}\nm[\"b\"] = 2", desc: "Map creation and access" },
        { snippet: "delete(m, \"a\")", desc: "Remove key from map" },
      ],
    },
    {
      title: "Error Handling",
      items: [
        { snippet: "val, err := someFunc()\nif err != nil {\n  fmt.Println(\"Error:\", err)\n}", desc: "Handle function error" },
        { snippet: "panic(\"something went wrong\")", desc: "Trigger a panic" },
        { snippet: "defer func() {\n  if r := recover(); r != nil {\n    fmt.Println(\"Recovered\", r)\n  }\n}()", desc: "Recover from panic" },
      ],
    },
    {
      title: "Goroutines & Channels",
      items: [
        { snippet: "go func() {\n  fmt.Println(\"Running in goroutine\")\n}()", desc: "Start a goroutine" },
        { snippet: "ch := make(chan int)\nch <- 1\nval := <- ch", desc: "Send/receive via channel" },
        { snippet: "close(ch)", desc: "Close a channel" },
        { snippet: "select {\ncase val := <-ch1:\n  fmt.Println(val)\ncase ch2 <- 10:\n}", desc: "Select on multiple channels" },
      ],
    },
    {
      title: "Packages & Imports",
      items: [
        { snippet: "import (\n  \"fmt\"\n  \"math\"\n)", desc: "Import standard packages" },
        { snippet: "import mypkg \"github.com/username/project/mypkg\"", desc: "Import custom package with alias" },
      ],
    },
    {
      title: "File I/O",
      items: [
        { snippet: "data, err := os.ReadFile(\"file.txt\")\nfmt.Println(string(data))", desc: "Read file" },
        { snippet: "err := os.WriteFile(\"file.txt\", []byte(\"hello\"), 0644)", desc: "Write file" },
      ],
    },
  ],
};