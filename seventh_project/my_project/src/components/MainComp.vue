<style scoped>

</style>

<template>
    <div>
      <NewHeader/>
      <NewSearch/>
      <newCatalog/>
    </div>
</template>


<script>
import NewHeader from './NewHeader.vue'
import NewSearch from './NewSearch.vue'
import newCatalog from './newCatalog.vue'


export default {
    name: "MainComp",
    components: { NewHeader, NewSearch,newCatalog }
}
</script>