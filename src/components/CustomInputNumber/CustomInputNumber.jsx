import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const CustomInputNumberWrapper = styled.div`
    display: inline-flex;
    gap: 8px;
    font-size: 16px;
    .square{
        width:48px;
        height:48px;
    }
`;

const NumberInput = styled.input`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
       appearance: none;
    }
    text-align: center;
`;

const CustomInputNumber = () => {
    return (
        <CustomInputNumberWrapper>
            <button className="square">-</button>
            <NumberInput className="square" type='number' />
            <button className="square" >+</button>
        </CustomInputNumberWrapper>

    )
}

export default CustomInputNumber;