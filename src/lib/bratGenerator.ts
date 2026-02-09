// Brat Image Generator - Creates Charli XCX "Brat" album cover style images

export interface BratImageOptions {

  text: string
  backgroundColor: string
  textColor: string
  fontSize?: number
}

// Predefined color presets inspired by Brat album
export const colorPresets = {
  classic: {
    name: 'Classic Brat',
    backgroundColor: '#8ACE00',
    textColor: '#000000',
  },
  white: {
    name: 'White Brat',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  black: {
    name: 'Dark Brat',
    backgroundColor: '#1a1a1a',
    textColor: '#8ACE00',
  },
  pink: {
    name: 'Pink Brat',
    backgroundColor: '#FF69B4',
    textColor: '#000000',
  },
  blue: {
    name: 'Blue Brat',
    backgroundColor: '#00BFFF',
    textColor: '#000000',
  },
  purple: {
    name: 'Purple Brat',
    backgroundColor: '#9B59B6',
    textColor: '#FFFFFF',
  },
  orange: {
    name: 'Orange Brat',
    backgroundColor: '#FF6B35',
    textColor: '#000000',
  },
  mint: {
    name: 'Mint Brat',
    backgroundColor: '#98FF98',
    textColor: '#000000',
  },
}

export type ColorPresetKey = keyof typeof colorPresets

// Calculate optimal font size to fit text
function calculateFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxHeight: number,
  initialSize: number = 120
): number {
  let fontSize = initialSize
  const minFontSize = 24
  
  ctx.font = `bold ${fontSize}px Arial, sans-serif`
  
  // Reduce font size until text fits
  while (fontSize > minFontSize) {
    const metrics = ctx.measureText(text)
    const textWidth = metrics.width
    
    if (textWidth <= maxWidth * 0.85) {
      break
    }
    
    fontSize -= 4
    ctx.font = `bold ${fontSize}px Arial, sans-serif`
  }
  
  return fontSize
}

// Generate the Brat-style image
export function generateBratImage(
  canvas: HTMLCanvasElement,
  options: BratImageOptions
): void {
  const { text, backgroundColor, textColor } = options
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return
  
  const width = canvas.width
  const height = canvas.height
  
  // Fill background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)
  
  // Configure text
  const displayText = text.toLowerCase() || 'brat'
  const fontSize = calculateFontSize(ctx, displayText, width, height)
  
  ctx.font = `bold ${fontSize}px Arial, sans-serif`
  ctx.fillStyle = textColor
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // Add slight blur effect for authentic look
  ctx.filter = 'blur(0.5px)'
  
  // Draw text centered
  ctx.fillText(displayText, width / 2, height / 2)
  
  // Reset filter
  ctx.filter = 'none'
}

// Convert canvas to downloadable blob
export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob)
    }, 'image/png', 1.0)
  })
}

// Download the canvas as an image
export async function downloadBratImage(
  canvas: HTMLCanvasElement,
  filename: string = 'brat-generator'
): Promise<void> {
  const blob = await canvasToBlob(canvas)
  
  if (!blob) return
  
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename}.png`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Share the canvas image (if Web Share API is available)
export async function shareBratImage(
  canvas: HTMLCanvasElement,
  text: string
): Promise<boolean> {
  if (!navigator.share || !navigator.canShare) {
    return false
  }
  
  const blob = await canvasToBlob(canvas)
  
  if (!blob) return false
  
  const file = new File([blob], 'brat-generator.png', { type: 'image/png' })
  
  const shareData = {
    title: 'Brat Generator',
    text: `Check out my Brat creation: "${text}"`,
    files: [file],
  }
  
  if (!navigator.canShare(shareData)) {
    return false
  }
  
  try {
    await navigator.share(shareData)
    return true
  } catch (err) {
    console.error('Share failed:', err)
    return false
  }
}
