<template>
    <v-hover v-slot='{ hover }'>
        <v-card
            class='mx-auto'
            max-width='270'
            open-delay='200'
            :elevation='hover ? 7 : 2'
            tile
        >
            <v-card-actions>
                <div class='top'>
                    <v-dialog max-width='250'>
                        <template #activator='{ on, attrs }'>
                            <v-btn
                                color='red'
                                v-bind='attrs'
                                icon
                                v-on='on'
                            >
                                <v-icon>$iconInfo</v-icon>
                            </v-btn>
                        </template>
                        <cardInfo />
                    </v-dialog>
                    <indicator
                        :have='3'
                        :of='5'
                    />
                </div>
            </v-card-actions>

            <v-img
                height='200px'
                :src='product.img'
            />

            <v-card-title>
                <div class='description'>
                    {{product.name}}
                </div>
            </v-card-title>

            <v-card-text class='text--primary'>
                <div class='price'>
                    {{price}}
                </div>
            </v-card-text>

            <v-card-actions class='rightBtn'>
                <v-btn
                    color='primary'
                    fab
                    outlined
                    small
                    @click='addBag'
                >
                    <v-icon x-large>
                        $iconPlus
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    import indicator from "@/components/card/indicator-quant.vue";
    import cardInfo from "@/components/card/info-outfitter.vue";


    export default {
        name: "CardProduct",
        components: {
            indicator,
            cardInfo,
        },
        props: {
            _product: {
                type: Object,
                default: null,
            },
            _kitId: {
                type: Number,
                default: null,
            },
        },
        data: function () {
            return {
                count: 3,
                product: this._product,
            };
        },
        computed: {
            price: function () {
                const value = JSON.parse(JSON.stringify(this.product.price));
                return `R$ ${value.replace('.', ',')}`
            }
        },
        methods: {
            addBag: function () {
                this.$store.dispatch("setBag", {
                    product: this.product,
                    kit: this._kitId,
                    op: 'add',
                });
            },
        }
    };
</script>

<style lang="scss">
.description {
  font-size: 17pt;
  font-weight: 600;
  text-align: left;
}
.price {
  font-size: 16pt;
  text-align: left;
  margin-bottom: 0;
}
.rightBtn {
  display: flex;
  justify-content: flex-end;
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

v-card-title {
  p {
    margin-bottom: -16px;
  }
}
</style>
