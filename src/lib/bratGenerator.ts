// Brat Image Generator - Creates Charli XCX "Brat" album cover style images

export type AspectRatio = 'square' | 'story' | 'banner'
export type Alignment = 'left' | 'center' | 'right'
export type Valign = 'top' | 'center' | 'bottom'
export type FontWeight = 'bold' | 'medium' | 'light'
export type BackgroundType = 'solid' | 'gradient'

export interface BratImageOptions {
  text: string
  subtitle?: string
  backgroundColor: string
  secondaryColor?: string
  backgroundType?: BackgroundType
  textColor: string
  fontSize?: number
  subtitleFontSize?: number
  blur?: number
  rotation?: number // in degrees
  aspectRatio?: AspectRatio
  alignment?: Alignment
  valign?: Valign
  fontWeight?: FontWeight
  noise?: number // 0 to 1
  sticker?: string // emoji or icon
}

export interface ColorPreset {
  name: string
  backgroundColor: string
  textColor: string
  secondaryColor?: string
  backgroundType?: BackgroundType
}

// Predefined color presets inspired by Brat album
export const colorPresets: Record<string, ColorPreset> = {
  pink: {
    name: 'Brat Pink',
    backgroundColor: '#ff2d95',
    textColor: '#000000',
  },
  deepGreen: {
    name: 'Deep Green',
    backgroundColor: '#00a651',
    textColor: '#000000',
  },
  lime: {
    name: 'Lime green',
    backgroundColor: '#8ace00',
    textColor: '#000000',
  },
  neonGreen: {
    name: 'Neon Green',
    backgroundColor: '#00ff00',
    textColor: '#000000',
  },
  black: {
    name: 'Pure Black',
    backgroundColor: '#000000',
    textColor: '#ffffff',
  },
  silver: {
    name: 'Chrome Silver',
    backgroundColor: '#c0c0c0',
    textColor: '#000000',
  },
  babyBlue: {
    name: 'Baby Blue',
    backgroundColor: '#89d8ff',
    textColor: '#000000',
  },
  neonCyan: {
    name: 'Neon Cyan',
    backgroundColor: '#00ffff',
    textColor: '#000000',
  },
  electricPurple: {
    name: 'Electric Purple',
    backgroundColor: '#9126ff',
    textColor: '#ffffff',
  },
}

export type ColorPresetKey = keyof typeof colorPresets | 'custom'

// Calculate optimal font size to fit multiline text
function calculateFontSize(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  maxWidth: number,
  maxHeight: number,
  initialSize: number = 110
): number {
  let fontSize = initialSize
  const minFontSize = 16
  const lineHeight = 1.15

  // Batch reads: measure text in a loop without interleaving writes
  while (fontSize > minFontSize) {
    ctx.font = `bold ${fontSize}px Arial, sans-serif`

    let fitsWidth = true
    for (const line of lines) {
      if (ctx.measureText(line).width > maxWidth * 0.9) {
        fitsWidth = false
        break
      }
    }

    const totalHeight = lines.length * fontSize * lineHeight
    if (fitsWidth && totalHeight <= maxHeight * 0.8) {
      break
    }

    fontSize -= 4
  }

  return fontSize
}

// Generate the Brat-style image
export function generateBratImage(
  canvas: HTMLCanvasElement,
  options: BratImageOptions
): void {
  const {
    text,
    subtitle,
    backgroundColor,
    secondaryColor,
    backgroundType = 'solid',
    textColor,
    fontSize: manualFontSize,
    subtitleFontSize: manualSubtitleFontSize,
    blur = 0.5,
    rotation = 0,
    aspectRatio = 'square',
    alignment = 'center',
    valign = 'center',
    fontWeight = 'bold',
    noise = 0
  } = options
  const ctx = canvas.getContext('2d')

  if (!ctx) return

  // 1. Set Dimensions based on Aspect Ratio
  let width = 1080
  let height = 1080

  if (aspectRatio === 'story') {
    width = 1080
    height = 1920
  } else if (aspectRatio === 'banner') {
    width = 1500
    height = 500
  }

  canvas.width = width
  canvas.height = height

  // 2. Clear and Fill background
  ctx.clearRect(0, 0, width, height)

  if (backgroundType === 'gradient' && secondaryColor) {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, backgroundColor)
    gradient.addColorStop(1, secondaryColor)
    ctx.fillStyle = gradient
  } else {
    ctx.fillStyle = backgroundColor
  }
  ctx.fillRect(0, 0, width, height)

  // 3. Apply Noise if requested
  if (noise > 0) {
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * noise * 255
      data[i] = Math.min(255, Math.max(0, data[i] + n))
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n))
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n))
    }
    ctx.putImageData(imageData, 0, 0)
  }

  // 4. Configure text
  const displayText = text.toLowerCase() || 'brat'
  const lines = displayText.split('\n').filter(l => l.trim() !== '')

  const weightMap = {
    bold: 'bold',
    medium: '500',
    light: '300'
  }
  const weightS = weightMap[fontWeight]

  const fontSize = manualFontSize || calculateFontSize(ctx, lines, width, height)
  const lineHeight = fontSize * 1.15

  ctx.save()

  // Global rotation and translation
  ctx.translate(width / 2, height / 2)
  if (rotation !== 0) {
    ctx.rotate((rotation * Math.PI) / 180)
  }
  ctx.translate(-width / 2, -height / 2)

  // Set Font styles
  ctx.font = `${weightS} ${fontSize}px Arial, sans-serif`
  ctx.fillStyle = textColor
  ctx.textAlign = alignment as CanvasTextAlign
  ctx.filter = `blur(${blur}px)`

  // Calculate Drawing Position
  const totalTextHeight = lines.length * lineHeight
  let startX = width / 2
  if (alignment === 'left') startX = width * 0.05
  if (alignment === 'right') startX = width * 0.95

  let startY = 0
  if (valign === 'top') startY = height * 0.1 + fontSize
  else if (valign === 'bottom') startY = height * 0.9 - totalTextHeight + fontSize
  else startY = (height - totalTextHeight) / 2 + fontSize

  // Draw main text
  lines.forEach((line, i) => {
    ctx.fillText(line.trim(), startX, startY + (i * lineHeight))
  })

  // Draw sticker if present
  if (options.sticker) {
    ctx.font = `${fontSize * 0.8}px Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(options.sticker, width * 0.85, height * 0.15)
  }

  // Draw subtitle if present
  if (subtitle) {
    const subS = manualSubtitleFontSize || (fontSize * 0.4)
    ctx.font = `italic ${weightS} ${subS}px Arial, sans-serif`
    const subY = startY + totalTextHeight + (subS * 0.5)
    ctx.fillText(subtitle.trim(), startX, subY)
  }

  ctx.restore()
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
