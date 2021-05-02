import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const AuthorListItem = ({ author, navigation, posts }) => {
    const { container, icon, details, email, postContainer } = styles;
    let acronym = author.name.split(/\s/)
        .filter(item => item !== 'Mrs.' && item !== 'Ms.')
        .reduce((response, word) => response += word.slice(0,1),'');
    acronym = acronym.length <= 2 ? acronym : acronym.slice(0, 2);
    const sortedPosts = posts.filter(post => post && author && post.userId === author.id);

    const navigateToPosts = () => {
        navigation.navigate('Posts', {
            posts: sortedPosts,
            authorName: author.name,
        });
    };

    return (
        <TouchableOpacity style={container} onPress={navigateToPosts}>
            <View style={icon}>
                <Text>
                    {acronym}
                </Text>
            </View>
            <View style={details}>
                <Text>{author.name}</Text>
                <Text style={email}>{author.email}</Text>
            </View>
            <View style={postContainer}>
                <Text>{sortedPosts && sortedPosts.length} posts</Text>
                <AntDesign name="right" size={18} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        marginVertical: 11,
        marginHorizontal: 15
    },
    icon: {
        flex: 1,
        height: 40,
        width: 40,
        backgroundColor: '#6FCF97',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        justifyContent: 'space-between',
        paddingLeft: 15,
        flex: 5,
    },
    email: {
        color: '#948C8D',
        fontSize: 12,
    },
    postContainer: {
        flex: 2,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
});

export default AuthorListItem;
