<template>
    <div class="container--all">
        <Slice1 />
        <Slice2 />
        <Slice3 />

        
    </div>
</template>

<script>
import Slice1 from '../components/Slice1.vue';
import Slice2 from '../components/Slice2.vue';
import Slice3 from '../components/Slice3.vue';

export default {
    name: 'One',
    components: {
        Slice1,
        Slice2,
        Slice3
    }
}
</script>

<style>
    .container--all{
        background: linear-gradient(180deg, rgba(255,206,176,1) 0%, rgba(205,205,213,1) 35%, rgba(182,204,227,1) 50%, rgba(205,205,213,1) 65%, rgba(255,206,176,1) 75%);
    }
</style>