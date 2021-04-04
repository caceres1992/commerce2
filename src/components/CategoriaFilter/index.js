import React from 'react';
import {
    CategoriaContent,
    CategoriaFilterContainer,
    CategoriaFilterLink,
    CateriaFilterLI
} from "./CategoriaFilterElements";

const CategoriaFilter = ({cate, setActivarCa}) => {
    return (
        <CateriaFilterLI><CategoriaFilterLink
            onClick={() => setActivarCa(false)}>{cate.name}</CategoriaFilterLink></CateriaFilterLI>

    );
};

export default CategoriaFilter;
