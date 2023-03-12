
import { BsFillFileEarmarkCheckFill,BsPlusCircle,BsFileEarmarkPersonFill } from "react-icons/bs";
import { MdInsertComment } from "react-icons/md";
import "./Card.css";
import { Avatar, AvatarGroup} from '@chakra-ui/react'


export default function Card({
    title,titleNo,tags1,tags2,tags3,addComment,comment,maxImage
}){


    return (
        <div className="cardContainer">
            <div className="cardFront" >
                <p>{title}</p>
                <div className="cardtop">
                    <BsFillFileEarmarkCheckFill className="searchSubIcons1" />
                   {titleNo}
                </div>
            </div>
            <div className="cardTag">
                <button className="btn1" >{tags1}</button>
                <button className="btn2">{tags2}</button>
                <button className="btn3">{tags3}</button>
            </div>
            <div className="cardFront">
                 <div className="avtarGroup1">
                    <AvatarGroup size='sm' max={maxImage}  >
                         <Avatar  name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                         <Avatar  name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                         <Avatar  name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                         <Avatar  name='Christian Nwamba' src='https://bit.ly/code-beast' />
                         <Avatar  name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>

                    <div className="addAvatar1">
                         <BsPlusCircle className="logoPlus1" />
                    </div>
               </div>
                <div className="cardtop">
                 <BsFileEarmarkPersonFill className="add1" />
                {addComment}
                <MdInsertComment className="comment1" />
                {comment}
                </div>
            </div>
        </div>
    )
}