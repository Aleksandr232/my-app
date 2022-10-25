import * as Recat from 'react';
import { FlatList, Text} from 'react-native';
import { product } from '../product';
import ProductCard from './ProductCard';


export default function ProductList(){
    return(
        <FlatList
            data={product}
            keyExtractor={(product)=>product.id}
            renderItem={({item})=><ProductCard {...item}/>}
            contentContainerStyle={{paddingHorizontal: 15}}
        />
    )
}