// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '#components/layouts/main-layout'
import Row from "#components/row";

let routes = ['users' , 'products' , 'students' , 'courses' , 'teachers']
const routers = createBrowserRouter([
    {
        element: <MainLayout/>,
        path: '/',
        children:[
            {
                element: <Row/>,
                path: 'users'
            } ,
            {
                element: <Row/>,
                path: 'products'
            },
            {
                element: <Row/>,
                path: 'students'
            },
            {
                element: <Row/>,
                path: 'teachers'
            },
            {
                element: <Row/>,
                path: 'courses'
            },
            {
                element: <Row/>,
                path: 'guests'
            },
            {
                element: <Row/>,
                path: 'comments'
            }
        ]
    }
])

export default routers


// children: [
//     routes.map((route) => ({ element: <Row/>, path: `/${route}` })),
// ],