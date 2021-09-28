import React from 'react'
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack';
import { useSelector } from 'react-redux'

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId')

    const SelectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId));
    return (
       <ScrollView>
           <Image source={{uri:SelectedProduct.imageurl}}/>
           <Button title="Add to cart" onPress={()=>{}}/>
           <Text>${SelectedProduct.price.toFixed(2)}</Text>
           <Text>{SelectedProduct.description}</Text>
       </ScrollView>
    )
};

ProductDetailsScreen.navigationsOptions = navData => {
    return (
        HeaderTitle = navData.navigation.getParam('productTitle')
    )
}

const styles = StyleSheet.create({

})

export default ProductDetailsScreen