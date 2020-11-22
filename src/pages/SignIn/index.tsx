import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext);

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