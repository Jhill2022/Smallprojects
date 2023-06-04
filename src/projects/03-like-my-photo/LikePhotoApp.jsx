import React, { useState } from 'react';
import Title from '../components/Title';
import {AiFillSmile, AiFillHeart,AiOutlineHeart, AiOutlineComment} from "react-icons/ai"
import doggy from "../03-like-my-photo/img/Black-Pug.jpg"


export default function LikePhotoApp() {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)

    const likeClicked = () => {
        if(!like){
            setLike(true)
            setCount( count + 1)
        }else{
            setLike(false)
            setCount( count - 1)
        }
    }
  return (
    <div className="container text-center">
      <Title text={'Like Photo App'} />
      <Title classes={'subtitle'} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: 'pointer' }}
        onDoubleClick={likeClicked}
      >
        <div className="card-header fs-xl">
            <AiFillSmile className='mr-2'/>
          <small>DogyDog</small>
        </div>
        <img src={doggy} alt="img" style={{height:"fit-content"}} />

        <div className="card-footer fs-xl d-flex" style={{justifyContent:"space-between"}}>
            <AiOutlineComment/>{like? <AiFillHeart className='text-danger' onClick={likeClicked}/> : <AiOutlineHeart onClick={likeClicked}/>}
        </div>
      </div>
    </div>
  );
}
