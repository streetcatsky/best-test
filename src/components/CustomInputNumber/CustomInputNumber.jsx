import React, { useCallback, useRef } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import useLongPress from "../../helper/hooks/useLongPress";

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
    appearance: textfield;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #9e9e9e;

    &:disabled {
        cursor: no-drop;
        background-color:#bfc6ce;
     }
`;

const CustomButton = styled.button`
    border: 2px solid #3979b9;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size:2rem;
    color: #3979b9;
    cursor: pointer;
    background-color:initial;
    transition: background-color .3s;

    &:hover{
        background-color:#285683;
    }

    &:active{
        background-color:#1e3f61;
    }

     &:disabled {
        cursor: no-drop;
        background-color:#4c5258;
        color: #a6b4c2;
     }
`;

const CustomInputNumber = ({ min, max, step, name, value, disabled, onChange, onBlur }) => {

    const refInput = useRef(null);

    const canAdd = value < max;
    const canMinus = value > min;

    const handleAdd = useCallback(() => {
        refInput.current.stepUp();
        dispatchInputEvent();
    }, [refInput]);

    const handleMinus = useCallback(() => {
        refInput.current.stepDown();
        dispatchInputEvent();
    }, [refInput]);

    const minusLongPressEvent = useLongPress(handleMinus, { isStop: !canMinus });
    const addLongPressEvent = useLongPress(handleAdd, { isStop: !canAdd });

    const dispatchInputEvent = useCallback(() => {
        const event = new Event("input", { bubbles: true });
        refInput.current.dispatchEvent(event);
    }, [refInput]);

    return (
        <CustomInputNumberWrapper>

            <CustomButton  {...minusLongPressEvent} disabled={disabled || !canMinus} className="square" onClick={handleMinus}>
                <i className="fas fa-minus"></i>
            </CustomButton>

            <NumberInput
                ref={refInput}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                value={value}
                name={name}
                step={step}
                max={max}
                min={min}
                className="square"
                type='number'
            />
            <CustomButton {...addLongPressEvent} disabled={disabled || !canAdd} className="square" onClick={handleAdd}>
                <i className="fas fa-plus"></i>
            </CustomButton>
        </CustomInputNumberWrapper >

    )
}
CustomInputNumber.prototype = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    disabled: PropTypes.boolean,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
}

export default CustomInputNumber;