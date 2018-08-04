<template>
    <li>
        <input type="checkbox" :checked='watch' @click="moveList($event,i, watch)"/>
        <p>
            <b v-if="isA" @click='showInput'>{{text}}</b>
            <input type="text" v-if="!isA" @keydown.enter='keyInput(i, text, watch)' v-model="text"/>
        </p>
        <a @click="clickRemove(i, watch)">-</a>
    </li>
</template>

<script>
export default {
    data(){
        return {
            data:this.text,
            isA:true
        }
    },
    props:['i','text','watch'],
    methods:{
        clickRemove(index, watch){
            this.$store.commit('todolist/removeTodo', {index:index, watch:watch});
         },
        showInput(){
            this.isA = false
        },
        keyInput(index,text, watch){
            this.$store.commit('todolist/changeTodo', {index:index, vtext:text, watch:watch});
            this.isA = true;
        },
        moveList(e, index, watch){
            this.$store.commit('todolist/moveTodo', {isCheck:e.target.checked, index: index}); 
        }
    }
}
</script>

<style scoped>
b{
    display: block;
}
li input {
        position: absolute;
        top: 2px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    
    p {
        margin: 0;
    }
    
    li p input {
        top: 3px;
        left: 40px;
        width: 70%;
        height: 20px;
        line-height: 14px;
        text-indent: 5px;
        font-size: 14px;
    }
    
    li {
        height: 32px;
        line-height: 32px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    }
    
    ol li {
        cursor: move;
    }
    
    ul li {
        border-left: 5px solid #999;
        opacity: 0.5;
    }
    
    li a {
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
</style>
