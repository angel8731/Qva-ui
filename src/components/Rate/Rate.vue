<template>
    <div>
        <ul :class="wrapClasses" @mouseleave="leaveHandle($event)">
            <template v-for="Rate in count">
                <li :class="rateClasses(Rate)"
                    @mousemove="moveHandle(Rate,$event)"
                    @click="selectHandle(Rate,$event)"
                >
                    <div :class="rateFirstClass">
                        <i class="anticon anticon-star"></i>
                    </div>
                    <div :class="rateSecondClass">
                        <i class="anticon anticon-star"></i>
                    </div>
                </li>
            </template>
        </ul>
        <slot>
            <template v-if="isHover">
                {{ hoverIndex }}
            </template>
            <template v-else>
                {{ currentIndex }}
            </template>
        </slot>
    </div>
</template>
<script>
const prefixCls = 'qva-rate';

export default {
    name : 'qva-rate',
    props : {
        allowHalf : {
            type : Boolean,
            default : false
        },
        disabled : {
            type : Boolean,
            default : false
        },
        count : {
            type : [ Number, String ],
            default : 5
        },
        value: {
            type: Number,
            default: 0
        },
    },
    data () {
        return {
            // 当前选中位置
            currentIndex : 0,
            // 鼠标滑动停留位置
            hoverIndex : 0,
            // 是否滑动
            isHover : false,
        }
    },
    computed : {
        wrapClasses () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-disabled`] : !!this.disabled
                }
            ]
        },
        rateFirstClass () {
            return [
                `${prefixCls}-star-first`
            ]
        },
        rateSecondClass () {
            return [
                `${prefixCls}-star-second`
            ]
        }
    },
    mounted () {

    },
    methods : {
        rateClasses (Rate) {

            let active = false;

            if(this.currentIndex >= Rate){
                active = true;
            }

            if (this.isHover) {
                if(this.hoverIndex >= Rate){
                    active = true;
                }else {
                    active = false;
                }
            }

            return [
                `${prefixCls}-star`,
                {
                    [`${prefixCls}-star-zero`] : !active,
                    [`${prefixCls}-star-full`] : !!active
                }
            ]
        },
        selectHandle (Rate) {
            // 不可修改
            if (this.disabled) {
                return;
            }
            this.currentIndex = Rate;
            this.hoverIndex = Rate;
        },
        moveHandle (Rate,event) {
            // 不可修改
            if (this.disabled) {
                return;
            }

            this.isHover = true;
            this.hoverIndex = Rate;
            // this.currentIndex = Rate;

        },
        leaveHandle () {
            // 不可修改
            if ( this.disabled ) {
                return;
            }
            this.isHover = false;
            this.hoverIndex = -1;
        }
    }
}
</script>
