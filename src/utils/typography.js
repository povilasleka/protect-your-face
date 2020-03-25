import Typography from 'typography'
import Irving from 'typography-theme-irving'

Irving.baseFontSize = 16;

// @ts-ignore
const typography = new Typography(Irving);

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography