import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        watchedList:[],
        watchList:[]

    },
    reducers:{
        addWatchedList:(state,action)=>{
            return{
                ...state,
                watchedList:[...state.watchedList,action.payload]
            }
 
        },
        addWatchList:(state,action)=>{
            return {
                ...state,
                watchList:[...state.watchList,action.payload]
            }
        },
        deletedMovie:(state,action)=>{
           state.watchList= state.watchList.filter((movie)=>{
                return movie.id!==action.payload
            })
        }
    }
})
export const {addWatchedList,addWatchList,deletedMovie}=movieSlice.actions
export const movieReducer=movieSlice.reducer