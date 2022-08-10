import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import {addnotice} from '../../redux/modules/notice';
import { getLoginAsync } from "../../redux/modules/login";
import Header from '../Header/Header'

function BoardWrite() {
  const dispatch = useDispatch();
  
  const [title,setTitle] = useState("");
  const [content,setCotent] = useState("");
  const titleControl = (e) =>{
    e.preventDefault();
    setTitle(e.target.value)
  }
  const contentControl = (e) =>{
    e.preventDefault();
    setCotent(e.target.value)
  }
  const submitCotent = (e) =>{    
    e.preventDefault();
    if(title==="" || content===""){
      alert("둘 다 작성해라..")
      return
      }
      dispatch(addnotice({
          title:title,
          content:content,
      }))
    setTitle("")
    setCotent("")
  }
  return (
    <>
      <Header/>
      <form className='board-Container'>
        <BorderTitle value = {title} onChange={titleControl} type= "text" placeholder = "제목을 입력해 주세요."/>
        <BorderContent value = {content} onChange={contentControl} type = "text" placeholder = "내용을 입력해 주세요."/>
        <Addbtn onClick={submitCotent} type="submit">게시글 추가</Addbtn>
      </form>
    </>
  )
}

export default BoardWrite


const BorderTitle = styled.input`
    width: 800px;
    height: 30px;
    margin: 40px auto;
    display: flex;
    border: 1px solid black;
`


const BorderContent = styled.input`
    width: 800px;
    height: 500px;
    margin: 0 auto;
    display: flex;
`

const Addbtn = styled.button`
    width: 90px;
    height: 30;
    margin: 20px auto;
    display: flex;
`