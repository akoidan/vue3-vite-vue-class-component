<template>
  <div class="page-onboarding">
    Page not Found
    <a href="/">Go to main page</a>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "vue-property-decorator";

@Component({
  name: "NotFoundPage",
  components: {},
})
export default class NotFoundPage extends Vue {
}
</script>

