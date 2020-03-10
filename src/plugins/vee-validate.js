import { extend, localize } from 'vee-validate'
// import VeeLocaleJa from 'vee-validate/dist/locale/ja'
import VeeLocaleJa from 'vee-validate/dist/locale/ja.json'
import { email, max, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('max', max)
extend('required', required)

// 言語設定
localize('ja', VeeLocaleJa)
