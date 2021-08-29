import {configureStore} from "@reduxjs/toolkit";
import weather from "./weather";
import api from "./middkeware/api";
export  default configureStore({
    reducer:{
        weather
    },
    middleware:[
        api
    ]
})
