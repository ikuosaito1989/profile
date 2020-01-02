import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs'
import Social from '../../src/components/social'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('ソーシャル', () => {
    return {
      components: { Social },
      template:
        '<div style="background-color: #1abc9c;"><Social name="" prefix="fab" :iconName="iconName" url="https://github.com/ikuosaito1989" target="_blank" /></div>',
      props: {
        iconName: {
          default: select(
            'アイコン名',
            {
              Github: 'fa-github',
              Twitter: 'fa-twitter',
              Facebook: 'fa-facebook',
              Instagram: 'fa-instagram'
            },
            'fa-github'
          )
        }
      }
    }
  })
