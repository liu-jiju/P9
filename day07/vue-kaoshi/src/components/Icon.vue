<template>
    <div>
        <span v-show="leftshow">
            <img @click="left=!left;$emit('click')" v-show="left" src="../assets/arrow-red.png">
            <img class="dao" @click="left=true;$emit('click')" v-show="!left" src="../assets/arrow-red.png">
        </span>
    </div>
</template>

<script>
export default {
    name: 'VueKaoshiIcon',

    data() {
        return {
            left:true,
            leftshow:true,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>

</style>