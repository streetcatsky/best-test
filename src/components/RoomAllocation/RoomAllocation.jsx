import React, { useState } from "react";
import CustomInputNumber from "../CustomInputNumber";
import styled from "styled-components";
import PropTypes from 'prop-types';
const Wrapper = styled.div`
width:500px;
border: 2px dashed gray;
padding: 10px;
`;
const UnUsedPeople = styled.div`
margin:15px 0;
background-color:#acbfcc;
border:2px solid #78a6c4;
padding:20px;
`;

/**未完待續... */
const RoomAllocation = ({ guest, room, onChange }) => {

    const [inputValue, setInputValue] = useState(25);

    return (
        <Wrapper>
            <h1>住宿人數: {guest}人/{room}房</h1>
            <UnUsedPeople>尚未分配人數: 人</UnUsedPeople>
            <CustomInputNumber
                min={5}
                max={23}
                step={2}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
        </Wrapper>
    )
}

RoomAllocation.prototype = {
    guest: PropTypes.number.isRequired,
    room: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RoomAllocation;