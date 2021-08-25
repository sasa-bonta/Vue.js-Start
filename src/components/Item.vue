<template>
  <v-container>
    <div
      v-if="isLoading"
    >
      <v-sheet
        class="pa-3"
      >
        <v-skeleton-loader
          type="card"
          min-height="1000"
        />
      </v-sheet>
    </div>

    <div
      v-else
    >
      <v-sheet
        rounded="lg"
        elevation="3"
        outlined
        class="ma-6"
      >
        <template>
          <v-carousel>
            <v-carousel-item
              v-if="item.img.length === 0"
              :src="'https://i.stack.imgur.com/y9DpT.jpg'"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
            <v-carousel-item
              v-for="image in item.img"
              v-else
              :key="image"
              :src="image"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
        </template>
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
        class="text-h5 ma-6 description"
      >
        {{ item.description }}
      </div>
      <div
        class="text-h6 ma-6"
      >
        <v-row
          justify="center"
        >
          <v-expansion-panels
            v-if="item.mainFeatures.length !== 0"
          >
            <v-expansion-panel>
              <v-expansion-panel-header>Общее</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item
                    v-for="feature in item.mainFeatures"
                    :key="feature.name"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        v-if="feature.value"
                        class="feature"
                        v-text="feature.name.padEnd(20, '.').replaceAll('.', '..') + feature.value"
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

            <v-expansion-panel
              v-if="item.secondaryFeatures.length !== 0"
            >
              <v-expansion-panel-header>Свойства</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item
                    v-for="feature in item.secondaryFeatures"
                    :key="feature.name"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="feature.name.padEnd(20, '.').replaceAll('.', '..') + feature.value"
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
        v-if="item.price"
        class="text-h5 ma-6"
      >
        {{ item.price }} €
      </div>
      <div
        v-else
        class="text-h5 ma-6"
      >
        Договорная
      </div>
      <div
        class="text-h5 ma-6"
      >
        Регион : {{ location }}
      </div>
    </div>
  </v-container>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

// noinspection ES6ShorthandObjectProperty
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
  computed: {
    ...mapGetters({
      item: 'item/getItem',
      isLoading: 'item/getIsLoading'
    }),
    location: function () {
      return this.item.location
        ?.map(({name}) => name)
        .join(', ')
    },
  },
  created() {
    this.loadItem(this.id)
  },
  mounted() {
    window.scrollTo(0, 0);
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

.description {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.feature {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>