<template>
  <div style="text-align: left;">
    <div :class="{'item-affixed': affix}" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getScroll, getOffset } from './utils'

export default {
  name: 'affix',

  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    }
  },

  data () {
    return {
      affix: false,
      styles: {}
    }
  },

  computed: {
    offsetType () {
      let type = 'top'
      if (this.offsetBottom >= 0) {
        type = 'bottom'
      }
      return type
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
    window.addEventListener('resize', this.handleScroll, false)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
    window.removeEventListener('resize', this.handleScroll, false)
  },

  methods: {
    handleScroll () {
      const affix = this.affix
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)
      const windowHeight = window.innerHeight
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight

      if ((elOffset.top - this.offsetTop) < scrollTop && this.offsetType === 'top' && !affix) {
        this.affix = true
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }

        this.$emit('on-change', true)
      } else if ((elOffset.top - this.offsetTop) > scrollTop && this.offsetType === 'top' && affix) {
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }

      if ((elOffset.top + this.offsetBottom + elHeight) > (scrollTop + windowHeight) && this.offsetType === 'bottom' && !affix) {
        this.affix = true
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }

        this.$emit('on-change', true)
      } else if ((elOffset.top + this.offsetBottom + elHeight) < (scrollTop + windowHeight) && this.offsetType === 'bottom' && affix) {
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-affixed {
  position: fixed;
  z-index: 10;
}
</style>
