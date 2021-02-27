import React,{useContext } from 'react'
import { Router, Route, Switch } from "react-router";
import {ThemeContext} from '../src/context/ThemeContext';
import Dashboard from '../src/components/pages/mainPages/Dashboard';
import {history} from './history';

export const AppRouter  = (props)=>{
    
    const context    =  useContext(ThemeContext);
    const FullPage   =  context.fulllongpage;
    const Borderpage =  context.borderpage;
    
    const isFullPage =  props.FullPage
  
    const path       =  props.path;
    const Component  =  props.component;
    return (
        <>
        <Route path={path}>
            {
                isFullPage ?
                <FullPage>
                    <Component/>
                </FullPage>                
                :
                <Borderpage>
                  <Component/>
                </Borderpage>
            }
        </Route>
        </>
   )
}
const RouterFile = () => {
    return (
        <Router history={history}>
           <Switch>
               <AppRouter exact path="/dashboard" component={Dashboard} FullPage />
            </Switch> 
        </Router>
    )

}

export default RouterFile
