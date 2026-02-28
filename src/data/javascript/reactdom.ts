export const reactDom = {
  name: "React DOM",
  import: "npm i react-dom",
  categories: [
    {
      title: "Client Rendering (React 18+)",
      items: [
        { snippet: "const root = createRoot(document.getElementById('root'));\nroot.render(<App />);", desc: "Create a React root and render the application into the DOM (Modern standard)." },
        { snippet: "const root = hydrateRoot(document.getElementById('root'), <App />);", desc: "Hydrate a server-rendered HTML container with interactive React components." },
        { snippet: "root.unmount();", desc: "Safely destroy the React root and clean up the DOM node." },
      ],
    },
    {
      title: "Portals & Advanced Utilities",
      items: [
        { snippet: "createPortal(<Modal />, document.body);", desc: "Render a component into a different DOM node outside of the parent hierarchy (great for modals/tooltips)." },
        { snippet: "flushSync(() => {\n  setState(newValue);\n});", desc: "Force React to flush any state updates synchronously and update the DOM immediately." },
      ],
    },
    {
      title: "Server-Side Rendering (react-dom/server)",
      items: [
        { snippet: "const html = renderToString(<App />);", desc: "Render a React tree to an HTML string (Traditional SSR)." },
        { snippet: "const stream = renderToPipeableStream(<App />, {\n  onShellReady() {\n    stream.pipe(res);\n  }\n});", desc: "Render a React tree to a Node.js stream for modern, progressive SSR (React 18+)." },
        { snippet: "const staticMarkup = renderToStaticMarkup(<App />);", desc: "Render to non-interactive HTML without React data attributes (useful for emails or static generation)." },
      ],
    },
    {
      title: "Legacy Client API (React 17 & Below)",
      items: [
        { snippet: "ReactDOM.render(<App />, document.getElementById('root'));", desc: "Render a React application to the DOM (Deprecated in React 18)." },
        { snippet: "ReactDOM.hydrate(<App />, document.getElementById('root'));", desc: "Hydrate a server-rendered container (Deprecated in React 18)." },
        { snippet: "ReactDOM.unmountComponentAtNode(document.getElementById('root'));", desc: "Remove a mounted React component from the DOM." },
      ],
    },
  ],
};