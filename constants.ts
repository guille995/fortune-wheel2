
export const WHEEL_OPTIONS: string[] = ["Si", "No", "Tira otra vez"];

// Using Tailwind CSS color names for conceptual mapping, actual hex values used for SVG compatibility
// Si: green-500, No: red-500, Tira otra vez: yellow-400
export const WHEEL_COLORS: string[] = ["#22C55E", "#EF4444", "#FACC15"]; // Adjusted for better contrast/vibrancy

export const NUM_TOTAL_SEGMENTS: number = 12; // Should be a multiple of WHEEL_OPTIONS.length
export const WHEEL_TRANSITION_DURATION: number = 5000; // ms
export const WHEEL_SIZE: number = 360; // px for SVG viewbox width/height
export const POINTER_SIZE: number = 30; // px
