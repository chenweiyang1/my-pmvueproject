<template>
  <div class="container feedback">
    <v-header title="意见反馈" align="center" :showBack="true"></v-header>
    
  </div>
</template>

<script>
import header from '../../components/header'
import { ajax } from '../../utils/base'
export default {
  data () {
    return {
      feedbackContent: ''
    }
  },

  components: {
    'vHeader': header,
  },

  methods: {

  },

  beforeMount () {
    
  }
}
</script>

<style lang="scss">
.feedback{
  
}
</style>
