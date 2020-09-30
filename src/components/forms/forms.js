import React from 'react';

const register = {
    firstName: {
        type: 'text',
        placeholder: 'First Name',
        name: 'firstName'
    },
    lastName: {
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName'
    },
    username: {
        type: 'text',
        placeholder: 'Username',
        name: 'username'
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    password1: {
        type: 'password',
        placeholder: 'Password',
        name: 'password1'
    },
    password2: {
        type: 'password',
        placeholder: 'Re-type Password',
        name: 'password2'
    }
}

const login = {
    username: {
        type: 'text',
        placeholder: 'Username',
        name: 'username'
    },
    password: {
        type: 'password',
        placeholder: 'password',
        name: 'password'
    }
}

const post = {
    content: {
        type: 'text',
        placeholder: 'content',
        name: 'content'
    }
}

const gig = {
    location: {
        type: 'text',
        placeholder: 'Location',
        name: 'location'
    },
    title: {
        type: 'text',
        placeholder: 'Title',
        name: 'title'
    },
    description: {
        type: 'text',
        placeholder: 'Description',
        name: 'description'
    }
}

const user = {
    firstName: {
        type: 'text',
        placeholder: 'First Name',
        name: 'firstName'
    },
    lastName: {
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName'
    },
    username: {
        type: 'text',
        placeholder: 'Username',
        name: 'username'
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    profileImage: {
        type: 'text',
        placeholder: 'Image Url',
        name: 'profileImage'
    },
    occupation: {
        type: 'text',
        placeholder: 'Occupation',
        name: 'occupation'
    },
    location: {
        type: 'text',
        placeholder: 'Location',
        name: 'location'
    }
}


export { register, login, post, gig, user };