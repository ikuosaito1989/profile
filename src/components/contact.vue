<template>
  <div class="col-lg-8 mx-auto">
    <ValidationObserver v-slot="{ invalid }" slim>
      <form
        id="contactForm"
        @submit.prevent="onSubmit"
        name="sentMessage"
        novalidate="novalidate"
      >
        <div class="control-group">
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>お名前</label>
            <ValidationProvider
              v-slot="{ errors }"
              name="お名前"
              rules="required|max:10"
            >
              <input
                id="name"
                v-model="form.name"
                class="form-control"
                type="text"
                placeholder="山田 太郎"
              />
              <p class="help-block text-danger">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>メールアドレス</label>
            <ValidationProvider
              v-slot="{ errors }"
              name="メールアドレス"
              rules="required|email"
            >
              <input
                id="email"
                v-model="form.email"
                class="form-control"
                type="email"
                placeholder="ikuosaito1989@gmail.com"
              />
              <p class="help-block text-danger">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>メッセージ</label>
            <ValidationProvider
              v-slot="{ errors }"
              name="メッセージ"
              rules="required|max:500"
            >
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                rows="5"
                placeholder="まずはお話から♪"
              ></textarea>
              <p class="help-block text-danger">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
        </div>
        <br />
        <div id="success"></div>
        <div class="form-group">
          <button
            id="sendMessageButton"
            :disabled="invalid"
            type="submit"
            class="btn btn-primary btn-xl"
          >
            送信
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      message: ''
    }
  }),
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
