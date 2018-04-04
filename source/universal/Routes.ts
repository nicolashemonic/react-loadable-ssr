import { fetchDescription } from "./actions";
import { LoadableAbout, LoadableHome } from "./loadable";
import { RouteProps } from "react-router-dom";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IState } from "../universal/models";

interface IRoute extends RouteProps {
    fetchData?: () => ThunkAction<Promise<Action>, IState, void>;
}

export const routes: IRoute[] = [
    {
        path: "/",
        exact: true,
        component: LoadableHome
    },
    {
        path: "/about",
        component: LoadableAbout,
        fetchData: fetchDescription
    }
];
