import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

import AuthorListItem from "../common/AuthorListItem";
import { globalStyles } from "../../styles/global";

const HomeScreen = ({ navigation }) => {
    const [authors, setAuthors] = useState([]);
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const { container, title, searchContainerStyle } = globalStyles;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setAuthors(data));
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <SafeAreaView style={container}>
            <Text style={title}>Authors</Text>
            <SearchBar
                placeholder="Search"
                onChangeText={(value) => setSearch(value)}
                value={search}
                containerStyle={searchContainerStyle}
                inputContainerStyle={{ backgroundColor: '#EFEEEE'}}
            />
            <ScrollView>
                {authors
                    .filter(author => {
                        if (search === '') {
                            return author;
                        } else if (
                            author.name.toLowerCase().includes(search.toLowerCase())
                            || author.email.toLowerCase().includes(search.toLowerCase())) {
                            return author;
                        }
                    })
                    .map((item, index) =>
                    <AuthorListItem
                        navigation={navigation}
                        author={item}
                        key={index}
                        posts={posts}
                    />)}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
