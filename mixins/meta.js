export default {
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'og:title',
          property: 'og:title',
          content: this.meta.title
        },
        {
          hid: 'description',
          name: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        {
          hid: 'image',
          name: 'og:image',
          property: 'og:image',
          content: this.meta.image
        }
      ]
    }
  }
}
