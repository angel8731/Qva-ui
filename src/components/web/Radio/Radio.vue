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
        <slot>{{ label }}</slot>
    </label>
</template>

<script>

const prefixCls = 'qva-radio';

import { findComponentUpward,findComponentDownward } from '../../../utils/assist.js';

export default {
    name: 'Radio',
    data(){
        return {
            currentValue: this.value,
            group: false,
            // parent : this.$parent
            parent : findComponentUpward(this, 'RadioGroup')
        };
    },
    props : {
        value: {
            type: Boolean,
            default: false
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
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
    mounted () {
        if (this.parent) this.group = true;
        if (!this.group) {
            this.updateValue();
        }
    },
    methods : {
        change(event){
            // disable
            if (this.disabled) {
                return false;
            }

            const checked = event.target.checked;
            this.currentValue = checked;

            // this.$emit('input', checked);

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
    },
    watch : {
        value () {
            this.updateValue();
        }
    }
}
</script>
