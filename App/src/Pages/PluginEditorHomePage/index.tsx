/**
 * @file PluginEditorHome
 * @date 2022-10-17
 * @author wangtianci
 * @lastModify wangtianci     2022-10-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useState } from "react";
import style from "./style.scss";
import { Icon, ScrollComponent } from "@datareachable/dr_front_componentlibrary";
import getClassNames from "~/Utils/getClassNames";
import {
    ChinaStyleOverviewList,
    gameStyleOverviewList,
    tecStyleOverviewList,
} from "~/DefaultData/styleOverview";
import { useNavigate } from "react-router-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface styleSelectionItem {
    id: string;
    content: string;
    status: boolean;
}
interface statepProps {
    style: string;
    id: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginEditorHome = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const styleSelectionList: styleSelectionItem[] = [
        { id: "ChinaStyle", content: "中国风格", status: true },
        { id: "gameStyle", content: "游戏风格", status: false },
        { id: "tecStyle", content: "科技风格", status: false },
    ];
    const [selectStyleList, setSelectStyleList] = useState(styleSelectionList);
    const [styleOverviewList, setStyleOverviewList] = useState(ChinaStyleOverviewList);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const handleSelectstyle = (id: string, status: boolean) => {
        setSelectStyleList(
            selectStyleList.map((item) => {
                if (item.id === id) {
                    return { ...item, status };
                } else {
                    return { ...item, status: !status };
                }
            }),
        );
        if (id === "ChinaStyle") setStyleOverviewList(ChinaStyleOverviewList);
        if (id === "gameStyle") setStyleOverviewList(gameStyleOverviewList);
        if (id === "tecStyle") setStyleOverviewList(tecStyleOverviewList);
    };

    const navigate = useNavigate();
    const handleClickImg = (style: string, id: string) => {
        const state: statepProps = { style, id };
        navigate("/plugin-detail", { state });
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */

    return (
        <div className={style.PluginEditorHome_container}>
            <div className={style.PluginEditorHome_header}>
                <div className={style.PluginEditorHome_logo}>dataReachable</div>
                <div className={style.pluginEditorHome_searchBox}>
                    <input className={style.PluginEditorHome_search} placeholder="搜索..." />
                    <div className={style.pluginEditorHome_icon}>
                        <Icon type="search" />
                    </div>
                </div>
            </div>
            <div className={style.pluginEditorHome_main}>
                <div className={style.pluginEditorHome_title}>插件主题风格</div>
                <div className={style.pluginEditorHome_styleSelection}>
                    {selectStyleList.map((item) => {
                        return (
                            <div
                                className={getClassNames({
                                    [style.pluginEditorHome_selectionItem]: true,
                                    [style.pluginEditorHome_selectionItem_active]: item.status,
                                })}
                                key={item.id}
                                onClick={() => handleSelectstyle(item.id, !item.status)}
                            >
                                {item.content}
                            </div>
                        );
                    })}
                </div>
                <div className={style.pluginEditorHome_list}>
                    <ScrollComponent bodyClassName={style.ScrollComponent}>
                        {styleOverviewList.map((item) => {
                            return (
                                <div
                                    className={style.pluginEditorHome_listItem}
                                    key={item.id}
                                    onClick={() => handleClickImg(item.style, item.id)}
                                >
                                    <img src={item.cover} />
                                </div>
                            );
                        })}
                    </ScrollComponent>
                </div>
            </div>
        </div>
    );
};
export default PluginEditorHome;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
