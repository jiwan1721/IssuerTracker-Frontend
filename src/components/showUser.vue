<template>
  <v-app>
    <v-row>
      <v-col v-for="item in users" :key="item.id" cols="3">
        <v-card :color="'#1F7087'" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.name"></v-card-title>
              <v-card-subtitle v-text="item.email"></v-card-subtitle>
              <v-card-actions>
                <v-btn
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img
                :src="'https://cdn.vuetifyjs.com/images/cards/foster.jpg'"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },

  async created() {
    const response = await axios.get("user/");
    this.users = response.data;
  },
};
</script>
