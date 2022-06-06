import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    EmailField,
    List,  
    ReferenceInput,
    SelectInput,
    SimpleForm,
    SimpleList,
    TextInput,
    TextField,   
} from 'react-admin';


export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List filters = {userFilters}>
        { isSmall ? (
            <SimpleList 
                primaryText={record => record.id}
                secondaryText={record => record.name}
                tertiaryText={record => record.email}
            />
        ) : (
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="phone"/>
            <TextField label = "City" source="address.city"/>
            <TextField label = "ZipCode" source="address.zipcode"/>
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
}

export const UserEdit = () => (
    <Edit >
        <SimpleForm>
            <TextInput disabled source = "id"/>
            <TextInput source = "name"/>
            <TextInput source="email"/>
            <TextInput source="phone"/>
            <TextInput label="City" source="address.city"/>
        </SimpleForm>
    </Edit>
)

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source = "name"/>
            <TextInput source = "email"/>
            <TextInput source="phone"/>
            <TextInput source="address.city"/>
        </SimpleForm>
    </Create>
);

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name"/>
    </ReferenceInput>
];