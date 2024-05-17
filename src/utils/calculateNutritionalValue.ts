export function calculateNutritionalValue(
  nutrients: Nutrients | Vitamins | Minerals,
  initialWeight: string | number,
  currentWeight: string | number,
) {
  const answer: any = {};

  for (let key in nutrients) {
    //@ts-ignore
    answer[key] = (+nutrients[key] / +initialWeight) * +currentWeight;
    answer[key] = +answer[key].toFixed(1);
  }
  return answer;
}
