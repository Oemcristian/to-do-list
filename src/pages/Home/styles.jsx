import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${(props) => (props.darkMode ? props.darkModeImage : props.lightModeImage)});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        transition: background-image 0.8s ease-in-out;
        font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const AddButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 24px;
    font-size: 16px;
    margin: 8px 0;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(76,175,80,0.15);
    transition: background 0.3s, box-shadow 0.3s;
    align-items: center;
    margin-top: 18px;

    &:hover {
        background-color: #45a049;
        box-shadow: 0 4px 12px rgba(76,175,80,0.25);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.darkMode ? '#333' : 'white')};
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    border-radius: 18px;
    padding: 32px 28px;
    margin-top: 80px;
    min-width: 400px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);

    h1 {
        color: ${(props) => (props.darkMode ? 'white' : '#333')};
        margin-bottom: 18px;
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    input {
        height: 38px;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-top: 12px;
        outline: none;
        padding-left: 12px;
        font-size: 16px;
        background: ${(props) => (props.darkMode ? '#444' : '#fafafa')};
        color: ${(props) => (props.darkMode ? 'white' : 'black')};
        transition: border 0.2s;

        &:focus {
            border: 1.5px solid #4CAF50;
        }
    }

    div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    }
`;

export const DivDosTres = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Product = styled.div`
    background-color: ${(props) => (props.darkMode ? '#444' : 'white')};
    margin-top: 12px;
    padding: 14px 18px;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);

    p {
        font-weight: 500;
        font-size: 20px;
        color: ${(props) => (props.darkMode ? '#fafafa' : '#333')};
        text-align: left;
        margin-right: 80px;
        text-transform: capitalize;
        letter-spacing: 0.5px;
    }

    input[type="checkbox"] {
        width: 22px;
        height: 22px;
        cursor: pointer;
        margin-right: 15px;
        accent-color: #4CAF50;
    }
`;

export const TrashButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 22px;
    color: #888;
    transition: color 0.2s;

    &:hover {
        color: red;
    }
`;

export const SilkButton = styled.button`
    background-color: #f0e68c;
    border: none;
    color: black;
    padding: 10px 24px;
    font-size: 16px;
    margin: 8px 0;
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(240,230,140,0.15);
    transition: background 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #e6e26b;
        box-shadow: 0 4px 12px rgba(240,230,140,0.25);
    }
`;