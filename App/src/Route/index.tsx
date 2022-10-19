/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import { Suspense, useEffect } from "react";
import { getLanguage, Loading, message } from "@datareachable/dr_front_componentlibrary";
import { RouteComponent } from "./Components/routeWithSubRoutes";
import { useDispatch } from "react-redux";
import * as GlobalDataActions from "~/Store/GlobalData/actions";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */
/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */
const RootRouter = (): JSX.Element => {
    /** private route */
    /**
     * get i18
     */
    const { i18n } = useTranslation();
    /**
     * dispatch hook
     */
    const dispatch = useDispatch();
    /**
     * change i18
     */
    useEffect(() => {
        getLanguage()
            .then((lan) => {
                void i18n.changeLanguage(lan as string);
                dispatch(GlobalDataActions.ChangeLanguageTypeSagaAction(lan as "en" | "cn"));
            })
            .catch(() => {
                message.auto({ type: "error", content: "获取当前语言失败" });
            });
    }, [dispatch, i18n]);
    /**
     * 在login_redirect页面重定向到首页
     */
    useEffect(() => {
        if (window.location.pathname.includes("login_redirect")) {
            const link = window.location.href;
            window.location.href = link.replace("login_redirect", "");
        }
    }, []);
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Loading />
                </div>
            }
        >
            <BrowserRouter basename={process.env.BASENAME}>
                <RouteComponent />
            </BrowserRouter>
        </Suspense>
    );
};

export default RootRouter;
