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
          Web Engineer
        </p>
      </div>
    </header>

    <!-- Portfolio Section -->
    <section id="portfolio" class="page-section portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          Portfolio
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Portfolio Grid Items -->
        <div class="row">
          <Portfolio
            :key="index"
            v-for="(portfolio, index) in portfolios"
            :name="portfolio.name"
            :id="portfolio.id"
            :thumbnail-url="portfolio.thumbnailUrl"
          />
        </div>
        <!-- /.row -->
      </div>
    </section>

    <section id="about" class="page-section bg-primary text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center text-white">
          Skill
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <div class="row-center">
          <div class="skill-description">
            <p class="lead">
              はじめまして。こんにちは。ぼくはポンコツです。
            </p>
          </div>
          <div class="skill-group">
            <Skill
              :key="index"
              v-for="(skill, index) in skills"
              :name="skill.name"
              :thumbnail-url="skill.thumbnailUrl"
              :star="skill.star"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          Works
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- About Section Content -->
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
        <!-- About Section Button -->
        <div class="text-center mt-4">
          <a
            class="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/themes/freelancer/"
          >
            <i class="fas fa-download mr-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section bg-primary  text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          Social
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
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
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="page-section">
      <div class="container">
        <!-- Contact Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          Contact Me
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
          <Contact @submit="sendMail" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h4 class="mb-4">
              Link
            </h4>
            <p class="lead mb-0">
              <a href="">このサイトを作った理由</a>
            </p>
          </div>

          <!-- Footer About Text -->
          <div class="col-lg-4">
            <h4 class="mb-4">
              Storybook
            </h4>
            <p class="lead mb-0">
              このサイトのUIコンポーネントをStorybook上げています。
              <a
                href="https://quirky-hoover-d5f9da.netlify.com/?path=/story/component--%E3%82%B9%E3%82%AD%E3%83%AB"
                target="_blank"
                >Storybookはこちらから</a
              >
            </p>
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

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-to-top d-lg-none position-fixed ">
      <a
        class="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Portfolio from '~/components/portfolio'
import Social from '~/components/social'
import Skill from '~/components/skill'
import Resume from '~/components/resume'
import Contact from '~/components/contact'

export default {
  components: {
    Portfolio,
    Social,
    Skill,
    Resume,
    Contact
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
    sendMail(value) {
      this.$store.dispatch('mail/sendMail', value)
    }
  }
}
</script>
