import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { lazy } from 'react';

const NewsFeed = lazy(() => import ("../features/newsFeed/NewsFeed"));

const routes= createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children: [
        {
            path: "/",
            index: true,
            element:  <NewsFeed/>,
        }
      ]
    }
    
  ]);

  
  export default routes