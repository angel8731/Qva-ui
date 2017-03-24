<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span>
        <span><slot>{{ label }}</slot></span>
    </label>
</template>

<script>
const prefixCls = 'qva-radio-button';
export default {
    name : 'Radio-Button',
    props : {
        value: {
            type: Boolean,
            default: false
        },
        disabled : {
            type: Boolean,
            default: false
        },
        label: {
            type: [String, Number]
        }
    },
    data () {
        return {
            currentValue : this.value,
            group : false,
            parent : this.$parent
        }
    },
    mounted () {
        if (this.parent) {
            this.group = true;
        }
        if (!this.group) {
            this.updateValue();
        }
    },
    computed : {
        wrapClasses(){
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-group-item`]: this.group,
                    [`${prefixCls}-wrapper-checked`]: this.currentValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled
                }
            ]
        },
        radioClasses(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.currentValue,
                    [`${prefixCls}-disabled`]: this.disabled
                }
            ];
        },
        innerClasses(){
            return `${prefixCls}-inner`;
        },
        inputClasses(){
            return `${prefixCls}-input`;
        }
    },
    methods : {
        change (event) {
            if (this.disabled) {
                return false;
            }
            console.log(event);
            const checked = event.target.checked;
            this.currentValue = checked;

            if (this.group && this.label) {
                this.parent.change({
                    value: this.label,
                    checked: this.value
                });
            }

        },
        updateValue () {
            this.currentValue = this.value;
        }
    }
}
</script>
