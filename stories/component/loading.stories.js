import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs'
import Loading from '../../src/components/loading'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('ローディング', () => {
    return {
      components: { Loading },
      template:
        '<Loading v-model="star"><div>ローディングが終わりました。</div></Loading>',
      props: {
        star: {
          default: select(
            '表示',
            {
              有効: false,
              無効: true
            },
            false
          )
        }
      }
    }
  })
