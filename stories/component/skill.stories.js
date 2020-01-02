import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Skill from '../../src/components/skill'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('スキル', () => {
    return {
      components: { Skill },
      template: '<Skill :name="name" thumbnail-url="" :star="star"/>',
      props: {
        name: {
          default: text('名前', 'Vue')
        },
        star: {
          default: select(
            '星',
            {
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5'
            },
            '3'
          )
        }
      }
    }
  })
