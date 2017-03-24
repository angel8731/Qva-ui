<template lang="html">
    <p>{{greeting}} World</p>
</template>

<script>
export default {
    data : function(){
        return {
            greeting : 'Hello'
        }
    }
}
</script>

<style lang="css">
p{
    font-size: 2em;
    text-align: center;
}
</style>
