import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Page Not Found</title>
      </head>
      <body style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div>
          <h1 style={{ color: '#d32f2f', marginBottom: '1rem' }}>
            Page Not Found
          </h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1976d2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              display: 'inline-block',
              fontSize: '1rem'
            }}
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  )
}
