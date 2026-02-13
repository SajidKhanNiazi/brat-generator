import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Brat Meme Generator – Create Viral Brat Style Memes Online'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#8ACE00',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        fontSize: 120,
                        color: 'black',
                        letterSpacing: '-0.02em',
                        marginBottom: 20,
                        textAlign: 'center',
                        lineHeight: 1,
                    }}
                >
                    brat
                </div>
                <div
                    style={{
                        fontSize: 60,
                        color: 'black',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                    }}
                >
                    meme generator
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
