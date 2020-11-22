import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'
import api from '../services/api'

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

            await new Promise(resolve => setTimeout(resolve, 2000))

            if(storagedUser) {
                let user = JSON.parse(storagedUser)
                api.defaults.headers['Authorization'] = `Bearer ${user.token}`;
                setUser(user);
            }

            setLoading(false);

        }

        loadStoragedData();
    }, [])

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.user.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
            api.defaults.headers['Authorization'] = "";
        });
    }

    return (
        <AuthContext.Provider value ={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;