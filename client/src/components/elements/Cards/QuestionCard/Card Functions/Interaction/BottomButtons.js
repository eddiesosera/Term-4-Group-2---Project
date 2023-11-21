import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import requestDataOf from '../../../../../util/DataRequests/fetchData';
import { useInteraction } from '../../../../../util/UI/interactionListener';
import { useNavigate } from 'react-router-dom';
import { useLoggedInUser, useToken } from '../../../../../util/UseContext/loggedInUserContext';
// import Snackbar from '@mui/joy/Snackbar/Snackbar';
import { Button, message } from 'antd';
import './bottomButtons.css'


export const BottomButtons = ({ question, index }) => {
    const pageLocation = useLocation()
    const navigatTo = useNavigate();
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const [saved, setSaved] = useState(false);
    const { token } = useToken();
    const { loggedInUser } = useLoggedInUser();

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';

    useEffect(() => {
        // Upvote State Check
        for (let i = 0; i < question?.topics?.length; i++) {
            if (question?.upVotes[i] === loggedInUser?._id) {
                setUpVote(prevUpVote => {
                    return true; // Update the state to the opposite value
                });
            }
        }
    }, [useInteraction(), upVote, downVote, saved, pageLocation, loggedInUser])

    // Button Functions
    const handleUpvote = () => {
        if (upVote) {
            // Remove the upvote
            const updatedUpVotes = question.upVotes.filter(userId => userId !== loggedInUser?._id);
            const upVotePayload = { upVotes: updatedUpVotes };
            updateUpVotes(upVotePayload);
        } else {
            // Add the upvote
            const updatedUpVotes = [...question.upVotes, loggedInUser?._id];
            const upVotePayload = { upVotes: updatedUpVotes };
            updateUpVotes(upVotePayload);
        }
    };

    const updateUpVotes = (upVotePayload) => {
        // Check if the user has already upvoted the question
        const userUpvotedIndex = question?.upVotes.indexOf(loggedInUser?._id);

        if (loggedInUser && localStorage.getItem('user')) {
            if (userUpvotedIndex !== -1) {
                // If the user has already upvoted, remove their upvote
                const updatedUpVotes = [...question.upVotes.slice(0, userUpvotedIndex), ...question.upVotes.slice(userUpvotedIndex + 1)];
                const upVotePayload = { upVotes: updatedUpVotes };

                // Update the question with the new upvotes array
                requestDataOf
                    .request("patch", `updateQuestion/${question?._id}`, token, upVotePayload)
                    .then((response) => {
                        setUpVote(false)
                        // Handle the response if necessary
                        // alert("Upvote removed");
                        openMessage('upvote')
                    })
                    .catch((error) => {
                        // Handle the error if necessary
                        console.error(error);
                    });
            } else {
                setUpVote(true)
                // If the user hasn't upvoted, add their upvote
                const updatedUpVotes = [...question.upVotes, loggedInUser?._id];
                const upVotePayload = { upVotes: updatedUpVotes };

                // Update the question with the new upvotes array
                requestDataOf
                    .request("patch", `updateQuestion/${question?._id}`, token, upVotePayload)
                    .then((response) => {
                        setUpVote(true)
                        // Handle the response if necessary
                        // alert("Upvoted");
                        openMessage('upvote')
                    })
                    .catch((error) => {
                        // Handle the error if necessary
                        console.error(error);
                    });
            }
        } else {
            alert('Sign in to Interact with Questions')
        }

    };

    const updateDownVotes = () => {
        // Check if the user has already downvoted the question
        const userDownvotedIndex = question?.downVotes.indexOf(loggedInUser?._id);

        if (userDownvotedIndex !== -1) {
            // If the user has already downvoted, remove their downvote
            const updatedDownVotes = [
                ...question.downVotes.slice(0, userDownvotedIndex),
                ...question.downVotes.slice(userDownvotedIndex + 1)
            ];

            const downVotePayload = { downVotes: updatedDownVotes };

            // Update the question with the new downvotes array
            requestDataOf
                .request("patch", `updateQuestion/${question?._id}`, token, downVotePayload)
                .then((response) => {
                    setDownVote(false);
                    // Handle the response if necessary
                    // alert("Downvote removed");
                    openMessage('downvote')
                })
                .catch((error) => {
                    // Handle the error if necessary
                    console.error(error);
                });
        } else {
            setDownVote(true);
            // If the user hasn't downvoted, add their downvote
            const updatedDownVotes = [...question.downVotes, loggedInUser?._id];
            const downVotePayload = { downVotes: updatedDownVotes };

            // Update the question with the new downvotes array
            requestDataOf
                .request("patch", `updateQuestion/${question?._id}`, token, downVotePayload)
                .then((response) => {
                    setDownVote(true);
                    // Handle the response if necessary
                    // alert("Downvoted");
                    openMessage('downvote')
                })
                .catch((error) => {
                    // Handle the error if necessary
                    console.error(error);
                });
        }
    };

    const updateSaved = () => {
        const userSavedQuestions = loggedInUser?.saved?.questions || [];
        const userSavedIndex = userSavedQuestions.indexOf(question?._id);

        if (userSavedIndex !== -1) {
            // If the user has already saved the question, remove it from saved
            userSavedQuestions.splice(userSavedIndex, 1);

            const userPayload = { saved: { questions: userSavedQuestions } };
            console.log('Remove Payload:', userPayload); // Add this line for debugging

            // Update the user object with the new saved array
            requestDataOf
                .request("patch", `updateUser/${loggedInUser._id}`, token, userPayload)
                .then((response) => {
                    const user = response?.data?.user;
                    console.log('Updated User:', user); // Add this line for debugging
                    localStorage.setItem('user', JSON.stringify(user));
                    // alert("Question removed from saved");
                    openMessage('saved');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // If the user hasn't saved the question, add it to saved
            const updatedSaved = [...userSavedQuestions, question?._id];
            const userPayload = { saved: { questions: updatedSaved } };
            console.log('Add Payload:', userPayload); // Add this line for debugging

            // Update the user object with the new saved array
            requestDataOf
                .request("patch", `updateUser/${loggedInUser._id}`, token, userPayload)
                .then((response) => {
                    const user = response?.data?.user;
                    console.log('Updated User:', user); // Add this line for debugging
                    localStorage.setItem('user', JSON.stringify(user));
                    // alert("Question saved");
                    openMessage('saved');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    // Card Bottom Interactions
    const cardBtmInteractions = [
        {
            name: 'upVote',
            icon: "arrow_circle_up",
            interactionCount: question?.upVotes?.length,
            upVote: upVote,
            action: updateUpVotes
        },
        {
            name: 'downVote',
            icon: "arrow_circle_down",
            interactionCount: question?.downVotes?.length,
            downVote: downVote,
            action: updateDownVotes
        },
        {
            name: 'comment',
            icon: "mode_comment",
            interactionCount: question?.answers?.length,
            action: () => { navigatTo(`/question/${question?._id}`) }
        }
    ];


    // Toaster
    const openMessage = (content) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            switch (content) {
                case 'upvote':
                    if (findUser('upVote')) {
                        messageApi.open({
                            key,
                            type: 'warning',
                            content: 'Upvote removed',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                            // className: 'messageChild'
                        });
                    } else {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Upvoted',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                        });
                    }

                case 'downvote':
                    if (findUser('downVote')) {
                        messageApi.open({
                            key,
                            type: 'warning',
                            content: 'Downvote removed',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                            // className: 'messageChild'
                        });
                    } else {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Downvoted',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                        });
                    }

                case 'saved':
                    if (findUser('saved')) {
                        messageApi.open({
                            key,
                            type: 'warning',
                            content: 'Removed from Saved',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                            // className: 'messageChild'
                        });
                    } else {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Saved to Collection',
                            duration: 2,
                            style: { background: 'none', fontFamily: 'Kanit' },
                        });
                    }

            }

        }, 1000);
    };


    // Finding user in buttons
    const findUser = (content) => {

        const abstractContentSearch = (contentType) => {
            console.log(loggedInUser, question)
            for (let i = 0; i < contentType?.length; i++) {
                console.log('colorMATCHED')
                if (contentType[i] === loggedInUser?._id) {
                    console.log('colorMATCHED')
                    return true;
                }
            }
        }

        switch (content) {
            case 'upVote':
                if (abstractContentSearch(question?.upVotes)) { return true };
            case 'downVote':
                if (abstractContentSearch(question?.downVotes)) { return true };
        }

    }

    // Function for changing button states
    const stateButton = (button) => {
        // if (loggedInUser && localStorage.getItem('user')) {
        switch (button) {
            case 'upVote':
                if (findUser('upVote')) { return '#b9ff28' }
                break;
            case 'downVote':
                if (findUser('downVote')) { return '#ff282d' }
                break;
            case 'comment':
                return '#ff8328'
        }
        // } else {
        //     // alert('Sign In to interact with questions')
        //     return null
        // }

    };


    return (
        <div className='questionBtmInteractionsWrap'>
            {contextHolder}
            <ul className='questionBtmRightInteraction'>
                {
                    cardBtmInteractions?.map((interaction, i) => {
                        return (
                            <li key={i} className='questionBtmRightInteractionItem'
                                onClick={interaction?.action}>
                                <span className={
                                    upVote && interaction?.name === "upvote" ? 'material-icons material-icons.md-36 icon cardIconUpVoted' :
                                        'material-icons material-icons.md-36 icon cardIcon'}
                                    style={{ color: stateButton(interaction?.name) }}
                                >
                                    {interaction?.icon}
                                </span>
                                <div className='questionBtmRightInteraction-metrics text-normal'>
                                    {interaction?.name === "downVote" && interaction?.interactionCount > 0 && "-"}
                                    {interaction?.name === "comment" && "Answer ("}
                                    <b>{interaction?.interactionCount}</b>
                                    {interaction?.name === "comment" && ")"}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='questionBtmRightInteractionItem'
                onClick={updateSaved}>
                <span className='material-icons material-icons.md-36 icon'>
                    {saved ? "bookmark_added" : "bookmark_add"}
                </span>
            </div>
        </div>
    )
}
