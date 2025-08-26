import styled from 'styled-components'

export const AddButton = styled.button `
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 15px;
    cursor: pointer;
    border-radius: 12px;

        &:hover {
            background-color: #45a049;
        }
    `

export const Container = styled.div `
    background-color: #116877;
    padding: 20px;
    border-radius: 12px;

    h1{
        color: white;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 10px;
        outline: none;
        padding-left: 10px;
    }
    
    `

export const Product = styled.div `
    background-color: white;
    margin-top: 10px;
    padding: 10px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 20px;
        color: #333;
        margin: 0;
        text-transform: capitalize;
    } 

`

export const TrashButton = styled.button `
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        color: red;
    }
    `