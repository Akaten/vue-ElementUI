<!--新闻详情模板页-->
<template>
    <div class="newsDetail">
        <v-header></v-header>


        <v-footer></v-footer>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        computed: mapState({news: state => state.news}),
        created(){

        },
        methods:{

        },
    }
</script>
