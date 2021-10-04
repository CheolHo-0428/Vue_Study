// 지역 컴포넌트
const myComp = {
    template: "<div class='me'>{{ message }}</div>",
    data () { // data는 반드시 함수여야 한다.
        return{
            message: 'Hello Vue!'
        }
    }
}

// 전역 컴포넌트
// Vue.component('my-component', {
//     template: '<div class="me">{{ message }}</div>',
//     data: function(){
//         return{
//             message : 'Hello Vue!'
//         }
//     }
// })

const vm1 = new Vue({
    el: '#app1',
    data(){
        return{

        }
    },
    components: {
        'my-component': myComp
    }
})

const vm2 = new Vue({
    el: '#app2',
    components: {
        myComp
    }
})