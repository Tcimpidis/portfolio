import { FC } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./routes";
import Header from "./header";
import styles from './app.module.css'

const Root: FC = () => {
  return (
    <div >
        <Header />
        <div className={styles.container}>
          <Outlet />
        </div>
    </div>
  )
}

const createRouter = () => {
  return createHashRouter ([
    {
      path:'/', 
      element: <Root />,
      children: routes
    }
  ])
}

export const App: FC = () => {
  const router = createRouter();

  return <RouterProvider router={router} />
}