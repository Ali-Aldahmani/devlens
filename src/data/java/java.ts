export const java = {
  name: "Java",
  import: "Java",
  categories: [
    {
      title: "Basic Syntax & Types",
      items: [
        { snippet: "int x = 5;\ndouble y = 3.14;\nboolean flag = true;\nString name = \"Ali\";", desc: "Primitive types and String" },
        { snippet: "System.out.println(\"Hello World\");", desc: "Print to console" },
        { snippet: "final int CONSTANT = 10;", desc: "Declare a constant" },
      ],
    },
    {
      title: "Control Flow",
      items: [
        { snippet: "if (x > 0) {\n  System.out.println(\"Positive\");\n} else {\n  System.out.println(\"Non-positive\");\n}", desc: "If-else statement" },
        { snippet: "for (int i = 0; i < 10; i++) {\n  System.out.println(i);\n}", desc: "For loop" },
        { snippet: "while (x > 0) {\n  x--;\n}", desc: "While loop" },
        { snippet: "switch(day) {\n  case 1: System.out.println(\"Mon\"); break;\n  default: System.out.println(\"Other\");\n}", desc: "Switch-case statement" },
      ],
    },
    {
      title: "Classes & Objects",
      items: [
        { snippet: "class Person {\n  String name;\n  int age;\n  Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}", desc: "Basic class with constructor" },
        { snippet: "Person p = new Person(\"Ali\", 25);", desc: "Instantiate an object" },
        { snippet: "p.name = \"Ahmed\";", desc: "Access object field" },
      ],
    },
    {
      title: "Methods & Overloading",
      items: [
        { snippet: "int sum(int a, int b) {\n  return a + b;\n}", desc: "Simple method" },
        { snippet: "int sum(int a, int b, int c) {\n  return a + b + c;\n}", desc: "Method overloading" },
        { snippet: "void print(String msg) {\n  System.out.println(msg);\n}", desc: "Void method" },
      ],
    },
    {
      title: "Collections & Generics",
      items: [
        { snippet: "List<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.get(0);", desc: "ArrayList usage" },
        { snippet: "Map<String, Integer> map = new HashMap<>();\nmap.put(\"a\", 1);\nmap.get(\"a\");", desc: "HashMap usage" },
        { snippet: "Set<Integer> set = new HashSet<>();\nset.add(10);", desc: "HashSet usage" },
      ],
    },
    {
      title: "Streams & Lambdas",
      items: [
        { snippet: "List<Integer> nums = List.of(1,2,3);\nnums.stream().filter(n -> n % 2 == 0).forEach(System.out::println);", desc: "Filter even numbers with stream" },
        { snippet: "nums.stream().map(n -> n * 2).collect(Collectors.toList());", desc: "Map and collect" },
      ],
    },
    {
      title: "Exception Handling",
      items: [
        { snippet: "try {\n  int x = 10 / 0;\n} catch (ArithmeticException e) {\n  e.printStackTrace();\n} finally {\n  System.out.println(\"Done\");\n}", desc: "Try-catch-finally block" },
        { snippet: "throw new IllegalArgumentException(\"Invalid argument\");", desc: "Throw exception" },
      ],
    },
    {
      title: "File I/O",
      items: [
        { snippet: "Files.readAllLines(Paths.get(\"file.txt\"))", desc: "Read all lines from file" },
        { snippet: "Files.write(Paths.get(\"file.txt\"), lines)", desc: "Write lines to file" },
      ],
    },
    {
      title: "Multithreading",
      items: [
        { snippet: "Thread t = new Thread(() -> System.out.println(\"Running\"));\nt.start();", desc: "Create and start a thread using lambda" },
        { snippet: "synchronized(this) {\n  // critical section\n}", desc: "Synchronized block" },
      ],
    },
    {
      title: "Java 8+ Features",
      items: [
        { snippet: "Optional<String> opt = Optional.of(\"value\");\nopt.ifPresent(System.out::println);", desc: "Optional usage" },
        { snippet: "LocalDate now = LocalDate.now();\nLocalDate tomorrow = now.plusDays(1);", desc: "Date/Time API" },
      ],
    },
  ],
};