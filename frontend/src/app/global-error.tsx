'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          textAlign: 'center'
        }}>
          <h1>500 - Server Error</h1>
          <p>Something went wrong on our end.</p>
          <button onClick={reset} style={{ 
            padding: '8px 16px', 
            backgroundColor: 'blue', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}