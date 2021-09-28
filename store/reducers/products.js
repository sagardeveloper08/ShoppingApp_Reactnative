import PRODUCTS from "../../data/data";
import ProductOverView from "../../screens/shops/ProductOverview";
// import ProductOverView from "../";

const initialState = {
    availableProducts: PRODUCTS,
    userPrdoducts: PRODUCTS.filter(prod => ProductOverView.ownerId === 'u1')
}

export default (state = initialState, action) => {
    return state;
};
