import * as React from "react"
import { Admin, Resource } from 'react-admin';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { PostCreate, PostEdit,  PostList } from './posts';
import { UserCreate, UserEdit, UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={ PostEdit } create={ PostCreate } icon={PostIcon} />
        <Resource name="users" list={UserList} edit={ UserEdit } create= { UserCreate } icon={UserIcon} />
    </Admin>
);

export default App;