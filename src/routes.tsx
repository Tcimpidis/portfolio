import { Outlet } from "react-router-dom";
import { HomeComponent } from "./home/home";

export const routes = [
	{
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <HomeComponent />,
			}
		]
	},
];