import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import Portfolio from '../../src/components/portfolio'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('ポートフォリオ', () => {
    return {
      components: { Portfolio },
      template:
        '<div class="portfolio"><Portfolio :name="name" id="1" :thumbnail-url="thumbnailUrl" /></div>',
      props: {
        name: {
          default: text('タイトル', 'みんなの洋楽ランキング')
        },
        thumbnailUrl: {
          default: text(
            'サムネイルURL',
            'https://festive-yonath.azurewebsites.net/main.jpg'
          )
        }
      }
    }
  })
