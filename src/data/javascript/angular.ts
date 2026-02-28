export const angular = {
  name: "Angular (Modern)",
  import: " ",
  categories: [
    {
      title: "CLI & Scaffolding",
      items: [
        { snippet: "ng new my-app --standalone", desc: "Create a new Angular workspace using modern standalone components." },
        { snippet: "ng generate component my-component", desc: "Generate a new component (alias: ng g c)." },
        { snippet: "ng generate service data", desc: "Generate a new service for data or business logic (alias: ng g s)." },
        { snippet: "ng serve --open", desc: "Build the app, start the development server, and open it in the browser." },
        { snippet: "ng build", desc: "Compile the application into an output directory for production." },
      ],
    },
    {
      title: "Components (Standalone)",
      items: [
        { snippet: "@Component({\n  selector: 'app-hello',\n  standalone: true,\n  template: `<h1>Hello {{ name }}</h1>`\n})\nexport class HelloComponent {\n  name = 'World';\n}", desc: "Define a modern Standalone Component without needing an NgModule." },
        { snippet: "@Input() title: string = '';", desc: "Define an input property to receive data from a parent component." },
        { snippet: "@Output() valueChange = new EventEmitter<string>();", desc: "Define an output event to send data up to a parent component." },
      ],
    },
    {
      title: "Template Control Flow (Angular 17+)",
      items: [
        { snippet: "@if (isLoggedIn) {\n  <p>Welcome back!</p>\n} @else {\n  <p>Please log in.</p>\n}", desc: "Conditionally render template sections using the modern built-in block." },
        { snippet: "@for (user of users; track user.id) {\n  <li>{{ user.name }}</li>\n} @empty {\n  <li>No users found.</li>\n}", desc: "Iterate over an array with built-in empty state handling." },
        { snippet: "@switch (status) {\n  @case ('active') { <span>Active</span> }\n  @default { <span>Unknown</span> }\n}", desc: "Switch statement directly inside the HTML template." },
      ],
    },
    {
      title: "Signals (Modern Reactivity)",
      items: [
        { snippet: "count = signal(0);", desc: "Create a reactive writable Signal with an initial value." },
        { snippet: "this.count.set(5);", desc: "Set a Signal to a new absolute value." },
        { snippet: "this.count.update(c => c + 1);", desc: "Update a Signal based on its previous value." },
        { snippet: "doubleCount = computed(() => this.count() * 2);", desc: "Create a read-only Signal derived from other Signals." },
        { snippet: "effect(() => {\n  console.log(`The count is now: ${this.count()}`);\n});", desc: "Run a side effect whenever a tracked Signal changes." },
      ],
    },
    {
      title: "Services & Dependency Injection",
      items: [
        { snippet: "@Injectable({\n  providedIn: 'root'\n})\nexport class DataService {\n  fetchData() { /* ... */ }\n}", desc: "Define a service that is globally available as a singleton." },
        { snippet: "constructor(private dataService: DataService) {}", desc: "Inject a service via the constructor (classic OOP approach)." },
        { snippet: "private dataService = inject(DataService);", desc: "Inject a service using the modern `inject()` function." },
      ],
    },
    {
      title: "Template Bindings",
      items: [
        { snippet: "<h1>{{ title }}</h1>", desc: "Interpolation: Bind a component class property to the template." },
        { snippet: "<button [disabled]=\"isLoading\">Submit</button>", desc: "Property Binding: Bind a DOM element property to a component property." },
        { snippet: "<button (click)=\"saveData()\">Save</button>", desc: "Event Binding: Listen to a DOM event and trigger a component method." },
        { snippet: "<input [(ngModel)]=\"username\">", desc: "Two-way Data Binding: Sync data between the template and the component (requires FormsModule)." },
      ],
    },
    {
      title: "Routing",
      items: [
        { snippet: "export const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: '', redirectTo: '/home', pathMatch: 'full' }\n];", desc: "Define application routes." },
        { snippet: "<a routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>", desc: "Navigate to a route and apply a class when active." },
        { snippet: "this.router.navigate(['/details', id]);", desc: "Programmatically navigate to a route using the Router service." },
      ],
    },
  ],
};