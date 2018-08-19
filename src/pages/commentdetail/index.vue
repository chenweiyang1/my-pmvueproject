<template>
    <div class="container comment-detail">
        <v-header title="全部评论" align="center" :showBack="true"></v-header>
        <v-comment :fold="false"></v-comment>
    </div>
</template>

<script>
import comment from '../../components/commentitem';
import header from '../../components/header';
export default {
    data(){
        return{

        }
    },
    beforeMount(){

    },
    components:{
        'v-comment': comment,
        'v-header': header,
    }
}
</script>

<style lang="scss" scoped>

</style>
