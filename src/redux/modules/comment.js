import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

let url2 = "http://localhost:5000/comments"

export const getCommentIdAsync = createAsyncThunk( // 댓글 조회 , 찾기
    "comment/getTodosAsync",
    async (payload) => {
        const response = await axios.get(url2+`?boardsid=${payload}`)
        return response.data
})
export const postCommentIdAsync = createAsyncThunk( // 댓글 달기
    "comment/postTodosAsync",
    async (payload) => {
      parseInt(payload.boardsid)
        const response = await axios.post(url2,{
          boardsid:payload.boardsid,
          comment: payload.comment,
        })
        console.log(response)
        return response.data
})
export const updateCommentIdAsync = createAsyncThunk( // 댓글 수정
    "comment/postTodosAsync",
    async (payload) => {
        const response = await axios.patch(url2+`/${payload.id}`,{
          // boardsid:payload.boardsid,
          comment: payload.comment,
        })
        console.log(response.data)
        return response.data
})
export const deleteCommentIdAsync = createAsyncThunk( // 댓글 삭제
    "comment/deleteTodosAsync",
    async (payload) => {
        const response = await axios.delete(url2+`/${payload}`)
        return response,payload
})

const initialState = [{
}]

export const commentSlice = createSlice({
    name: "comment",
    initialState ,
    reducers: {
        increment:(state)=>{
            state.value +=1
        }
    },
    extraReducers:{
      [getCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data ! 호출")
        return payload
      },
      [postCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data 등록!")
      },
      [deleteCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data delete !")
      },
      [updateCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data update !")
      }
    }
  });
  
  export const { increment } = commentSlice.actions;
  export default commentSlice.reducer;