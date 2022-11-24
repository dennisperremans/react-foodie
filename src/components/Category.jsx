import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react'

function Category() {
  return (
    <List className="navigation">
        <StyledLink className="nav-item" to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </StyledLink>
        <StyledLink className="nav-item" to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </StyledLink>
        <StyledLink className="nav-item" to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </StyledLink>
        <StyledLink className="nav-item" to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </StyledLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    text-align: center;
    flex-direction: column;
    text-decoration: none;

    svg {
        background-color: #333;
        color: #FFF;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 1rem;
        transition: all .5s;
    }

    h4 {
        color: #AAA;
        font-size: .75rem;
        margin-top: .5rem;
        transition: all .5s;
    }

    &:hover {
        svg {
            background-color: #111;
        }

        h4 {
            color: #111;
        }
    }
`


export default Category