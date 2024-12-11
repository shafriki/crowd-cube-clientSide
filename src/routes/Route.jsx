import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Details from "../pages/Details";
import UpdateCampaign from "../pages/UpdateCampaign";
import RunningCampaign from "../components/RunningCampaign";

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('https://crowd-cube-server-one.vercel.app/campaign'),
      },
      {
        path: '/runningCampain',
        element: <RunningCampaign></RunningCampaign>,
        loader: () => fetch('https://crowd-cube-server-one.vercel.app/campaign'),
      },
      {
        path: '/allcampaign',
        element:<AllCampaign></AllCampaign>,
        loader: () => fetch('https://crowd-cube-server-one.vercel.app/campaign'),
      },
      {
        path: '/addCampaign',
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: '/myCampaign/:email',
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://crowd-cube-server-one.vercel.app/campaign/email/:email${params.email}`)
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://crowd-cube-server-one.vercel.app/campaign/${params.id}`)
      },
      {
        path: '/donation',
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
        
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://crowd-cube-server-one.vercel.app/campaign/${params.id}`)

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
