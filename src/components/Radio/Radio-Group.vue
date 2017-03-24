<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>

const prefixCls = 'qva-radio-group';

import { oneOf, findComponentUpward, findComponentsDownward } from '../../utils/assist.js';

export default {
    name : 'RadioGroup',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large']);
            }
        },
        type: {
            validator (value) {
                return oneOf(value, ['button']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentValue: this.value,
            childrens: []
        };
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.size}`]: !!this.size,
                    [`${prefixCls}-${this.type}`]: !!this.type,
                    [`${prefixCls}-vertical`]: this.vertical
                }
            ];
        }
    },
    mounted () {
        this.updateValue();
    },
    methods : {
        updateValue () {
            const value = this.value;
            console.log(123);
            // this.childrens = findComponentsDownward(this, 'Radio');
            this.childrens = this.$children;
            if (this.childrens) {
                this.childrens.forEach(child => {
                    child.currentValue = value == child.label;
                    child.group = true;
                });
            }
        },
        change (data) {

            this.currentValue = data.value;
            this.updateValue();
            this.$emit('input', data.value);
            // this.$emit('on-change', data.value);
            // this.dispatch('FormItem', 'on-form-change', data.value);
        },
        dispatch (componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
    },
    watch: {
        value () {
            this.updateValue();
        }
    }
}
</script>
