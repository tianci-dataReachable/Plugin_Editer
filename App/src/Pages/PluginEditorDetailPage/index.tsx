/**
 * @file PluginEditorDetail
 * @date 2022-10-17
 * @author wangtianci
 * @lastModify wangtianci 2022-10-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
// import React from "react";
import style from "./style.scss";
import { Icon } from "@datareachable/dr_front_componentlibrary";
import getClassNames from "~/Utils/getClassNames";

import {
    ChinaStyleDetailList,
    gameStyleDetailList,
    tecStyleDetailList,
} from "~/DefaultData/styleDetail";
import { useEffect, useState } from "react";
import { useLocation, Location, useNavigate } from "react-router-dom";
// import {Location} from ""

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface statepProps {
    style: string;
    id: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginEditorDetail = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const [styleDetailList, setStyleDetailList] = useState(ChinaStyleDetailList);
    const navigate = useNavigate();
    const location: Location = useLocation();
    const state = location.state as statepProps;
    // const state = (location.state as statepProps) || { style: "中国风", id: "01" };
    useEffect(() => {
        if (state.style === "中国风") setStyleDetailList(ChinaStyleDetailList);
        if (state.style === "游戏风") setStyleDetailList(gameStyleDetailList);
        if (state.style === "科技风") setStyleDetailList(tecStyleDetailList);
    }, [state.style]);
    useEffect(() => {
        setSelectedImg(state.id);
    }, [state]);
    const [selectedImg, setSelectedImg] = useState(style.id);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    const handleClickImg = (id: string) => {
        setSelectedImg(id);
    };
    const handleBackToEditor = () => {
        navigate("/plugin-editor", { state: { style: state.style } });
    };

    const handleSelectPreviousImg = () => {
        let previousImg: string = (Number(selectedImg) - 1).toString();

        if (previousImg === "0") {
            previousImg = styleDetailList.length.toString();
        }
        if (Number(previousImg) > 0 && Number(previousImg) < 10) {
            previousImg = "0" + previousImg;
        }

        setSelectedImg(previousImg);
    };
    const handleSelectNextImg = () => {
        let NextImg: string = (Number(selectedImg) + 1).toString();

        if (Number(NextImg) > styleDetailList.length) {
            NextImg = "1";
        }
        if (Number(NextImg) > 0 && Number(NextImg) < 10) {
            NextImg = "0" + NextImg;
        }
        setSelectedImg(NextImg);
    };
    const selectionList = document.querySelector(".pluginEditorDetail_selectionList");

    const handleSlidForward = () => {
        if (selectionList) {
            selectionList.scrollLeft = selectionList.scrollLeft + selectionList.clientWidth;
        }
    };
    const handleSlidBack = () => {
        if (selectionList) {
            selectionList.scrollLeft = selectionList.scrollLeft - selectionList.clientWidth;
        }
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */

    return (
        <div className={style.PluginEditorDetail_container}>
            <div className={style.pluginEditorDetail_header}>
                <div className={style.pluginEditorDetail_logo}>dataReachable</div>
            </div>
            <div className={style.pluginEditorDetail_main}>
                <div className={style.pluginEditorDetail_breadCrumbs}>
                    <div className={style.pluginEditorDetail_home} onClick={handleBackToEditor}>
                        <Icon type="home" />
                        插件主题风格 /
                    </div>
                    <div className={style.pluginEditorDetail_currentName}>
                        {state.style}
                        <span className={style.pluginEditorDetail_currentNameDetail}>
                            {styleDetailList.map((item) => {
                                if (selectedImg === item.id) {
                                    return item.title;
                                }
                            })}
                        </span>
                    </div>
                </div>
                <div className={style.pluginEditorDetail_imgShowContainer}>
                    <div
                        className={style.pluginEditorDetail_leftButton}
                        onClick={handleSelectPreviousImg}
                    >
                        <Icon type="open" />
                    </div>
                    <div className={style.pluginEditorDetail_imgShowBox}>
                        {styleDetailList.map((item) => {
                            if (item.id === selectedImg) {
                                return <img src={item.cover} key={item.id} />;
                            }
                        })}
                    </div>
                    <div
                        className={style.pluginEditorDetail_rightButton}
                        onClick={handleSelectNextImg}
                    >
                        <Icon type="open" />
                    </div>
                </div>
            </div>
            <div className={style.pluginEditorDetail_footer}>
                <div className={style.pluginEditorDetail_selectionListBox}>
                    <div
                        className={style.pluginEditorDetail_leftSelectionButton}
                        onClick={handleSlidBack}
                    >
                        <Icon type="open" />
                    </div>
                    <div className={style.pluginEditorDetail_selectionList}>
                        {/* <ScrollComponent bodyClassName={style.pluginEditorDetail_ScrollComponent}> */}
                        {styleDetailList.map((item) => {
                            return item.id === selectedImg ? (
                                <div
                                    className={getClassNames({
                                        [style.pluginEditorDetail_selectionImg]: true,
                                        [style.pluginEditorDetail_selectionImg_active]: true,
                                    })}
                                    key={item.id}
                                >
                                    <img
                                        src={item.cover}
                                        className={style.pluginEditorDetail_img_active}
                                        onClick={() => handleClickImg(item.id)}
                                        // id="highLightImg"
                                    />
                                </div>
                            ) : (
                                <div
                                    className={getClassNames({
                                        [style.pluginEditorDetail_selectionImg]: true,
                                        [style.pluginEditorDetail_selectionImg_active]: false,
                                    })}
                                    key={item.id}
                                >
                                    <img
                                        src={item.cover}
                                        className={style.pluginEditorDetail_Img}
                                        onClick={() => handleClickImg(item.id)}
                                    />
                                </div>
                            );
                        })}
                        {/* </ScrollComponent> */}
                    </div>
                    <div
                        className={style.pluginEditorDetail_rightSelectionButton}
                        onClick={handleSlidForward}
                    >
                        <Icon type="open" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PluginEditorDetail;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
