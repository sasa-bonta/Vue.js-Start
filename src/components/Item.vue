<template>
  <v-container>
    <v-sheet
        rounded="lg"
        elevation="3"
        outlined
        class="ma-6"
    >
      <div
          v-if="isLoading"
      >
        <v-sheet
            class="pa-3"
        >
          <v-skeleton-loader
              type="card"
              min-height="1000"
          ></v-skeleton-loader>
        </v-sheet>
      </div>

      <div
          v-else
      >
        <template>
          <v-carousel>
            <v-carousel-item
                v-if="!item.img || item.img.length === 0"
                :src="'https://i.stack.imgur.com/y9DpT.jpg'"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
                v-else
                v-for="(image,i) in item.img"
                :key="i"
                :src="image"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </div>
    </v-sheet>
    <div
        class="text-h6 ma-6"
    >
      <v-icon>mdi-eye</v-icon>
      Сегодня : {{ item.viewsToday }}
    </div>
    <div
        class="text-h3 ma-6"
    >
      {{ item.title }}
    </div>
    <div
        class="text-h5 ma-6"
    >
      {{ item.description }}
    </div>
    <div
        class="text-h6 ma-6"
    >
      <v-row
          justify="center"
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Общее</v-expansion-panel-header>
            <v-expansion-panel-content>

              <v-list>

                <v-list-item
                    v-for="(feature, index) in item.mainFeatures"
                    :key="index"
                >

                  <v-list-item-content>
                    <v-list-item-title
                        v-if="feature.value"
                        v-text="feature.name + ' : ' + feature.value"
                    />
                    <v-list-item-title
                        v-else
                        v-text="feature.name"
                    />
                  </v-list-item-content>

                </v-list-item>
              </v-list>

            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Свойства</v-expansion-panel-header>
            <v-expansion-panel-content>

              <v-list>

                <v-list-item
                    v-for="(feature, index) in item.secondaryFeatures"
                    :key="index"
                >

                  <v-list-item-content>
                    <v-list-item-title
                        v-text="feature.name + ' : ' + feature.value"
                    />
                  </v-list-item-content>

                </v-list-item>
              </v-list>

            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-row>
    </div>
    <div
        class="text-h5 ma-6"
        v-if="item.price"
    >
      {{ item.price }} €
    </div>
    <div
        class="text-h5 ma-6"
        v-else
    >
      Договорная
    </div>
    <div
        class="text-h5 ma-6"
    >
      Регион : {{ item.location[0].name }} , {{ item.location[1].name }}
    </div>
  </v-container>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Item",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  inject: {
    theme: {},
  },
  mounted() {
    window.scrollTo(0, 0);
    this.loadItem(this.id)
  },
  computed: {
    ...mapGetters({
      item: 'item/getItem',
      isLoading: 'item/getIsLoading'
    })
  },
  methods: {
    ...mapActions({
      loadItem: 'item/loadItem',
    })
  },
}
</script>

<style scoped>
.v-expansion-panel-header {
  font-size: 1.5rem;
}
</style>