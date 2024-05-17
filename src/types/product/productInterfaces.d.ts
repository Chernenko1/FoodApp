interface ProductInfo extends Product {
  cardId: string;
  quantity: string;
}

interface Food {}

interface Product {
  _id?: string;
  name: string;
  weight: number;
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}

interface FNutrients extends Nutrients, Vitamins, Minerals {}
