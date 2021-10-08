<template>
    <div>
        <button @click="createTodo">
          <i class="material-icons">add</i>
        </button>
        <input  
          :value="title" 
          :placeholder="placeholder"
          type="text"
          @input="title = $event.target.value" 
          @keypress.enter="createTodo"        
        />
    </div>    
</template>

<script>
export default {
    data () {
        return {
            title: '',
            placeholder: '할 일을 추가하세요!'
        }
    },
    methods: {
      createTodo(){
        const validatedTitle = this.title && this.title.trim()
        if(!validatedTitle){
          alert("유효하지 않은 제목입니다.")
          this.title = this.title.trim()
          return 
        }

        //생성
        this.$emit('create-todo', this.title)
        this.title = ''

        this.$nextTick(() => {
          // 추가된 항목 포커스(스크롤이 자동으로 내려감)
          window.scrollTo(0, document.body.scrollHeight) 
        })
      }
    }
}
</script>


