<template>
    <section>
            <h2>正在进行 <span id="todocount">{{$store.state.todolist.upTodolist.length}}</span></h2>
            <p></p>
            <ol id="todolist" class="demo-box">
                <Slidelist v-for="(item, index) in $store.state.todolist.upTodolist" :key='index' :i='index' :text='item.text' :watch='false'/>
            </ol>
            <h2>已经完成 <span id="donecount">{{$store.state.todolist.donTodolist.length}}</span></h2>
            <ul id="donelist">
                <Slidelist v-for="(item, index) in $store.state.todolist.donTodolist" :key='index' :i='index' :text='item.text' :watch='true'/>
            </ul>
        </section>
</template>

<script>
import Slidelist from './slidelist.vue';
export default {
    data(){
         return {
             data:[],
             upNum:0,
             downNum:0
         }
     },
     mounted(){
         
     },
     methods:{
         
     },
     components:{
         Slidelist
     }
}
</script>
<style scoped>
section {
        margin: 0 auto;
    }
    h2 {
        position: relative;
    }
    span {
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
    }
    ol,
    ul {
        padding: 0;
        list-style: none;
    }
    @media screen and (max-device-width: 620px) {
        section {
            width: 96%;
            padding: 0 2%;
        }
    }
    
    @media screen and (min-width: 620px) {
        section {
            width: 600px;
            padding: 0 10px;
        }
    }
</style>


