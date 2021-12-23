<template>
    <div>
        <div class="container--all">
            <Slice1 />
            <Slice2 />
            <Slice3 />
        </div>
        <div class="container--two">
            <Bonus />
            <Travel />
        </div>
        <Slice4 />
    </div>
</template>

<script>
import Slice1 from '../components/Slice1.vue';
import Slice2 from '../components/Slice2.vue';
import Slice3 from '../components/Slice3.vue';
import Bonus from './../components/Bonus.vue';
import Travel from './../components/Travel.vue';
import Slice4 from './../components/Slice4.vue';

export default {
    name: 'One',
    components: {
        Slice1,
        Slice2,
        Slice3,
        Bonus,
        Travel,
        Slice4,

    }
}
</script>

<style>
    .container--all{
        background: linear-gradient(180deg, rgba(255,206,176,1) 0%, rgba(205,205,213,1) 35%, rgba(182,204,227,1) 50%, rgba(205,205,213,1) 65%, rgba(255,206,176,1) 75%);
    }

    .container--two{
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,240,230,1) 50%, rgba(255,211,180,1) 100%);
    }
</style>