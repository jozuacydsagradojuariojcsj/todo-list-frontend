import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    userid: string;
    username: string;
    email:string;
    first_name:string;
    last_name:string;
    password: string;
    roles: string;
}

const initialState:UserState = {
    userid: "",
    username: "",
    email:"",
    first_name:"",
    last_name:"",
    password:"",
    roles:"",
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserData:(state , action:PayloadAction<UserState>) => {
            state.userid = action.payload.userid;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.password = action.payload.password;
            state.roles = action.payload.roles;
        },
        clearUserData: (state) => {
            state.userid = "";
            state.username = "";
            state.email = "";
            state.first_name = "";
            state.last_name = "";
            state.password = "";
        },
    },
});

export const {setUserData, clearUserData} = userSlice.actions
export default userSlice.reducer;