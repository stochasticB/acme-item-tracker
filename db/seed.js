const { faker } = require('@faker-js/faker');

const USERS = [];
const THINGS = [];

function newUser() {
    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  };
};

function newThing() {
    return {
        name: faker.commerce.product(),
        ranking: 1,
        userId: Math.ceil(Math.random() * 10)
    };
};

Array.from({ length: 3 }).forEach(() => USERS.push(newUser()));
Array.from({ length: 30 }).forEach(() => THINGS.push(newThing()));

module.exports =  {
    USERS,
    THINGS,
    newUser,
    newThing
};