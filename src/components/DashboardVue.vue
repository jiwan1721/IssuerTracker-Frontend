<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ userDetail.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ userDetail.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense v-for="data in data1" :key="data.id">
          <v-list-item link @click="$router.push(data.route)">
            <v-list-item-icon>
              <v-icon>{{ data.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ data.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import navigation from "./../sideNavigation/navigation";
import axios from "axios";
export default {
  name: "DashBoardVue",
  data() {
    return {
      data1: navigation,
      userDetail: null,
    };
  },
  async created() {
    await axios.get("user/").then((response) => {
      this.userDetail = response.data[0];
    });
  },
};
</script>
