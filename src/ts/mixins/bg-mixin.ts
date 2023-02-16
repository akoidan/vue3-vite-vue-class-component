import {
  Component,
  Vue,
} from "vue-property-decorator";

export function mixinClassBodyFactory(className: string): typeof Vue {
  @Component({})
  class BgMixin extends Vue {
    mounted(): void {
      this.$logger.debug(`adding classname from body: ${className}`)();
      document.querySelector("body")!.classList.add(className);
    }

    beforeUnmount(): void {
      this.$logger.debug(`removing classname from body: ${className}`)();
      document.querySelector("body")!.classList.remove(className);
    }
  }

  return BgMixin;
}
