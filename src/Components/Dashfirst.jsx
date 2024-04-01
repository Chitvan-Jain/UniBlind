import React from "react";
import {
  Addpost,
  GoogleIcon,
  GroupChat,
  Proom,
  Vidchat,
} from "../assets/Icons";
import { useState } from "react";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useUserContext } from "../userContext";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashfirst = ({ username, isPostFormOpen, setIsPostFormOpen }) => {
  const { userId } = useUserContext();
  const navigate = useNavigate();

  // Logout Button
  const logoutButton = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <div className=" flex flex-row mt-[80px] font-medium text-white justify-center">
        <img
          src={GoogleIcon}
          alt="Event image"
          className="rounded-full w-[50px] h-[50px] mr-3"
        />
        <div className="ml-1 flex flex-col my-auto">
          <em className=" font-montserrat text-lg">{username}</em>
          <p className=" text-xs">BCA</p>
        </div>
      </div>
      {/*  */}
      <div className=" grad w-fit mx-auto mt-4 border-white border-2 rounded-lg mb-10">
        <div className=" glass py-4 px-8 rounded-lg">
          <p className="text-center text-2xl text-white font-semibold font-montserrat">
            UNIVERSITY
          </p>
        </div>
      </div>

      <div className=" flex flex-col border-2 border-white m-4 glass rounded-lg">
        <div className="flex flex-row mx-3 mt-3 ">
          <img
            src={GroupChat}
            alt="groupchat icon"
            className="mx-5  h-[60px] w-[60px]"
          />
          <p className=" text-white text-xl my-auto font-montserrat font-semibold text-left">
            Group Chat
          </p>
        </div>
        <div className="flex flex-row mx-3 mt-3 ">
          <img
            src={Proom}
            alt="groupchat icon"
            className="mx-5 h-[50px] w-[60px]"
          />
          <button
            onClick={() => {
              navigate("/channels");
            }}
            className=" text-white text-xl my-auto font-montserrat font-semibold text-left"
          >
            Channels
          </button>
        </div>
        <div className="flex flex-row mx-3 mt-3 ">
          <img
            src={Vidchat}
            alt="groupchat icon"
            className="mx-5 h-[50px] w-[60px]"
          />
          <p className=" text-white text-xl my-auto font-montserrat font-semibold text-left">
            Video Meetings
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/post");
            setIsPostFormOpen(true);
          }}
        >
          <div className="flex flex-row mx-3 mt-3 ">
            <img
              src={Addpost}
              alt="groupchat icon"
              className="mx-5 h-[50px] w-[60px]"
            />
            <p className=" text-white text-xl my-auto font-montserrat font-semibold text-left">
              Add Post
            </p>
          </div>
        </button>
        <br />
        <button
          onClick={logoutButton}
          className=" text-white font-medium py-2 px-5 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashfirst;
