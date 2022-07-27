<template>
    <div>
        <span v-show="rightshow">
            <img class="dao" @click="left=!left;$emit('click')" v-show="left" src="../assets/arrow-down.png">
            <img @click="left=true;$emit('click')" v-show="!left" src="../assets/arrow-down.png">
        </span>
    </div>
</template>

<script>
export default {
    name: 'VueKaoshiIcon1',

    data() {
        return {
            rightshow:true,
            left:true,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>