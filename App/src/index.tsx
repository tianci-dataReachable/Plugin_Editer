/**
 * @file project index file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import RootRouter from "./Route";
// import i18n (needs to be bundled ;))
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import "./global.css";
import i18n from "./Locales/i18n";
import store from "./Store/rootStore";

const root = createRoot(document.getElementById("root") ?? document.body);

root.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <RootRouter />
        </Provider>
    </I18nextProvider>,
);

/**
 * get spm project info
 */
const urlParams = new URLSearchParams(window.location.search);
const redirectCreateProject = urlParams.get("tag");
if (redirectCreateProject === "redirectCreateProject") {
    window.localStorage.setItem("project_id", urlParams.get("project") as string);
    window.localStorage.setItem("tag", redirectCreateProject);
}
