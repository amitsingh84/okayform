<template>
    <div class="dataSubjectHeader">
        <header-slot/>
    </div>
</template>
<script>
import HeaderSlot from '../../../slots/HeaderSlot.vue'
export default {
    components:{HeaderSlot}
}
</script>