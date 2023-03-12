import { FaPen } from "react-icons/fa";
import "./dashboard.css"
import { Avatar, AvatarGroup, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsPlusCircle, BsMicrosoft, BsThreeDots, BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { ImSearch } from "react-icons/im";
import { HiViewGridAdd } from "react-icons/hi";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdLock, MdOutlineKeyboardArrowDown, MdBubbleChart } from "react-icons/md";
import Card from "../cards/Card";
import Popup from "../NotificationPopup/Popup";
import { Fade, Slide } from "react-awesome-reveal";
import 'animate.css/animate.min.css';

const data1 = [
     {
          title: "Create calendar, chat and email app pages",
          titleNo: 1,
          tags1: "#Ul003",
          tags2: "Development",
          tags3: "Backlog",
          addComment: 2,
          comment: 2,
          maxImage: 4,

     },
     {
          title: "Product Design, Figma, Sketch (Software), Prototype",
          titleNo: 5,
          tags1: "#Ul008",
          tags2: "Assignments",
          tags3: "Backlog",
          addComment: 2,
          comment: 3,
          maxImage: 3,

     },
     {
          title: "Add authentication pages",
          titleNo: 1,
          tags1: "#FTC55",
          tags2: "Projects",
          tags3: "To Do",
          addComment: 1,
          comment: 1,
          maxImage: 0,

     },
     {
          title: "Product Design, Figma, Sketch (Software), Prototype",
          titleNo: 5,
          tags1: "#FTC56",
          tags2: "Development",
          tags3: "To Do",
          addComment: 2,
          comment: 3,
          maxImage: 1,

     },
     {
          title: "Model Answer",
          titleNo: 4,
          tags1: "#Ul007",
          tags2: "Design",
          tags3: "Backlog",
          addComment: 4,
          comment: 4,
          maxImage: 2,

     },
     {
          title: "Model Answer",
          titleNo: 4,
          tags1: "#Ul002",
          tags2: "Design",
          tags3: "To Do",
          addComment: 4,
          comment: 4,
          maxImage: 3,
          // image:[
          //      "https://bit.ly/sage-adebayo",
          //      "https://bit.ly/kent-c-dodds",
          //      "https://bit.ly/ryan-florence",
          //      "https://bit.ly/code-beast",
          //      "https://bit.ly/code-beast",
          // ]
     },
]

const Data = [
     {
          title: "Model Answer",
          titleNo: 4,
          tags1: "#Ul007",
          tags2: "Design",
          tags3: "Backlog",
          addComment: 4,
          comment: 4,
          maxImage: 2,

     },
     {
          title: "Model Answer",
          titleNo: 4,
          tags1: "#Ul002",
          tags2: "Design",
          tags3: "To Do",
          addComment: 4,
          comment: 4,
          maxImage: 3,

     },
     {
          title: "Create calendar, chat and email app pages",
          titleNo: 1,
          tags1: "#Ul003",
          tags2: "Development",
          tags3: "Backlog",
          addComment: 2,
          comment: 2,
          maxImage: 4,

     },
     {
          title: "Add authentication pages",
          titleNo: 1,
          tags1: "#FTC55",
          tags2: "Projects",
          tags3: "To Do",
          addComment: 1,
          comment: 1,
          maxImage: 0,

     },
     {
          title: "Product Design, Figma, Sketch (Software), Prototype",
          titleNo: 5,
          tags1: "#FTC56",
          tags2: "Development",
          tags3: "To Do",
          addComment: 2,
          comment: 3,
          maxImage: 1,

     },
     {
          title: "Product Design, Figma, Sketch (Software), Prototype",
          titleNo: 5,
          tags1: "#Ul008",
          tags2: "Assignments",
          tags3: "Backlog",
          addComment: 2,
          comment: 3,
          maxImage: 3,

     },
]

const Dashboard = () => {
     return (

          <div className="dashContainer" >

               <div className="dashboardBox">

                    {/* <Slide triggerOnce cascade direction="left" duration={1000} delay={500}> */}
                    <div className="animate__animated animate__flip" >
                         <div className="title">
                              <h3 >Task Boards</h3>
                              <FaPen className="titleLogo" />
                         </div>
                    </div>
                      
                    {/* </Slide> */}

                    <Slide triggerOnce cascade direction="left" duration={1000} delay={500}>
                         <div className="tabs">
                              <p>Timeline</p>
                              <p>Calendar</p>
                              <p>Dashboard</p>
                              <p>Progress</p>
                              <p>Forms</p>
                              <p>More</p>
                         </div>

                    </Slide>


                    <Slide triggerOnce cascade direction="right" duration={1000} delay={500}>

                         <div className="avtarGroup">
                              <AvatarGroup size='md' max={4}  >
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                   <Avatar width={"3rem"} borderRadius={"2rem"} name='Christian Nwamba' src='https://bit.ly/code-beast' />
                              </AvatarGroup>

                              <div className="addAvatar">
                                   <BsPlusCircle className="logoPlus" />
                              </div>
                         </div>
                    </Slide>


                    <Slide triggerOnce cascade direction="right" duration={1000} delay={500}>

                         <div className="boardRow">
                              <div className="btnBorder">

                                   <button>
                                        <BsMicrosoft className="boardIcons" />
                                        Board View
                                   </button>
                                   <button>
                                        <VscThreeBars className="boardIcons" />
                                        Board View
                                   </button>

                              </div>

                              <div className="lockBorder">
                                   <MdLock className="boardIcons" />
                                   Limited Access
                                   <MdOutlineKeyboardArrowDown className="boardIcons" />
                              </div>

                              <div>
                                   Owners
                                   <AiFillTwitterCircle className="boardIcons" />
                                   Twitter Team
                              </div>

                         </div>
                    </Slide>


                    <Slide triggerOnce cascade direction="left" duration={1000} delay={500}>

                         <div className="searchDiv">
                              <InputGroup className="searchBox" width={"26rem"}>
                                   <InputLeftElement
                                        pointerEvents='none'
                                        children={<ImSearch color='gray.300' />}
                                   />
                                   <Input className="inputSearch" type='tel' placeholder='Search Tasks' />
                              </InputGroup>

                              <div>
                                   <button>
                                        <BsFillFileEarmarkCheckFill className="searchSubIcons" />
                                   </button>
                                   <button>
                                        <BiMenuAltLeft className="searchSubIcons" />
                                   </button>

                                   <button>
                                        <BiMenuAltRight className="searchSubIcons" />
                                   </button>
                                   <button>
                                        <MdBubbleChart className="searchSubIcons" />
                                   </button>
                                   <button>
                                        <HiViewGridAdd className="searchSubIcons" />
                                   </button>

                              </div>
                         </div>
                    </Slide>



                    <div className="collectionBox">

                         <div className="cardDiv">
                              <div className="cardBlog" >
                                   <p>BlockLog Tasks <span>5</span> </p>
                                   <BsThreeDots className="boardIcons" />
                              </div>

                              <div className="animate__animated animate__rollIn" >
                         
                                   <div className="collection">
                                        {
                                             data1?.map((ele) =>
                                               <Fade cascade duration={1000} delay={500}>
                                                  
                                                            <Card
                                                                 title={ele.title}
                                                                 titleNo={ele.titleNo}
                                                                 tags1={ele.tags1}
                                                                 tags2={ele.tags2}
                                                                 tags3={ele.tags3}
                                                                 maxImage={ele.maxImage}
                                                                 addComment={ele.addComment}
                                                                 comment={ele.comment}
                                                                 btn={ele.btn}
                                                                 image={ele.image}

                                                            />
                                                  </Fade>
                                       
                                             )
                                        }
                                   </div>

                              </div>


                         </div>

                         <div className="cardDiv">
                              <div className="cardBlog" >
                                   <p>BlockLog Tasks <span>6</span> </p>
                                   <BsThreeDots className="boardIcons" />
                              </div>
 
                              <div className="animate__animated animate__rollIn" >
                                        <div className="collection">
                                             {
                                                  Data?.map((ele) =>

                                                  <Fade cascade duration={1000} delay={500}>
                                                  
                                                            <Card
                                                                 title={ele.title}
                                                                 titleNo={ele.titleNo}
                                                                 tags1={ele.tags1}
                                                                 tags2={ele.tags2}
                                                                 tags3={ele.tags3}
                                                                 maxImage={ele.maxImage}
                                                                 addComment={ele.addComment}
                                                                 comment={ele.comment}
                                                                 btn={ele.btn}
                                                                 image={ele.image}

                                                            />
                                                  </Fade>
                                        
                                                  )
                                             }
                                        </div>
                              </div>
                         </div>
                    </div>

               </div>
               {/* <Slide triggerOnce direction="right" duration={1000} cascade delay={500}> */}
                   
                    <div className="animate__animated animate__fadeInRightBig" >
                         <div className="dashboardLeft">

                              <div >
                                   <Popup />
                              </div>
                         </div>
                    </div>

               {/* </Slide> */}

          </div>

     )
};

export default Dashboard;
