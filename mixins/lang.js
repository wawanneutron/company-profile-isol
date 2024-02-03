import id from '@/lang/id'
import en from '@/lang/en'

export default {
  data() {
    return {
      locales: {},
      itemsLanguage: [
        {
          key: 'id',
          title: 'Indonesia'
        },
        {
          key: 'en',
          title: 'English'
        }
      ],
      selectedLanguage: ''
    }
  },

  created() {
    this.onSetLanguage()
  },

  methods: {
    onChangeLanguage(value) {
      if (process.client) {
        localStorage.setItem('language', JSON.stringify(value))
        this.selectedLanguage = value.key

        if (this.selectedLanguage !== this.$route.query.lang) {
          this.$router.replace({ query: { lang: value.key } })
        }
      }
    },

    onSetLanguage() {
      let locales = en
      let lang

      if (process.client) {
        lang = localStorage.getItem('language')
        lang = JSON.parse(lang)

        if (lang && lang.key && lang.key === 'id') {
          locales = id
        }
      }

      this.locales = locales

      this.selectedLanguage = lang?.key || 'EN'
    }
  },

  computed: {
    getLocales() {
      return this.selectedLanguage
    }
  },

  watch: {
    $route() {
      this.onSetLanguage()
    }
  }
}
