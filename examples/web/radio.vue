<template lang="html">
    <div>
        <p>
            <RadioGroup v-model="city" size="small">
                <RadioButton label="hangzhou"></RadioButton>
                <RadioButton label="shanghai" disabled></RadioButton>
                <RadioButton label="beijing"></RadioButton>
                <RadioButton label="chengdu"></RadioButton>
            </RadioGroup>
        </p>
        <p>
            <RadioGroup v-model="city">
                <RadioButton label="hangzhou"></RadioButton>
                <RadioButton label="shanghai" disabled></RadioButton>
                <RadioButton label="beijing"></RadioButton>
                <RadioButton label="chengdu"></RadioButton>
            </RadioGroup>
        </p>
        <p>
            <RadioGroup v-model="city" size="large">
                <RadioButton label="hangzhou"></RadioButton>
                <RadioButton label="shanghai" disabled></RadioButton>
                <RadioButton label="beijing"></RadioButton>
                <RadioButton label="chengdu"></RadioButton>
            </RadioGroup>
        </p>
        <p>
            {{city}}
        </p>
        <p>
            <RadioGroup v-model="phone" :vertical=true >
                <Radio label="apple"></Radio>
                <Radio label="android"></Radio>
                <Radio label="windows"></Radio>
            </RadioGroup>
        </p>
        <p>
            {{phone}}
        </p>
        <p>
            <RadioGroup v-model="address" type="button">
                <Radio label="北京"></Radio>
                <Radio label="上海" disabled></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州" disabled></Radio>
            </RadioGroup>
        </p>
        <p>
            {{address}}
        </p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            phone : 'apple',
            address : '北京',
            city : 'hangzhou'
        }
    }
}
</script>
