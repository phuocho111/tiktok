<template>
  <v-container >
    <v-row class="align-center justify-center">
      <v-col cols="3" >
        <v-img
          :src="require('../assets/tiktok.svg')"
          width="50"
          height="50"
          
        ></v-img>
        <h2 class="font-size">Tik Tok</h2>
      </v-col>
      <v-col cols="6" class="justify-center ">
        <v-toolbar height="50" width="600" class="rounded-pill mx-auto">
          <v-text-field v-model="search" ref="search"> </v-text-field>
          <v-btn icon plain @click="logref">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col >
     
      <v-col cols="3">
        <v-btn-toggle v-model="toggle_multiple" dense>
          <v-btn icon plain>
            <v-icon>mdi-send</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-message</v-icon>
          </v-btn>

          <v-btn icon plain>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row >
        <v-col>
           
        </v-col>
        
        
</v-row>
    
    <v-card  class="overflow-y-auto mx-auto " max-height="400" max-width="600" >
            <div  v-for="item in matchSearch" :key="item.snippet.title" class="ma-4">
        {{ item.snippet.title }}
        </div>      
    </v-card>
    <v-col>
            <div>
               <iframe width="600" height="800" src="https://www.youtube.com/embed/xzgacCEI6r0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="mx-auto" ></iframe>
            </div>
        </v-col>
  </v-container>

  
</template>


    


<script>
export default {
  data() {
    return {
      toggle_multiple: [0, 1, 2],
      search: "",
      data: null,
      
    };
  },
  created() {
    const fetchData = async () => {
      this.data = await (
        await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&key=AIzaSyAFsElQz4XoLiGo1ComfXNn9MZMTi0G-B4")
      ).json();
    };
    fetchData();
  },

  methods: {
    logref() {
      console.log(this.$refs.search);
    },
  },
  computed: {
    matchSearch() {
        let searchRes = null;
      if (this.data && this.search != "") {
        searchRes = this.data.items.filter((item) => {
            console.log(item.snippet.title.includes(this.search) )
          return (item.snippet.title.includes(this.search))
        });
      }
      return searchRes;
    },
  },
};
</script>