```javascript
// app/page.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```