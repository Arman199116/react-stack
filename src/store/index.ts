import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { type } from "os";
import { gitHubApi } from "./github/gitHub-api";
import { gitHubReduser } from "./github/github.slice";


export const store = configureStore({
    reducer : {
        [gitHubApi.reducerPath] : gitHubApi.reducer,
        github : gitHubReduser,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;