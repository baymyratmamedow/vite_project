<template>
    <div class="layout">
        <app-header/>
        <v-spagination/>
    </div>
</template>
<script>
import appHeader from "./components/header/appHeader.vue"
import VSpaginationVue from "./components/Base/VSpagination.vue"
import VSpagination from "./components/Base/VSpagination.vue"
export default {
    components:{
    appHeader,
    VSpaginationVue,
    VSpagination
},
    setup() {
        
    },
}
</script>