import { homeButton       } from './home'
import { projectionButton } from './projection'
import { disclaimerButton } from './disclaimer'
import { initAnimation    } from './animation'

export const initControls = (builder) => {
  homeButton(builder)
  projectionButton(builder)
  disclaimerButton(builder)
  initAnimation(builder)
}

export { setAnimationEventsOnSeriesContainer } from './animation' // eslint-disable-line