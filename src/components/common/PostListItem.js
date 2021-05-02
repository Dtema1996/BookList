import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const PostListItem = ({ post }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{post.title}</Text>
            <Text style={styles.bodyText}>{post.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 5 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text: {
        fontWeight: '400',
        paddingBottom: 10,
        fontSize: 16,
    },
    bodyText: {
        color: '#948C8D',
        fontSize: 12,
    },
});

export default PostListItem;
