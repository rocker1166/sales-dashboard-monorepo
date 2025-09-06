'use client'

export default function Error() {
  return (
    <html>
      <head>
        <title>Error</title>
      </head>
      <body style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div>
          <h1 style={{ color: '#d32f2f', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            We encountered an error while loading this page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
