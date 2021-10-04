Vue.component('my-comp',{
    template: '<div>{{ myMsg }}</div>',
    props: {
        myMsg: {
            type: [String, Number],
            required: true, // 필수속성이 됨
            validator (value) {
                return value === 'Hello'
            }
        }
    }

}
)

const vm = new Vue({
    el: '#app',
    data(){
        return{
            message: 'Hello'
        }
    }
})