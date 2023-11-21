import React, { useEffect, useLayoutEffect, useState } from 'react';
import './cardOptions.css'
import { useInteraction } from '../../../../util/UI/interactionListener';
import requestDataOf from '../../../../util/DataRequests/fetchData';
import { useToken } from '../../../../util/UseContext/loggedInUserContext';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


export const CardOptions = ({ question, scope, state, user }) => {
    const navigateTo = useNavigate();
    let interactionState = useInteraction();
    const { token } = useToken();
    const [interaction, setInteraction] = useState('idle');
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [copyLinkStatus, setCopyLinkStatus] = useState(false)

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';


    useEffect(() => {
        copyLinkStatus && openMessage('copy-link')
    }, [copyLinkStatus])

    // Toaster
    const openMessage = (content) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            switch (content) {
                case 'copy-link':
                    messageApi.open({
                        key,
                        type: 'success',
                        content: 'Link to Question copied!',
                        duration: 2,
                        style: { background: 'none', fontFamily: 'Kanit' },
                    });
                    break;
                case 'report':
                    messageApi.open({
                        key,
                        type: 'success',
                        content: 'A report has beed logged',
                        duration: 2,
                        style: { background: 'none', fontFamily: 'Kanit' },
                        // className: 'messageChild'
                    });
                case 'delete':
                    messageApi.open({
                        key,
                        type: 'success',
                        content: `Question successfully deleted: ${question?.title}`,
                        duration: 2,
                        style: { background: 'none', fontFamily: 'Kanit' },
                        // className: 'messageChild'
                    });
            }

        }, 200);
    };

    const options = [
        {
            icon: "link",
            title: "Copy Link",
            function: () => {
                navigator.clipboard
                    .writeText("https://" + window.location.host + `/question/${question?._id}`)
                    .then(() => {
                        // alert('URL copied to clipboard');
                        // openMessage('copy-link')
                        setCopyLinkStatus(true);
                        setTimeout(() => {
                            setCopyLinkStatus(false);
                        }, 1500);
                    })
            },
            optionType: "public",
            code: 'normal',
            scope: "public"
        },
        {
            icon: "flag",
            title: "Report",
            function: () => { openMessage('report') },
            optionType: "public",
            code: 'normal',
            scope: "public"
        },
        {
            icon: "edit_note",
            title: "Update",
            function: () => {
                // alert(question?._id)
                navigateTo(`/question/update`)
                sessionStorage.setItem("update-question", JSON.stringify(question))
            },
            optionType: "private",
            code: 'action',
            scope: "private",
            border: true
        },
        {
            icon: "delete",
            title: "Delete",
            function: () => {
                requestDataOf.request("delete", `deleteQuestion/${question?._id}`, token, "")
                    .then(() => {
                        // alert("deleted: " + question?.title);
                        openMessage('delete')
                    })
            },
            optionType: "private",
            code: 'danger',
            scope: "private"
        }

    ];

    const returnOptions = () => {
        if (isOptionsVisible) {
            return (
                <div className='cardOptionsWrap'>
                    {/* <div className='optionsOverlay'></div> */}
                    <div className='cardOptionsContainer'>
                        {
                            options?.map((option, i) => {
                                if (scope === "private" || scope === option?.scope) {
                                    return (
                                        <div
                                            key={i}
                                            className={`cardOption ${option?.code === "danger" ? "danger" : option?.code === "action" && "action"}`}
                                            onClick={e => { option?.function(); setIsOptionsVisible(false) }}
                                        >
                                            <span key={i} className={`material-icons material-icons.md-18 optionIcon ${option?.code === "danger" ? "dangerIcon" : option?.code === "action" && "actionIcon"}`}>
                                                {option?.icon}
                                            </span>
                                            <div className='optionTitle'>{option?.title}</div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (<span className="material-icons" onClick={e => { setIsOptionsVisible(true) }}>
                more_horiz
            </span>)
        }
    };

    useEffect(() => {
        setInteraction(interactionState)
        interaction?.interactionState === "scroll" && setIsOptionsVisible(false)

    }, [isOptionsVisible, useInteraction(), copyLinkStatus]);


    return (
        // returnOptions()
        <div className='cardOptionsWrap'>
            {contextHolder}
            <div className='optionsOverlay'
                onClick={e => { state && state(false) }} />
            <div className='cardOptionsContainer'>
                {
                    options?.map((option, i) => {
                        if (scope === "private" || scope === option?.scope) {
                            return (
                                <div key={i} className={`cardOption ${option?.code === "danger" ? "danger" : option?.code === "action" && "action"}`} onClick={e => { option?.function(); setIsOptionsVisible(false); state && state(false) }}>
                                    <span key={i} className={`material-icons material-icons.md-18 optionIcon ${option?.code === "danger" ? "dangerIcon" : option?.code === "action" && "actionIcon"}`}>
                                        {option?.icon}
                                    </span>
                                    <div className='optionTitle'>{option?.title}</div>
                                </div>
                            )
                        } else if (user?.role === "admin" && option?.title === "Delete") {
                            return (
                                <div key={i} className={`cardOption ${option?.code === "danger" ? "danger" : option?.code === "action" && "action"}`} onClick={e => { setIsOptionsVisible(false); state && state(false); option?.function(); }}>
                                    <span key={i} className={`material-icons material-icons.md-18 optionIcon ${option?.code === "danger" ? "dangerIcon" : option?.code === "action" && "actionIcon"}`}>
                                        {option?.icon}
                                    </span>
                                    <div className='optionTitle'>{option?.title} as admin</div>
                                </div>
                            )
                        } else if (!scope && option?.title === "Copy Link" || option?.title === "Report") {
                            return (
                                <div key={i} className={`cardOption ${option?.code === "danger" ? "danger" : option?.code === "action" && "action"}`} onClick={e => { option?.function(); setIsOptionsVisible(false); state && state(false) }}>
                                    <span key={i} className={`material-icons material-icons.md-18 optionIcon ${option?.code === "danger" ? "dangerIcon" : option?.code === "action" && "actionIcon"}`}>
                                        {option?.icon}
                                    </span>
                                    <div className='optionTitle'>{option?.title}</div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
