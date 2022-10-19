/**
 * @file RouteWithSubRoutes file
 * @date 2021-06-29
 * @author xuejie.he
 * @lastModify xuejie.he 2021-06-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Route, Routes } from "react-router-dom";
import React from "react";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

interface FatherRoutesTypes {
    path: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
    children?: {
        path: string;
        element: React.LazyExoticComponent<() => JSX.Element>;
        isPrivate?: boolean;
    }[];
}

/* <------------------------------------ **** routes config ****-------------------------------> */
export const rootRoutes: FatherRoutesTypes[] = [
    {
        path: "/plugin-editor",
        element: React.lazy(() => import("../../Pages/PluginEditorHomePage")),
    },
    {
        path: "/plugin-detail",
        element: React.lazy(() => import("../../Pages/PluginEditorDetailPage")),
    },
];
/* <------------------------------------ **** routes config end ****-------------------------------> */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const RouteComponent = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Routes>
            {rootRoutes.map((route, i) => {
                const CRoute = route.element;
                const cEl = <CRoute />;
                return <Route key={`${i}_route`} path={route.path} element={cEl} />;
            })}
        </Routes>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
