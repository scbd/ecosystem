import { homeButton       } from './home'
import { projectionButton } from './projection'
import { disclaimerButton } from './disclaimer'

export { homeButton }
export { projectionButton }
export { disclaimerButton }

export const initControls = (builder) => {
  homeButton(builder)
  projectionButton(builder)
  disclaimerButton(builder)
}