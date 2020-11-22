import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import styles from './Styles'
import { useAuth }  from '../../contexts/auth';

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useAuth();

    function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sing In" onPress={handleSignIn} />
        </View>
    );
};

export default SignIn;