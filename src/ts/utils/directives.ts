import type {App as VueApp} from "@vue/runtime-core";

export function addDirectives(vue: VueApp): void {
  vue.directive("validity", (el: HTMLElement, binding: {value: string}) => {
    (el as HTMLInputElement).setCustomValidity(binding.value);
  });
  vue.directive("data-cy", (el: HTMLElement, binding: {value: string}) => {
    (el as HTMLInputElement).setAttribute("data-cy", binding.value);
  });
}
