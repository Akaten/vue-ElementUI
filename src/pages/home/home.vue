
<template>
    <div>
        <v-header></v-header>
        我是首页
        <v-footer></v-footer>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {GET_UID} from '../../store/bis'
    import {GET_NEWID} from '../../store/news'
    export default {
        data () {
         return{
             bs:{
                 bid:''
             }
         }
        },
        created(){

        },
        methods: {
            ...mapActions([GET_UID, GET_NEWID]),//getTastebid
            //跳转体验标
            getTastebid(bid, tastebid){
                this.bs.bid = bid;
                this.bs.testbid = tastebid;
                this.GET_UID(this.bs);
                window.location.href = '#/experienceFinace'
            }


        }
    }
</script>
