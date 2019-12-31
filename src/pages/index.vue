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
        <h1 class="masthead-heading text-uppercase mb-0">
          Start Bootstrap
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
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>

    <!-- Portfolio Section -->
    <section id="portfolio" class="page-section portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
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
        <h2 class="page-section-heading text-center text-uppercase text-white">
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

        <div class="row-center">
          <div class="skill-description">
            <p class="lead">
              はじめまして。私は平賀陽一(@musou1500)と申します。
              高校生の頃からプログラミングを学び始め、今は主にWeb系のことをやっています。
              言語はPHPを使用することが多いですが、Haxeという言語も大好きで、
              少しながらコンパイラやIDEの開発にも貢献しています。
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
    <section id="about" class="page-section bg-primary text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          About
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
          <div class="col-lg-4 ml-auto">
            <p class="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
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

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              2215 John Daniel Drive <br />Clark, MO 65243
            </p>
          </div>

          <!-- Footer Social Icons -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
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

          <!-- Footer About Text -->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by
              <a href="http://startbootstrap.com">Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Your Website 2019</small>
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

export default {
  components: {
    Portfolio,
    Social,
    Skill
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
    }
  },
  created() {
    this.$store.dispatch('portfolios/showPortfolios')
    this.$store.dispatch('socials/showSocials')
    this.$store.dispatch('skills/showSkills')
  }
}
</script>
