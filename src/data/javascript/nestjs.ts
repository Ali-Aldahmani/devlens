export const nestjs = {
  name: "NestJS",
  import: "npm i nest",
  categories: [
    {
      title: "CLI & Scaffolding",
      items: [
        { snippet: "nest new my-project", desc: "Scaffold a new NestJS application." },
        { snippet: "nest generate module users", desc: "Generate a new module (alias: nest g mo)." },
        { snippet: "nest generate controller users", desc: "Generate a new controller (alias: nest g co)." },
        { snippet: "nest generate service users", desc: "Generate a new service/provider (alias: nest g s)." },
        { snippet: "nest generate resource users", desc: "Generate a complete CRUD resource (module, controller, service, DTOs, entities)." },
        { snippet: "npm run start:dev", desc: "Start the application in development mode with live reloading." },
      ],
    },
    {
      title: "Modules (Architecture)",
      items: [
        { snippet: "@Module({\n  imports: [],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}", desc: "Define a module to organize the application structure." },
        { snippet: "exports: [UsersService]", desc: "Export a provider from a module so it can be used in other modules." },
      ],
    },
    {
      title: "Controllers (Routing)",
      items: [
        { snippet: "@Controller('users')\nexport class UsersController {}", desc: "Define a controller with a base route prefix." },
        { snippet: "@Get(':id')\nfindOne(@Param('id') id: string) {\n  return this.usersService.findOne(id);\n}", desc: "Handle GET requests and extract a dynamic route parameter." },
        { snippet: "@Post()\ncreate(@Body() createUserDto: CreateUserDto) {\n  return this.usersService.create(createUserDto);\n}", desc: "Handle POST requests and extract the request body." },
        { snippet: "@HttpCode(204)", desc: "Set a custom HTTP status code for the response." },
      ],
    },
    {
      title: "Providers & Dependency Injection",
      items: [
        { snippet: "@Injectable()\nexport class UsersService {\n  findAll() { return []; }\n}", desc: "Define an injectable service (provider) containing business logic." },
        { snippet: "constructor(private readonly usersService: UsersService) {}", desc: "Inject a service into a controller or another provider using the constructor." },
      ],
    },
    {
      title: "Pipes (Validation & Transformation)",
      items: [
        { snippet: "app.useGlobalPipes(new ValidationPipe());", desc: "Enable global validation based on class-validator decorators." },
        { snippet: "@UsePipes(new ValidationPipe())", desc: "Apply a pipe at the method or controller level." },
        { snippet: "findOne(@Param('id', ParseIntPipe) id: number)", desc: "Transform a string route parameter into an integer." },
      ],
    },
    {
      title: "Guards & Interceptors",
      items: [
        { snippet: "@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    return true;\n  }\n}", desc: "Create a guard to protect routes (e.g., authentication/authorization)." },
        { snippet: "@UseGuards(AuthGuard)", desc: "Apply a guard to a specific route or controller." },
        { snippet: "@UseInterceptors(CacheInterceptor)", desc: "Apply an interceptor to mutate the response or handle caching." },
      ],
    },
  ],
};