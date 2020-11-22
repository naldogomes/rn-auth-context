import React from 'react';
import { View, Button, Text } from 'react-native';

import styles from './Styles'
import { useAuth }  from '../../contexts/auth';


const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign out" onPress={handleSignOut} />
        </View>
    );
};

export default Dashboard;