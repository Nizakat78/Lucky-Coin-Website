import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
          borderRadius: '50%',
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        L
      </div>
    ),
    {
      ...size,
    }
  );
}
