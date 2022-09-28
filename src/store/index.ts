import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gitHubApi } from "./github/gitHub-api";


export const store = configureStore({
    reducer : {
        [gitHubApi.reducerPath] : gitHubApi.reducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
});

setupListeners(store.dispatch);