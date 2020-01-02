import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import Portfolio from '../../src/components/portfolio'

import '../story_helpers/common_style_includable'

storiesOf('コンポーネント', module)
  .addDecorator(withKnobs)
  .add('ポートフォリオ', () => {
    return {
      components: { Portfolio },
      template:
        '<Portfolio :name="name" id="1" :thumbnail-url="thumbnailUrl" />',
      props: {
        name: {
          default: text('タイトル', 'みんなの洋楽ランキング')
        },
        thumbnailUrl: {
          default: text(
            'サムネイルURL',
            'https://isaito-mock.herokuapp.com/main.jpg'
          )
        }
      }
    }
  })
