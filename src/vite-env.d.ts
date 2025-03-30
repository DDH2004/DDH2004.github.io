/// <reference types="vite/client" />

declare module '*.md' {
  // When "mode: 'html'" is set
  const html: string;
  // When "mode: 'raw'" is set
  const raw: string;
  // When "mode: [html, raw]" is set
  export { html, raw };
  // Modify below per your usage
  export default raw;
}