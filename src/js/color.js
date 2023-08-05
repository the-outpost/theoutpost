export function compliment(color) {
  // Ensure the input color is in the format #RRGGBB or RGB(R, G, B)
  const isValidHexColor = /^#([A-Fa-f0-9]{6})$/.test(color)
  const isValidRGBColor = /^RGB\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(color)

  if (!isValidHexColor && !isValidRGBColor) {
    throw new Error('Invalid color format. Please use #RRGGBB or RGB(R, G, B).')
  }

  let red, green, blue
  if (isValidHexColor) {
    red = parseInt(color.slice(1, 3), 16)
    green = parseInt(color.slice(3, 5), 16)
    blue = parseInt(color.slice(5, 7), 16)
  } else {
    const match = color.match(/^RGB\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/)
    red = parseInt(match[1], 10)
    green = parseInt(match[2], 10)
    blue = parseInt(match[3], 10)
  }

  const invertedRed = 255 - red
  const invertedGreen = 255 - green
  const invertedBlue = 255 - blue

  const complementaryColorHex = `#${invertedRed.toString(16).padStart(2, '0')}${invertedGreen
    .toString(16)
    .padStart(2, '0')}${invertedBlue.toString(16).padStart(2, '0')}`

  return complementaryColorHex.toUpperCase()
}

export function getReadableFontColor(backgroundHex) {
  const backgroundRGB = hexToRGB(backgroundHex)
  const luminance = getRelativeLuminance(backgroundRGB)

  // Decide the threshold for font color
  const threshold = 0.5

  // If background luminance is greater than the threshold, use indigo-950 font; otherwise, use white font
  return luminance > threshold ? '#1d1b4b' : '#FFFFFF'
}

function hexToRGB(hex) {
  const hexColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return [parseInt(hexColor[1], 16), parseInt(hexColor[2], 16), parseInt(hexColor[3], 16)]
}

function getRelativeLuminance(rgb) {
  const [r, g, b] = rgb.map(c => {
    const sRGBValue = c / 255
    return sRGBValue <= 0.03928 ? sRGBValue / 12.92 : ((sRGBValue + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
