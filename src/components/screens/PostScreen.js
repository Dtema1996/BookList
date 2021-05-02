import React, {useState} from 'react';
import { SafeAreaView, Text, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";

import PostListItem from "../common/PostListItem";
import { globalStyles } from "../../styles/global";

const PostScreen = ({ route }) => {
    const [search, setSearch] = useState('');
    const { container, title, searchContainerStyle } = globalStyles;

    return (
        <SafeAreaView style={container}>
            <Text style={title}>{route.params.authorName}</Text>
            <SearchBar
                placeholder="Search"
                onChangeText={(value) => setSearch(value)}
                value={search}
                containerStyle={searchContainerStyle}
                inputContainerStyle={{ backgroundColor: '#EFEEEE'}}
            />
            <ScrollView style={{margin: 10}}>
                {route.params.posts
                    .filter(post => {
                        if (post === '') {
                            return post;
                        } else if (
                            post.title.toLowerCase().includes(search.toLowerCase())
                            || post.body.toLowerCase().includes(search.toLowerCase())) {
                            return post;
                        }
                    })
                    .map((post, index) => <PostListItem key={index} post={post} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

export default PostScreen;
