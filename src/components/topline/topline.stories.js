import topline from './topline.vue'

export default {
  title: 'topline',
  components: {
    topline
  }
}

export const defaultView = () => ({
  components: { topline },
  // eslint-disable-next-line quotes
  template: ` <topline /> `
})
