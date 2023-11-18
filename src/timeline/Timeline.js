import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Razib",
      postImage:
        "https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/397589793_1837603720008959_2281907216158522338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBra6kZuUj04cpev9JwtTm4yK49BHGZYbjIrj0EcZlhtrnaBLB9d1t4BQGO2vP0yKsWsoSe4pBwNfmmOxG0ZC3&_nc_ohc=SWX6L6F1o60AX8_6inl&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDSzB4VrtY1uSxF_Ngw8_KxUoJjcog78hbQg8F4XgTuNQ&oe=655D00AA",
      likes: 437,
      timestamp: "1d",
    },
    {
      user: "Pronab",
      postImage:
        "https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/397603135_1837603270009004_5420160601919305594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHMIih9JAPYatO6VCI4AVV5L9ggzI-Abh0v2CDMj4BuHVJx7JMFB6eUTsc4rEi9bnc2CEXbZCUO3lxf3fl0kmfx&_nc_ohc=3qOkUBeew5QAX9nAtTd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfA7PcG0vi23zfmzgyRdO-L1wGYdNCxuPe0GRkQQM9CI-Q&oe=655DDC31",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Nayeem",
      postImage:
        "https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/397583461_1837603176675680_4967001064538339877_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwicixqpusJXuLymOI2iKtS0xMigZOL8VLTEyKBk4vxYlftUcYCgtBZciwVNDxDGLYCAiL7FoQFkCKakYBzg1H&_nc_ohc=nfcm7jwFjXYAX8Au3kT&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCbar5Oz4DYCNKsfoj8zpDXrXIveDVo8rFKIrtez-izlg&oe=655E830B",
      likes: 140,
      timestamp: "3d",
    },
    {
      user: "Shrabon",
      postImage:
        "https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/397586592_1837602996675698_5955142883306814351_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGeic4bUAfXfpPrdt-3LFtoxtbQTW5Tl53G1tBNblOXnXfle_IeglY77-xclsL7_0KpSlHxvsGhfpPSBlgp39dX&_nc_ohc=-FJaFxk37AUAX-GStiD&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCmcI4upeHGx3pUFscUUX-3p1k_lmsa1iV-RO6uHb81cw&oe=655D4CC3",
      likes: 144,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
