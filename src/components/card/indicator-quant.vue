<template>
    <v-tooltip top>
        <template #activator='{ on, attrs }'>
            <div
                class='indicator'
                v-bind='attrs'
                v-on='on'
            >
                <div
                    v-for='(item, index) in itens'
                    :key='item'
                >
                    <v-icon
                        small
                        :style='style(index)'
                    >
                        $iconCircle
                    </v-icon>
                </div>
            </div>
        </template>
        <span>Falta {{of - (have % of)}} para completar o próximo kit</span>
    </v-tooltip>
</template>

<script>
    export default {
        name:"Indicator",
        props:{
            have: {
                type: Number,
                default: 0,
            },
            of: {
                type: Number,
                default: 0,
            }
        },
        data: function(){
            return {
                colorFirst: "#000000",
                colorLast: "#C4C4C4",
            }
        },
        computed:{
            //with the "have" quantity is created
            //a list to be used in "v-for"
            itens: function(){
                // computed how many itens to next kit
                var donated = this.have % this.of;
                var index = this.of - donated;
                var list = [];
                while(index > 0){
                    list.push(index);
                    index --;
                }

                return list;
            }
        },
        methods:{
            style: function(index){
                //calcula cor
                var r =parseInt(this.colorFirst.slice(1, 3), 16);
                var rL = parseInt(this.colorLast.slice(1, 3), 16);
                var rN = parseInt((((rL-r)/this.have)*index)+r).toString(16);
                var style = "color: #"+rN+rN+rN+"; margin-right: -.3em";

                return style;
            }
        }
    }
</script>

<style>
.indicator{
    display: flex;
    flex-direction: row;
    margin-right: .3em;
}
</style>
