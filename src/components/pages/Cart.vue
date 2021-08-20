<!--<template>-->
<!--  <v-sparkline-->
<!--      :value="value"-->
<!--      :gradient="gradient"-->
<!--      :smooth="radius || false"-->
<!--      :padding="padding"-->
<!--      :line-width="width"-->
<!--      :stroke-linecap="lineCap"-->
<!--      :gradient-direction="gradientDirection"-->
<!--      :fill="fill"-->
<!--      :type="type"-->
<!--      :auto-line-width="autoLineWidth"-->
<!--      auto-draw-->
<!--  />-->
<!--</template>-->

<!--<script>-->
<!--const gradients = [-->
<!--  ['#222'],-->
<!--  ['#42b3f4'],-->
<!--  ['red', 'orange', 'yellow'],-->
<!--  ['purple', 'violet'],-->
<!--  ['#00c6ff', '#F0F', '#FF0'],-->
<!--  ['#f72047', '#ffd200', '#1feaea'],-->
<!--]-->

<!--export default {-->
<!--  data: () => ({-->
<!--    width: 2,-->
<!--    radius: 10,-->
<!--    padding: 8,-->
<!--    lineCap: 'round',-->
<!--    gradient: gradients[5],-->
<!--    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],-->
<!--    gradientDirection: 'top',-->
<!--    gradients,-->
<!--    fill: false,-->
<!--    type: 'trend',-->
<!--    autoLineWidth: false,-->
<!--  }),-->
<!--}-->
<!--</script>-->

<template>
  <v-card>
    <v-autocomplete
      v-model="model"
      :items="states"
      :readonly="isEditing"
      persistent-hint
    >
      <v-text-field />
    </v-autocomplete>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
    }
  },
}
</script>