import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'ClientFuse Blog';
  const category = searchParams.get('category') || 'Marketing';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f1a',
          backgroundImage: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0a192f 100%)',
          padding: '60px',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Gradient orb top right */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Gradient orb bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <circle cx="30" cy="35" r="18" stroke="url(#grad)" strokeWidth="6" fill="none"/>
              <circle cx="70" cy="35" r="18" stroke="url(#grad)" strokeWidth="6" fill="none"/>
              <circle cx="50" cy="70" r="18" stroke="url(#grad)" strokeWidth="6" fill="none"/>
              <line x1="42" y1="47" x2="42" y2="58" stroke="url(#grad)" strokeWidth="5" strokeLinecap="round"/>
              <line x1="58" y1="47" x2="58" y2="58" stroke="url(#grad)" strokeWidth="5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#60a5fa"/>
                </linearGradient>
              </defs>
            </svg>
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              ClientFuse
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              padding: '8px 20px',
              borderRadius: '20px',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#60a5fa', fontSize: '18px', fontWeight: 600 }}>
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: title.length > 50 ? '42px' : '52px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '900px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {title}
          </h1>

          {/* URL */}
          <span
            style={{
              fontSize: '20px',
              color: '#64748b',
              marginTop: '40px',
              letterSpacing: '1px',
            }}
          >
            clientfuse.io/blog
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
