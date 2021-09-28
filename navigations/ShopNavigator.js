import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import ProductOverView from '../screens/shops/ProductOverview';
import ProductDetailsScreen from '../screens/shops/ProductDetailsScreen';

const ProdcutsNavigator = createStackNavigator({
    productsOverView : ProductOverView,
    ProductDetail : ProductDetailsScreen
},{
    defaultNavigations:{
        headerStyle:{
            backgroundColor : Platform.OS === 'android' ?  Colors.primary : ''
        },
        headerTintColor : Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProdcutsNavigator)