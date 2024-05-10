interface ProductInfo extends Product {
  cardId: string;
  quantity: string;
}

interface Food {}

interface Product {
  _id?: string;
  name: string;
  quantity: string | number;
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}

interface MicMacNutrients {
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}
