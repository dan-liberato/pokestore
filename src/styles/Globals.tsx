/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from 'styled-components';

import MontSerrat from '../assets/fonts/montserrat-regular.ttf';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #fafafa;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontSerrat}) format('ttf');
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 40px;
        padding: 8px 12px;
        border-radius: 5px;
        background-color: #efefef;
        margin-right: 1rem;
        transition: 0.3s;
        font-size: 0.7rem;

        &:hover {
            background-color: #00a8ff;
            color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
    }

    input {
        width: 100%;
        height: 40px;
        background-color: #efefef;
        border-radius: 5px;
        border: 1px solid #b5b5b5;
        padding: 0 12px;
        font-size: 0.7rem;

        &:focus {
            outline: none;
            border: 1px solid #00a8ff;
            backoground-color: none;
        }
    }
`;
