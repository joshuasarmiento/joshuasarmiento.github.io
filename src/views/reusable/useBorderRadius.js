// useBorderRadius.js
import { ref, computed } from 'vue';

export function useBorderRadius() {
  const borderRadiusIndex = ref(0);
  const borderRadiusValues = [
    "50% 50% 50% 50% / 50% 50% 50% 50%",
    "34% 66% 34% 66% / 58% 41% 59% 42% ",
    "59% 41% 27% 73% / 32% 61% 39% 68%",
    "63% 37% 75% 25% / 45% 28% 72% 55%",
    "41% 59% 34% 66% / 63% 28% 72% 37%",
  ];
  const boxShadow = ref("0 0 10px rgba(0, 0, 0, 0.2)");

  const imgStyle = computed(() => ({
    borderRadius: borderRadiusValues[borderRadiusIndex.value],
    transition: "border-radius 3s linear",
    boxShadow: boxShadow.value,
  }));

  const startRotation = () => {
    setInterval(() => {
      borderRadiusIndex.value++;
      if (borderRadiusIndex.value >= borderRadiusValues.length) {
        borderRadiusIndex.value = 0;
      }
    }, 3000);
  };

  return { imgStyle, startRotation };
}
