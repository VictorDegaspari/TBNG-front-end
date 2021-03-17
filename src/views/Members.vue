<template>
  <div class="members">
    <Titles msg="Membros"
      ><img id="icon-member" src="../assets/membros.svg" alt="" />
      <div class="form__group field input-search">
        <input
          type="input"
          class="form__field"
          placeholder="Digite o nome do Símio"
          name="name"
          id="name"
          required
          v-model="searchQuery"
        />
        <label for="name" class="form__label">Digite o nome do Símio</label>
      </div>

      <div v-for="item in resultQuery" :key="item.id" class="card-body">
        <Container
          id="display-members"
          v-scrollanimation
          :style="'align-items: center;justify-content: center;'"
        >
          <Members v-if="resources.length">
            <a :href="item.instagram"
              ><img @click="ativaSpinner" :src="item.image" class="card-img-top"
            /></a>
            <span>{{ item.cargo }}:</span>
            <p target="_blank">{{ item.title }}</p>
          </Members>
        </Container>
      </div>
    </Titles>
    <Spinner :isLoading="isLoading" />
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import Spinner from "@/components/Vspinner.vue";
import img1 from "@/assets/insta.svg";

export default {
  components: {
    Members,
    Container,
    Titles,
    Spinner
  },
  data() {
    return {
      isLoading: false,
      img1: img1,
      searchQuery: null,
      resources: [
        {
          title: "Victor Degaspari",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/159942263_278880663619808_5293847137169899799_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=4ekhHmRRV8EAX-3gP92&oh=00381a9b3b399a82582133c06ccffbc3&oe=607AC801",
          instagram: "https://www.instagram.com/victor.degaspari",
          cargo: "Administrador"
        },
        {
          title: "Renato Rodrigues",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64816215_1271694649652460_7106394240183173120_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=eSYE2XCL5jwAX8jfTPm&oh=cba4158854d1b697d936383441236296&oe=607AD604",
          instagram: "https://www.instagram.com/renato_schlichting/",
          cargo: "Membro"
        },
        {
          title: "Raphael Gomes",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/159095254_191196576107297_4717801493987338561_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=GTjPCqtjsfkAX_F93wO&oh=f68cf8c95adf59762aef1b36463ff4bb&oe=6079423B",
          instagram: "https://www.instagram.com/victor.degaspari",
          cargo: "Membro"
        },
        {
          title: "Caio Domarco",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/107844442_306647153853421_386564745923669609_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=ttNbkLzxaxwAX9aSMNh&oh=8765f2047bb3d56e95755294b1bfb3a1&oe=607AE034",
          instagram: "https://www.instagram.com/caio.sousa02/",
          cargo: "Membro"
        },
        {
          title: "Leo Moretti",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142427220_4238768629485650_3602411903772484134_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=7QaYkwCV3oIAX-QC7im&oh=06834fc9e985465f53a8f9c2e825fd65&oe=607A024D",
          instagram: "https://www.instagram.com/leozmoretti/",
          cargo: "Membro"
        },
        {
          title: "Caio Di Bene",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72637924_2611436672277116_634766556844261376_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=c-OvFgM-u3IAX8DcPC1&oh=fcdd5497439a5c7cc8e098c4c7d70fe3&oe=60791532",
          instagram: "https://www.instagram.com/caiodibene10/",
          cargo: "Membro"
        },
        {
          title: "Felipe Trevisan",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92018341_1159655487760060_28905357535346688_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=jVI6bWrq5FYAX_dbiRH&oh=77bae3c70fa2bc191ac498cf14434925&oe=6078EBC4",
          instagram: "https://www.instagram.com/felipe_trevisan17/",
          cargo: "Membro"
        },
        {
          title: "Matheus Cazelato",
          image:
            "https://instagram.fcpq10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/89258241_131264614957484_3307457622050865152_n.jpg?tp=1&_nc_ht=instagram.fcpq10-1.fna.fbcdn.net&_nc_ohc=Jt068-WuhRoAX8GHo_r&oh=b0f3fc6945391aa2e172f5be8c52066b&oe=607977E7",
          instagram: "https://www.instagram.com/len_ha_dor/",
          cargo: "Membro"
        }
      ]
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    }
  },
  methods: {
    ativaSpinner() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    }
  }
};
</script>

<style lang="scss" scoped>
.members {
  height: 100%;
  padding-bottom: 40px;
  text-align: center;
}
#icon-member {
  max-width: 120.7px;
  max-height: 120.7px;
  margin: 10px;
}
img {
  border-radius: 50%;
}
.before-enter {
  opacity: 0;
  transition: all 0.5s ease-in;
  transform: translatey(10px);
}
.enter {
  opacity: 1;
  transform: translatey(0px);
}
span {
  font-weight: bold;
}
$primary: #ffffffb7;
$secondary: #f500ac;
$white: rgb(221, 221, 221);
$gray: #16dcff;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 80%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(
    to right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */

.input-search {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
