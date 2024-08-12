<template>
  <div id="page-top">
    <!-- Masthead -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image -->
        <img
          class="masthead-avatar mb-5"
          src="~/assets/img/profile.png"
          alt=""
        />

        <!-- Masthead Heading -->
        <h1 class="masthead-heading mb-0">
          Ikuo Saito
        </h1>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Masthead Subheading -->
        <p class="masthead-subheading font-weight-light mb-0">
          Full Stack Engineer
        </p>
      </div>
    </header>

    <!-- Portfolio Section -->
    <section id="portfolio" class="page-section portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          ポートフォリオ
        </h2>
        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <p class="lead">
          個人で作ったサービスです。アーキテクチャや苦労話など書いてますのでぜひご覧ください！
        </p>
        <Loading v-model="portfolios">
          <div class="row">
            <Portfolio
              :key="index"
              v-for="(portfolio, index) in portfolios"
              :name="portfolio.name"
              :id="portfolio.id"
              :thumbnail-url="portfolio.thumbnailUrl"
            />
          </div>
        </Loading>
      </div>
    </section>

    <section id="about" class="page-section bg-primary text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center text-white">
          スキル
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <Loading v-model="skills">
          <p class="lead">
            はじめまして、こんにちは。東京近郊でWEBエンジニアをやっています。<br />
            WEBサービスを作ることが好きなのでフロントエンド、サーバー問わずやっています。
          </p>
          <div style="justify-content: center;" class="row">
            <Skill
              :key="index"
              v-for="(skill, index) in skills"
              :name="skill.name"
              :thumbnail-url="skill.thumbnailUrl"
              :star="skill.star"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          経歴
        </h2>

        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <Loading v-model="resumes">
          <div class="row">
            <Resume
              :key="index"
              v-for="(resume, index) in resumes"
              :company="resume.company"
              :enrollmentPeriod="resume.enrollmentPeriod"
              :jobDescription="resume.jobDescription"
              :deliverables="resume.deliverables"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section bg-primary  text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          ソーシャル
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <Loading v-model="socials">
          <div style="text-align: center;">
            <Social
              :key="index"
              v-for="(social, index) in socials"
              :name="social.fontawesome.name"
              :prefix="social.fontawesome.prefix"
              :icon-name="social.fontawesome.iconName"
              :url="social.url"
              target="_blank"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="page-section">
      <div class="container">
        <!-- Contact Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          お問い合わせ
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Contact Section Form -->
        <div class="row">
          <div class="col-lg-8 mx-auto">
            正社員のお誘いやお手伝いさせて頂けそうな企業様がいらっしゃいましたら、下記の問合せフォームにでご連絡お願いします。
            <Contact @submit="sendMail" />
          </div>
        </div>
      </div>
    </section>

    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="mt-4 col-lg-6">
            <h4 class="mb-4">
              Link
            </h4>
            <div class="mb-0">
              <div>このサイトはNuxtJsの勉強用に作成しました。</div>
              このサイトの概要は
              <transition>
                <nuxt-link
                  v-bind:to="{ name: 'portfolio-id', params: { id: 2 } }"
                  >こちら</nuxt-link
                >
              </transition>
            </div>
          </div>

          <!-- Footer About Text -->
          <div class="mt-4 col-lg-6">
            <h4 class="mb-4">
              Storybook
            </h4>
            <div class="mb-0">
              このサイトのUIコンポーネントをStorybook上げています。
              <div>
                Storybookは
                <a
                  href="https://quirky-hoover-d5f9da.netlify.com/?path=/story/component--%E3%82%B9%E3%82%AD%E3%83%AB"
                  target="_blank"
                  >こちら</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; ikuo Saito 2019</small>
      </div>
    </section>
  </div>
</template>

<script>
import swal from 'sweetalert'
import Portfolio from '~/components/portfolio'
import Social from '~/components/social'
import Skill from '~/components/skill'
import Resume from '~/components/resume'
import Contact from '~/components/contact'
import Loading from '~/components/loading'

export default {
  components: {
    Portfolio,
    Social,
    Skill,
    Resume,
    Contact,
    Loading
  },
  computed: {
    portfolios() {
      return this.$store.getters['portfolios/portfolios']
    },
    socials() {
      return this.$store.getters['socials/socials']
    },
    skills() {
      return this.$store.getters['skills/skills']
    },
    resumes() {
      return this.$store.getters['resumes/resumes']
    }
  },
  created() {
    this.$store.dispatch('portfolios/showPortfolios')
    this.$store.dispatch('socials/showSocials')
    this.$store.dispatch('skills/showSkills')
    this.$store.dispatch('resumes/showResumes')
  },
  methods: {
    async sendMail(value) {
      console.log(value)
      await this.$store.dispatch('mail/sendMail', value)
      swal(
        'Thank you！',
        'お問い合わせありがとうございます！出来る限り早急にご返信いたしますので今しばらくお待ちください。',
        'success'
      )
    }
  }
}
</script>
<style scoped>
.skill-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-description {
  padding: 0px 20px;
  text-align: center;
}
</style>
