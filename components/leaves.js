// Imports for Redux and Redux-Leaves
import React from 'react';
import { createStore } from 'redux'
import reduxLeaves from 'redux-leaves'
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';

export const leavesStuff = () => {

    // Your job: provide some initial state
    const initialState = {
        counterOne: 0,
        counterTwo: 0
    }

    // Redux-Leaves's job: to write your reducer and actions for you
    const [reducer, actions] = reduxLeaves(initialState)

    // Create your Redux store using the given reducer
    const store = createStore(reducer)

    //alert("Inside leaves.js");

    console.log(store.getState()); // { counterOne: 0, counterTwo: 0 }

    //alert("store " + store.getState());

    // Let's create an action to increment counterOne by 3
    const actionToIncrementCounterOneByThree = actions.counterOne.create.increment(3)

    // Dispatch our created action to the store
    store.dispatch(actionToIncrementCounterOneByThree)

    // The store's state will be updated!
    //console.log(store.getState()) // { counterOne: 3, counterTwo: 0 }

    // Now let's increment counterTwo by 10
    store.dispatch(actions.counterTwo.create.increment(10))
    //console.log(store.getState()) // { counterOne: 3, counterTwo: 10 }

    alert("Inside leaves.js " + store.getState().counterOne);
}