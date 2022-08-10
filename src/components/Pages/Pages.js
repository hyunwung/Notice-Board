import React, { useState ,useEffect } from "react";
import Header from '../Header/Header'
import styled from 'styled-components'
import Comment from '../Comment/Comment'
import { useParams } from 'react-router-dom'
import { postCommentIdAsync ,getCommentIdAsync} from "../../redux/modules/comment";
import { useDispatch } from "react-redux";
import "./Pages.css";

function Pages() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const [comment,setComment] = useState("")

    const commentHandle = (e) => {
        setComment(e.target.value)
    }
    const addComment = (e) => {
        e.preventDefault();
        if (comment === ""){
            alert("댓글을 작성 해주세요.")
        }
        dispatch(
            postCommentIdAsync({
                boardsid:id,
                comment:comment
            })
        )
        setComment("")
    }
    useEffect(()=>{
        dispatch(getCommentIdAsync(id));
    },[comment])

  return (
    <div className="pages">  
        <Header/>
        <ContentBox>여기엔 내용이 들어갑니당~</ContentBox>
        <CommentContainer>
            <Comment id={id}></Comment>
            
        </CommentContainer>
        <div className="input-box">
            <CommentInput value = {comment} type= "text" onChange={commentHandle}/>
            <CommentBtn onClick={addComment} type="submit">댓글 추가</CommentBtn>
        </div>
        
    </div>
  )
}

export default Pages


const ContentBox = styled.div`
    width: 800px;
    height: 300px;
    margin: 40px auto;
    display: flex;
    border: 1px solid black;
`

const CommentContainer = styled.form`
    width: 800px;
    height: auto;
    margin: 20px auto;
`

const CommentBox = styled.div`
    width: 800px;
    height: 35px;
    margin: 20px auto;
    display: flex;
    border: 1px solid black;
`


const CommentInput = styled.input`
    width: 800px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    border: 1px solid black;
`

const CommentBtn =styled.button`
    width: 80px;
    height: 30px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`