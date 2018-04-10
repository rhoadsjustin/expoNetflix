import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from 'components/screens/home-screen'
import ShowDetails from 'components/screens/show-details-screen'

const HomeStackNavigator = StackNavigator({
    Main: { screen: HomeScreen },
    ShowDetailsScreen: { screen: ShowDetails }
},
{
    initialRouteName: 'Main',
    headerMode: 'none'
}
)

export default HomeStackNavigator;