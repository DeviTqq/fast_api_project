// Данный хук нужен для того, чтобы в любой точке приложения узнавать - авторизован пользователь или нет

import { useSelector } from "react-redux";

export function useAuth(){
    const {email, token, id} = useSelector(state => state.user)

    return {    
        isAuth: !!email, //отдельный ключ в булевом значении(авторизован ли)
        email,
        token,
        id
    }
}

