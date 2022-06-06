import * as React from "react"
import { Route } from "react-router-dom";
import { Admin, Resource, CustomRoutes } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import Dashboard from './pages/Dashboard';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Confirmation } from './pages/Confirmation';
import authProvider from './providers/authProvider';
import { PostCreate, PostEdit,  PostList } from './components/posts';
import { UserCreate, UserEdit, UserList } from './components/users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={ PostEdit } create={ PostCreate } icon={PostIcon} />
        <Resource name="users" list={UserList} edit={ UserEdit } create= { UserCreate } icon={UserIcon} />
        <CustomRoutes>
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
        </CustomRoutes>
    </Admin>
);

export default App;