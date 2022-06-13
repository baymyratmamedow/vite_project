<template>
    <div class="">
        <div class="pagination-row flex ">
            <button>prev</button>
           <div v-for="(item,index) in new Array(10)" :key='index'>
               <button>{{index + 1 }}</button>
               </div>
               <button>next</button> 
        </div>
        <slot/>
        {{pharmacy}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            pharmacy:[]
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            this.axios.get('http://127.0.0.1:8000//api/v1/pharmacies?limit=20').then(res=>{
                this.pharmacy=res.data
                console.log(res.data);
            })
        }
    }
}
</script>
