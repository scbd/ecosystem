import { homeButton       } from './home'
import { projectionButton } from './projection'
import { disclaimerButton } from './disclaimer'
export { initAnimation    } from './animation'

export const initControls = (builder) => {
  homeButton(builder)
  projectionButton(builder)
  disclaimerButton(builder)
}

export { setAnimationEventsOnSeriesContainer } from './animation' // eslint-disable-line