<template>
  <div class="container index">
    <v-header title="动态详情" align="center" :showBack="true"></v-header>
    <comment />
  </div>
</template>

<script>
import header from '../../components/header'
import comment from '../../components/commentitem';
import { host_dev } from '../../utils/base'
export default {
  data () {
    return {
      
    }
  },

  components: {
    'vHeader': header,
    comment
  },

  methods: {

  },

  beforeMount () {
    
  }
}
</script>

<style lang="scss">

</style>
