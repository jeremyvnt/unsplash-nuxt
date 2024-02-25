<script setup lang="ts">
interface PhotoPreviewProps {
  id: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  userPicture: string;
  isSelected: boolean;
  isAvailableHiring?: boolean;
}

interface PhotoPreviewEmits {
  (e: 'onClick', photoId: string): void;
}

const {
  id,
  imageUrl,
  firstName,
  lastName,
  userPicture,
  isSelected = false,
  isAvailableHiring = false,
} = defineProps<PhotoPreviewProps>();

const emit = defineEmits<PhotoPreviewEmits>();

const fullName = computed(() => `${firstName} ${lastName}`);

const handleOnClick = () => emit('onClick', id);
</script>

<template>
  <div
    class="photo-preview position-relative mb-6"
    :id="id"
    :class="{ selected: isSelected }"
    @click="handleOnClick"
  >
    <v-hover>
      <img :src="imageUrl" alt="" width="100%" height="auto" class="d-block" />
      <div
        class="hover-content position-absolute h-100 w-100 flex-column justify-space-between pa-5"
      >
        <v-row justify="end" no-gutters class="ga-2 flex-grow-0">
          <v-btn size="small" flat disabled @click.stop="">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn size="small" flat disabled @click.stop="">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row
          justify="space-between"
          align="center"
          no-gutters
          class="bottom-content flex-grow-0 flex-nowrap"
        >
          <v-row align="center" no-gutters class="ga-2 flex-nowrap">
            <v-avatar :image="userPicture" size="30" class="cursor-pointer" />
            <div class="d-flex flex-column cursor-pointer">
              <span class="text-body-2 text-white d-inline-block text-truncate full-name">{{
                fullName
              }}</span>
              <span v-if="isAvailableHiring" class="text-caption text-white hiring">
                Disponible à l'embauche
              </span>
            </div>
          </v-row>
          <a class="text-black" :href="imageUrl" download target="_blank" @click.stop="">
            <v-btn size="small" flat title="Download">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </a>
        </v-row>
      </div>
    </v-hover>
  </div>
</template>

<style scoped>
.hiring {
  opacity: 80%;
}
.photo-preview {
  cursor: zoom-in;
}

.selected {
  box-shadow: rgb(111 182 14 / 70%) 0px 0px 0px 5px;
}

.photo-preview:hover .hover-content {
  display: flex;
}
.hover-content {
  display: none;
  left: 0;
  top: 0;
  z-index: 1;
}
.hover-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    #00000057 0,
    rgba(0, 0, 0, 0.338) 3.5%,
    rgba(0, 0, 0, 0.324) 7%,
    rgba(0, 0, 0, 0.306) 10.35%,
    rgba(0, 0, 0, 0.285) 13.85%,
    rgba(0, 0, 0, 0.262) 17.35%,
    rgba(0, 0, 0, 0.237) 20.85%,
    rgba(0, 0, 0, 0.213) 24.35%,
    rgba(0, 0, 0, 0.188) 27.85%,
    rgba(0, 0, 0, 0.165) 31.35%,
    rgba(0, 0, 0, 0.144) 34.85%,
    rgba(0, 0, 0, 0.126) 38.35%,
    rgba(0, 0, 0, 0.112) 41.85%,
    rgba(0, 0, 0, 0.103) 45.35%,
    #0000001a 48.85%,
    rgba(0, 0, 0, 0.103) 52.35%,
    rgba(0, 0, 0, 0.112) 55.85%,
    rgba(0, 0, 0, 0.126) 59.35%,
    rgba(0, 0, 0, 0.144) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.188) 69.85%,
    rgba(0, 0, 0, 0.213) 73.35%,
    rgba(0, 0, 0, 0.237) 76.85%,
    rgba(0, 0, 0, 0.262) 80.35%,
    rgba(0, 0, 0, 0.285) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.324) 90.85%,
    rgba(0, 0, 0, 0.338) 94.35%,
    rgba(0, 0, 0, 0.347) 97.85%,
    #00000059
  );
  z-index: -1;
  pointer-events: none;
}
</style>
