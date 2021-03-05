
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Color from './layout/colors.js';
import VectorIcons from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from '@react-navigation/native';
import Createtodo from "./views/CreateTodo.js";
import ListTask from "./views/ListToDo.js";
const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props){
    super(props);
  }
  ListTask() {
    return <ListTask />;
  }
  Createtodo() {
    return <Createtodo />;
  }
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color,size}) =>{
              let iconName;
              switch (route.name){
                case 'Mostrar Tareas': {
                  if (focused){
                    return (
                      <VectorIcons 
                        name="profile" 
                        size={23} 
                        color={Color.option1.thirthcolor} 
                      />
                    );
                  }
                  else {
                    return (
                      <VectorIcons 
                        name="profile" 
                        size={23} 
                        color={Color.option1.secondcolor}  
                      />
                    );
                  }
                }
                case 'Agregar Tareas': {
                  if (focused){
                    return (
                      <VectorIcons 
                        name="form" 
                        size={23} 
                        color={Color[Color.key].thirthcolor} 
                      />
                    );
                  }
                  else {
                    return (
                      <VectorIcons 
                      name="form" 
                      size={23} 
                      color={Color[Color.key].secondcolor} 
                      />
                    );
                  }
                }
              } 
            }
          })}>
          <Tab.Screen name="Mostrar Tareas" component={this.ListTask} />
          <Tab.Screen name="Agregar Tareas" component={this.Createtodo} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

