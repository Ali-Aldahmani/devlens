export const nextjs = {
  name: "Next.js",
  import: "npm i next",
  categories: [
    {
      title: "CLI & Setup",
      items: [
        { snippet: "npx create-next-app@latest my-app", desc: "Scaffold a new Next.js project with the latest features." },
        { snippet: "npm run dev", desc: "Start the Next.js development server with Fast Refresh." },
        { snippet: "npm run build && npm run start", desc: "Build the application for production and start the production server." },
      ],
    },
    {
      title: "Core Routing Files",
      items: [
        { snippet: "export default function Page() {\n  return <h1>Home</h1>;\n}", desc: "Basic Server Component page (`page.tsx`)." },
        { snippet: "export default function Layout({ children }: { children: React.ReactNode }) {\n  return <section>{children}</section>;\n}", desc: "Layout component that preserves state across navigation (`layout.tsx`)." },
        { snippet: "export default function Loading() {\n  return <p>Loading...</p>;\n}", desc: "Loading UI that wraps a route segment in a React Suspense boundary (`loading.tsx`)." },
        { snippet: "'use client';\n\nexport default function Error({ error, reset }: { error: Error; reset: () => void }) {\n  return <button onClick={() => reset()}>Try again</button>;\n}", desc: "Client Component error boundary to catch unexpected runtime errors (`error.tsx`)." },
      ],
    },
    {
      title: "Data Fetching (Server Components)",
      items: [
        { snippet: "const res = await fetch('https://api.example.com/data');\nconst data = await res.json();", desc: "Default fetch behavior (automatically cached/Static Site Generation)." },
        { snippet: "const res = await fetch('https://api.example.com/data', { cache: 'no-store' });", desc: "Opt out of caching for dynamic data (Server-Side Rendering)." },
        { snippet: "const res = await fetch('https://api.example.com/data', { next: { revalidate: 3600 } });", desc: "Revalidate and update cached data periodically (Incremental Static Regeneration)." },
      ],
    },
    {
      title: "Navigation & Routing",
      items: [
        { snippet: "import Link from 'next/link';\n\n<Link href=\"/dashboard\">Dashboard</Link>", desc: "Built-in component for fast, client-side navigation with prefetching." },
        { snippet: "import { useRouter } from 'next/navigation';\n\nconst router = useRouter();\nrouter.push('/dashboard');", desc: "Programmatically navigate routes inside Client Components." },
        { snippet: "import { redirect } from 'next/navigation';\n\nredirect('/login');", desc: "Redirect a user from a Server Component or Route Handler." },
        { snippet: "import { useParams } from 'next/navigation';\n\nconst params = useParams();\nconsole.log(params.slug);", desc: "Read dynamic route parameters (e.g., `[slug]`) in a Client Component." },
      ],
    },
    {
      title: "Route Handlers (API)",
      items: [
        { snippet: "import { NextResponse } from 'next/server';\n\nexport async function GET(request: Request) {\n  return NextResponse.json({ message: 'Success' });\n}", desc: "Create a RESTful GET API endpoint (`route.ts`)." },
        { snippet: "export async function POST(request: Request) {\n  const body = await request.json();\n  return NextResponse.json(body, { status: 201 });\n}", desc: "Parse JSON body data in a POST request." },
      ],
    },
    {
      title: "Optimization Components",
      items: [
        { snippet: "import Image from 'next/image';\n\n<Image src=\"/logo.png\" alt=\"Logo\" width={100} height={100} />", desc: "Render an automatically optimized, responsive, and lazy-loaded image." },
        { snippet: "import { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n<body className={inter.className}>", desc: "Automatically optimize and load a Google Font at build time." },
      ],
    },
  ],
};