import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// No message specified.
extend('email', {
  ...email,
  message: '有効なメールアドレスではありません'
})

// Override the default message.
extend('required', {
  ...required,
  message: '{_field_}は必須項目です。'
})

extend('max', {
  validate: (value, args) => {
    return value.length <= args.length
  },
  message: '{_field_}は{length}文字以内で入力してください。',
  params: ['length']
})
