const app = Vue.createApp({
    data(){
        return {
            pics: [
                {
                    desc:"사진에 대한 설명들 나열하자1",
                    lapse:9,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자2",
                    lapse:9,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자3",
                    lapse:19,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자4",
                    lapse:29,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자5",
                    lapse:39,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자6",
                    lapse:49,
                    url:""
                },
                {
                    desc:"사진에 대한 설명들 나열하자7",
                    lapse:59,
                    url:""
                },
            ]
        }
    },
    methods:{

    },
    mounted() {
        console.log('working!')
    },

})
app.mount('#app')