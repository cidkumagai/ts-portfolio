import { createSlice } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { ImHome, ImPencil } from "react-icons/im";
import type { RootState } from '../app/store';

type PortfolioState = {
    link: string,
    pageName: string,
    icon: IconType,
};

type InitialState = {
    topMenu: Array<PortfolioState>
}

const initialState: InitialState = {
    topMenu: [
        {
            link: '/',
            pageName: 'Home',
            icon: ImHome
        },
        {
            link: '/skill',
            pageName: 'Skill',
            icon: ImPencil
        }
    ]
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: initialState,
    reducers: {},
})

export const selectPortfolio = (state: RootState) => state.portfolio;
export default portfolioSlice.reducer