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
    styleItemType,
} from "~/DefaultData/styleDetail";
import { useEffect, useState } from "react";
import { useLocation, Location, useNavigate } from "react-router-dom";

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface statepProps {
    style: string;
    index: number;
    styleOverviewList: styleItemType[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginEditorDetail = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const [styleDetailList, setStyleDetailList] = useState<Array<styleItemType | undefined>>();
    const navigate = useNavigate();
    const location: Location = useLocation();
    const state = location.state as statepProps;
    useEffect(() => {
        let showList: Array<styleItemType | undefined> = [];

        if (state.style === "中国风") {
            showList = state.styleOverviewList.map((item) => {
                return ChinaStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.styleOverviewList.map((item) => {
                      return ChinaStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : ChinaStyleDetailList;
            setStyleDetailList(showList);
        }

        if (state.style === "游戏风") {
            showList = state.styleOverviewList.map((item) => {
                return gameStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.styleOverviewList.map((item) => {
                      return gameStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : gameStyleDetailList;
            setStyleDetailList(showList);
        }
        if (state.style === "科技风") {
            showList = state.styleOverviewList.map((item) => {
                return tecStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.styleOverviewList.map((item) => {
                      return tecStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : tecStyleDetailList;
            setStyleDetailList(showList);
        }
    }, [state.style, state.styleOverviewList]);
    useEffect(() => {
        setSelectedImg(state.index);
    }, [state]);

    const [selectedImg, setSelectedImg] = useState(0);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    const handleClickImg = (index: number) => {
        setSelectedImg(index);
    };
    const handleBackToEditor = () => {
        navigate("/plugin-editor", { state: { style: state.style } });
    };

    const handleSelectPreviousImg = () => {
        // let currentIndex: number|undefined = styleDetailList?.indexOf(styleDetailList?.find(
        //     (item) => item?.id === state.id,
        // ));
        // setSelectedImg(styleDetailList[currentIndex]);
        // let previousImg: string = (Number(selectedImg) - 1).toString();
        // if (previousImg === "0") {
        //     previousImg = styleDetailList!.length.toString();
        // }
        // if (Number(previousImg) > 0 && Number(previousImg) < 10) {
        //     previousImg = "0" + previousImg;
        // }
        // setSelectedImg(previousImg);
        let previousImg = selectedImg - 1;
        if (previousImg === -1 && styleDetailList?.length) {
            previousImg = styleDetailList?.length - 1;
        }

        setSelectedImg(previousImg);
    };
    const handleSelectNextImg = () => {
        let previousImg = selectedImg + 1;
        if (styleDetailList?.length && previousImg === styleDetailList?.length) {
            previousImg = 0;
        }

        setSelectedImg(previousImg);
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
                {/* <div className={style.pluginEditorDetail_breadCrumbs}>
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
                </div> */}
                <div className={style.pluginEditorDetail_imgShowContainer}>
                    <div
                        className={style.pluginEditorDetail_leftButton}
                        onClick={handleSelectPreviousImg}
                    >
                        <Icon type="open" />
                    </div>
                    <div className={style.pluginEditorDetail_imgShowBox}>
                        {styleDetailList &&
                            styleDetailList.map((item, i) => {
                                if (i === selectedImg) {
                                    return (
                                        <div
                                            className={style.pluginEditorDetailPage_img}
                                            key={item?.id}
                                        >
                                            <div
                                                className={style.pluginEditorDetailHall_breadCrumbs}
                                            >
                                                <div
                                                    className={style.pluginEditorDetailHall_home}
                                                    onClick={handleBackToEditor}
                                                >
                                                    <Icon type="home" />
                                                    插件主题风格 /
                                                </div>
                                                <div
                                                    className={
                                                        style.pluginEditorDetailHall_currentName
                                                    }
                                                >
                                                    {state.style}
                                                    <span
                                                        className={
                                                            style.pluginEditorDetailHall_currentNameDetail
                                                        }
                                                    >
                                                        {styleDetailList &&
                                                            styleDetailList[selectedImg]?.title}
                                                    </span>
                                                </div>
                                            </div>
                                            <img src={item?.cover} />
                                        </div>
                                    );
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
                        {styleDetailList &&
                            styleDetailList.map((item, i) => {
                                return i === selectedImg ? (
                                    <div
                                        className={getClassNames({
                                            [style.pluginEditorDetail_selectionImg]: true,
                                            [style.pluginEditorDetail_selectionImg_active]: true,
                                        })}
                                        key={item?.id}
                                    >
                                        <img
                                            src={item?.cover}
                                            className={style.pluginEditorDetail_img_active}
                                            onClick={() => handleClickImg(i)}
                                            // id="highLightImg"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={getClassNames({
                                            [style.pluginEditorDetail_selectionImg]: true,
                                            [style.pluginEditorDetail_selectionImg_active]: false,
                                        })}
                                        key={item?.id}
                                    >
                                        <img
                                            // eslint-disable-next-line react-hooks/exhaustive-deps
                                            src={item?.cover}
                                            className={style.pluginEditorDetail_Img}
                                            onClick={() => handleClickImg(i)}
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
