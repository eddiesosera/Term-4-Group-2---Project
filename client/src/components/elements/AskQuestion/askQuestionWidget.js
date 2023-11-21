import React, { useEffect } from 'react';
import './askQuestionWidget.css';
import { useNavigate } from 'react-router-dom';
import { useLoggedInUser } from '../../util/UseContext/loggedInUserContext';
// import { useLoggedInUser } from '../../util/UseContext/loggedInUserContext';

export const AskQuestionWidget = () => {
    const { loggedInUser, setLoggedInUser } = useLoggedInUser();
    const navigateTo = useNavigate()
    const staticProfileImg = "https://ucarecdn.com/5017923c-b477-40bd-9d3d-31edcf95da54/-/preview/500x500/-/quality/smart_retina/-/format/auto/"

    useEffect(() => {
        // console.log(loggedInUser)
    }, [loggedInUser])

    return (
        <div className='askQuestionWidgetWrap' onClick={e => navigateTo('/question/create')}>
            <div className='askQuestionLeftContainer'>
                <div className='askQuestionUserContainer'>
                    {
                        !loggedInUser?.profileImage
                            ? <img className='askQuestionUserImg' src={staticProfileImg} />
                            : <img className='askQuestionUserImg' src={loggedInUser?.profileImage} />
                    }
                    <div className='askQuestionUserOnlineStatus' />
                </div>
                <div className='askQuestionInput text-normal'>What do you need help with?</div>
            </div>
            <span className="material-icons md-24 askQuestionMediaIcon">photo_library</span>
        </div>
    )
}
