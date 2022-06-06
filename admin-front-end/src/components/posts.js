import * as React from "react";
import { useMediaQuery } from '@mui/material';
import { 
    Create,
    Datagrid, 
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    SimpleList,
    TextInput,
    TextField,  
    useRecordContext,
} from 'react-admin';

export const PostList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters = {postFilters}>
            { isSmall ? (
                <SimpleList 
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
           ) : (
            <Datagrid>
                <TextField source = "id" />
                <ReferenceField label="User" source="userId" reference="users">
                    <TextField source="name"/>                
                </ReferenceField>
                <TextField source="title"/>
                <TextField srouc="body" />
                <EditButton />
            </Datagrid>
           )}
        </List>
    );
}


export const PostEdit = () => (
<Edit title={<PostTitle />}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
</Edit>
);

export const PostCreate = props => (
<Create {...props}>
    <SimpleForm>
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
</Create>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post{ record ? ` "${record.title}"` : ''}</span>;
};

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" >
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
