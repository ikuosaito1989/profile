<template>
  <div class="col-lg-8 mx-auto">
    <form
      id="contactForm"
      @submit.prevent="onSubmit"
      name="sentMessage"
      novalidate="novalidate"
    >
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>お名前</label>
          <input
            id="name"
            v-model="form.name"
            class="form-control"
            type="text"
            placeholder="山田 太郎"
          />
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>メールアドレス</label>
          <input
            id="email"
            v-model="form.email"
            class="form-control"
            type="email"
            placeholder="ikuosaito1989@gmail.com"
          />
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>メッセージ</label>
          <!-- istanbul ignore next -->
          <textarea
            id="message"
            v-model="form.message"
            class="form-control"
            rows="5"
            placeholder="まずはお話から♪"
          ></textarea>
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <br />
      <div id="success"></div>
      <div class="form-group">
        <button
          id="sendMessageButton"
          type="submit"
          class="btn btn-primary btn-xl"
        >
          送信
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
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
