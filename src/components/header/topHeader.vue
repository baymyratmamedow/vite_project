<template>
    <div class="flex ">
   <logo/>
<search/>
<app-time/>
<app-lang/>
<app-menu-vue/>
    </div>
</template>
<script>
import logo from '../Base/logo.vue'
import search from '../Base/search/appSearch.vue'
import appMenuVue from './appMenu.vue'
import appTime from './appTime.vue'
import appLang from '../Base/appLang.vue'
export default {
    components:{
        logo,
        search,
        appMenuVue,
        appTime,
        appLang
    },
    setup() {
        
    },
}
</script>