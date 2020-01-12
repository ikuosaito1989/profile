import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import Resume from '../../src/components/resume'

import '../story_helpers/common_style_includable'

storiesOf('component', module)
  .addDecorator(withKnobs)
  .add('職務経歴', () => {
    return {
      components: { Resume },
      template:
        '<Resume :company="company" :enrollmentPeriod="items" :jobDescription="jobDescription" :deliverables="deliverables"></Resume>',
      props: {
        company: {
          default: text('会社名', '株式会社〇〇')
        },
        jobDescription: {
          default: text(
            '職務経歴',
            '20代後半〜３０前半まではさまざまな経験をした方が良いと思いフリーランスとして活動。Angularをはじめとしたフロントエンド開発がメインとなり、現在はVue、Rubyで開発中。'
          )
        }
      },
      data: () => ({
        value: '',
        items: {
          from: '2015/05/01',
          to: '2018/03/31'
        },
        deliverables: [
          {
            name: 'みんなの洋楽ランキング',
            url: 'https://mygkrnk.com/'
          },
          {
            name: 'プロフィール',
            url: 'https://festive-yonath-a04e1e.netlify.com/'
          }
        ]
      })
    }
  })
