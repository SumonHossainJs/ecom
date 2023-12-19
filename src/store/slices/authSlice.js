import { createSlice } from "@reduxjs/toolkit";
 const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login: false,
        userData:{},
    },
    reducers:{
        logIn(state,action) {
            const findUser = user1;
            if(findUser.length){
                state.userData = findUser[0],
                state.login = true;
            }
        }
    }
 });


 export const {logIn} = authSlice.actions;

 export default authSlice.reducer;