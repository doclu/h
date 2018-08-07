<template>
    <div>
        <span class="left">{{unFinishCompleteLenth}}</span>
        <span>
            <span v-for="state in states"
                :key='state'
                :class="[state,filter === state ? 'actived':'']"
                @click="toggleFilter(state)"
            >
            {{state}}
            </span>
        </span>
        <span @click='clearAllCompleted'>Clear all Completed</span>
    </div>
</template>

<script>
export default {
    props:{
        filter:{
            type:String,
            required:true
        },
        todos:{
            type:Array,
            required:true,
        }
    },
    data(){
        return{
            states:['all','active','completed']
        }
    },
    computed:{
        unFinishCompleteLenth(){
            return this.todos.filter(todo=>!todo.completed).length
        }
    },
    methods:{
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        },
        toggleFilter(state){
            this.$emit('toggle',state);
        }
    }
}
</script>


<style>
.actived{
    color: red;
}
</style>


