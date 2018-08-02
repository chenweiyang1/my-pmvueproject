<template>
    <div class="user-center">
        <v-header title="我的" :showBack="false" align="center"></v-header>
        
    </div>
</template>

<script>
import header from '../../components/header';
export default {
    data(){
        return{

        }
    },
    beforeMount: function(){

    },
    components:{
        'v-header': header
    }
}
</script>

<style scoped>

</style>

