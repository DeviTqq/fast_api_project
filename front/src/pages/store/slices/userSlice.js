import {createSlice} from "@reduxjs/toolkit";

const initialState = {   // изначальное состояние - пользователь
    email: null,
    token: null,
    id: null
} 

const userSlice = createSlice({ //объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){ // в качестве action payload прийдут нужные данные, дальше их установка
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state){  // удаляем информацию о пользователе
            state.email = null;
            state.token = null;
            state.id = null;            
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer