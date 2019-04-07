// Import FontAwesome icons
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faFolder,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

// Add icons
library.add([
  faFolder,
  faInfoCircle,
  faGithub,
  faTwitter
])

export default {
  initialize: () => {
    // Start watching the DOM and replace <i> tags with <svg>
    dom.watch()
  }
}
