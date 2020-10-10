<template>
    <div class="dic-container" @click="rollTheDice">
    <div id="dice">
        {{ score }}
    </div>
        
    </div>
  
</template>

<script>

export default {
    name: 'TheDice',
    data() {
        return {
           
        }
    },
    methods: {
        rollTheDice() {
            this.score = Math.floor((Math.random() * 6) + 1)
        },
    }
}
</script>



<style scoped>


</style>