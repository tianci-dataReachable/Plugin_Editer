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
    styleItemType,
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
    index: number;
    styleOverviewList: styleItemType[];
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
    const [searchValue, setSearchValue] = useState("");
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
    const handleClickImg = (style: string, index: number) => {
        const state: statepProps = { style, index, styleOverviewList };
        navigate("/plugin-detail", { state });
    };
    /**
     * 模糊查询
     * @param {Array} list 原数组
     * @param {String} keyword 查询关键字
     * @return {Array}     查询结果
     */
    const fuzzyQuery = (list: styleItemType[], keyword: string) => {
        const reg = new RegExp(keyword);
        const arr: styleItemType[] = [];
        for (let i = 0; i < list.length; i++) {
            if (reg.test(list[i].title) || reg.test(list[i].style)) {
                arr.push(list[i]);
            }
        }
        return arr;
    };
    const handleClickSearch = () => {
        console.log();
        const currentStyle = selectStyleList.filter((item) => item.status === true);
        let searchList: styleItemType[] = [];
        if (currentStyle[0].id === "ChinaStyle") searchList = ChinaStyleOverviewList;
        if (currentStyle[0].id === "gameStyle") searchList = gameStyleOverviewList;
        if (currentStyle[0].id === "tecStyle") searchList = tecStyleOverviewList;
        if (searchValue) {
            setStyleOverviewList(fuzzyQuery(searchList, searchValue));
        } else {
            setStyleOverviewList(searchList);
        }
    };

    const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Escape") {
            setSearchValue("");
        }
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleClickSearch();
        }
    };
    const handleInputBlur = () => {
        handleClickSearch();
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
                    <input
                        className={style.PluginEditorHome_search}
                        placeholder="搜索..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyUp={(e) => handleKeyup(e)}
                        onBlur={handleInputBlur}
                    />
                    <div className={style.pluginEditorHome_icon} onClick={handleClickSearch}>
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
                        {styleOverviewList.length !== 0 ? (
                            styleOverviewList.map((item, i) => {
                                return (
                                    <div
                                        className={style.pluginEditorHome_listItem}
                                        key={item.id}
                                        onClick={() => handleClickImg(item.style, i)}
                                    >
                                        <img src={item.cover} />
                                    </div>
                                );
                            })
                        ) : (
                            <div className={style.pluginEditorHome_none}>无搜索结果</div>
                        )}
                        {/* {styleOverviewList.map((item) => {
                            return (
                                <div
                                    className={style.pluginEditorHome_listItem}
                                    key={item.id}
                                    onClick={() => handleClickImg(item.style, item.id)}
                                >
                                    <img src={item.cover} />
                                </div>
                            );
                        })} */}
                    </ScrollComponent>
                </div>
            </div>
        </div>
    );
};
export default PluginEditorHome;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
