import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import Tag from '../../src/components/tag'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('タグ', () => {
    return {
      components: { Tag },
      template: '<Tag :name="name"/>>',
      props: {
        name: {
          default: text('タグ名', 'NuxtJS')
        }
      }
    }
  })
