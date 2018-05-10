<template>
    <div id="centerRigt">
        <!--<div class="userTime">-->
            <!--<full-calendar class="test-fc" :events="fcEvents"-->
                           <!--locale="zh-cn"-->
                           <!--@changeMonth="changeMonth"-->
            <!--&gt;-->
                <!--<template slot="fc-event-card" scope="p">-->
                    <!--<p><i class="fa">{{fcEvents.title}}</i> {{ p.event.title }}</p>-->
                <!--</template>-->
            <!--</full-calendar>-->
        <!--</div>-->

    </div>

</template>

<script>

    var demoEvents = [];
    export default {
        data (){
            return {

                fcEvents: demoEvents,
                endtime: '',
                starttime: '',

            }
        },
        created() {


        },
        methods: {


            changeMonth (start, end, current) {
                this.fcEvents.start = current.format();
                this.starttime = start.format();
                this.starttimes = current.format();

                this.getMoneyData();
            },
            getMoneyData: function () {
                function add0(m) {
                    return m < 10 ? '0' + m : m
                }

                var time = new Date();
                var y = time.getFullYear();
                var m = time.getMonth() + 1;
                var fristtime = y + '-' + add0(m) + '-' + '01';
                if (this.starttimes == null || this.starttimes == '') {
                    var begintime = fristtime
                }
                else {
                    var begintime = this.dateformat(this.starttimes)
                }
                var token = this.getCookies('token')
                let URL = global.testUrl + "xwjrfront/invest/getDealRecordPc";
                let parm = {
                    beginTime: begintime,
                    token: token
                };
                $.ajax({
                    type: "post",
                    url: URL,
                    data: $.param(parm),
                    dataType: "json",
                    success: function (data) {
                        if (data.state == 200) {
                            for (var i = 0; i < data.data.eealRecordList.length; i++) {
                                var obj1 = {
                                    title: "本金：" + data.data.eealRecordList[i].receiveCorpus + "",
                                    start: data.data.eealRecordList[i].receiveTime
                                };
                                var obj2 = {
                                    title: "利息：" + data.data.eealRecordList[i].receiveInterest + "",
                                    start: data.data.eealRecordList[i].receiveTime
                                };
                                demoEvents.push(obj1);
                                demoEvents.push(obj2);
                            }
                        }
                    }
                })
            },

        }
    }
</script>

