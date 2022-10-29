import React, { useState } from 'react'
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import FaceIcon from '@mui/icons-material/Face';


// props: {
//     onsubmit: onSearchSubmit()
// }

function MainpageHeader(props) {
    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input)
        console.log("this is the input", input);
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <PinterestIcon />
            </LogoWrapper>
            <HomePageButton>
                <a href="">Home</a>
            </HomePageButton>
            <TodayButton>
                <a href="">Today</a>
            </TodayButton>
            <CreateButton>
                <a href="">Create</a>
                <KeyboardArrowDownIcon />
            </CreateButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <SmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default MainpageHeader

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 2rem;
        cursor: pointer;
        
    }
    padding: 4px 4px;
    border-radius: 1.5rem;
    :hover {
        background-color: #efefef;
    }
`

const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width:80px;
    align-items:center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
    margin-left: 8px;
    background-color: rgb(17, 17, 17);

    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
    }

`

const TodayButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
    }

`

const CreateButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        dispaly: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent;
        border: none;
        width: 98%;
        height: 45px;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input:focus {
        outline: none;
    }
`

const IconsWrapper = styled.div`
    padding-left: 12px;
`