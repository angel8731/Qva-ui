<template lang="html">
    <div class="">
        <p>正常</p>
        <p>
            <Rate :disabled=false :count="5" v-model="currentIndex"></Rate>
        </p>
        <p>不可选</p>
        <p>
            <Rate :disabled=false :count="5" disabled v-model="currentIndex"></Rate>
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentIndex : 0
        }
    }
}
</script>
