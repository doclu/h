<template>
    <section>
        <input type="text"
             autofocus="autofocus"
             placeholder="接下去要做什么"
             @keyup.enter="addTodo"
        >
        <Item 
            :todo='todo'
            v-for='todo in filterTodos'
            :key=todo.id
            @del='deleteTodo'
        />
        <tables   
        :filter='filter' 
        :todos='todos'
        @toggle='toggleFilter'
        @clearAllCompleted='clearAllCompleted'
        ></tables>
    </section>
</template>

<script>
import Item from './Item.vue'
import Tables from './Tables.vue'
let id=0;
export default {
    data(){
        return{
            todos:[],
            filter:'all'
        }
    },
    components:{
        Item,
        Tables
    },
    computed:{
        filterTodos(){
            if(this.filter==='all'){
                return this.todos;
            }
            const completed=this.filter==='completed';
           return this.todos.filter(todo=>completed===todo.completed)
        }
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
                id:id++,
                content:e.target.value.trim(),
                completed:false
            });
            e.target.value='';
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
        },
        toggleFilter(state){
            this.filter=state;
        },
        clearAllCompleted(){
            this.todos=this.todos.filter(todo=>!todo.completed)
        }
    }
}
</script>

