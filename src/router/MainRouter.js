import React from 'react';
import Marketing from '../components/Marketing';
import Diet from '../components/Diet';
import SearchResults from '../components/SearchResult';
import SearchDishName from '../components/SearchDishName';
import Price from '../components/Price';

export default function MainRouter(){
    return(
        <main>
            <Marketing />
            <Diet />
            <SearchResults />
            <Price />
            <SearchDishName />
        </main>
    )
}