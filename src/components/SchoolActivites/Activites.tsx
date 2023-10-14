import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Activites.css";
import { Row } from "react-bootstrap";

function srcset(image: any, size: any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Activites() {
  return (
    <div className="feed-div-main">
      <div className="feed-div-main2">
        <div className="feed-col">
          <div className="feed-h1">Event Clips</div>
          <div className="feed-h2">School Activities</div>
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            top: "15px",
            margin: "auto",
          }}
        >
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>

          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  className="img-class"
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Row>
      </div>
      <div className="feed-col2">
        <div className="feed-h1">School Event Clips</div>
        <div className="feed-h2">Latest Posts</div>
      </div>
      <div className="wet">
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                className="img-class"
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/02/10/school-uniform.jpg?quality=75&width=1200&auto=webp",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://static9.depositphotos.com/1037987/1188/i/950/depositphotos_11880191-stock-photo-teenage-student-answering-question-studying.jpg",
    title: "Burger",
  },
  {
    img: "https://static9.depositphotos.com/1037987/1188/i/950/depositphotos_11880191-stock-photo-teenage-student-answering-question-studying.jpg",
    title: "Camera",
  },
  {
    img: "https://static5.depositphotos.com/1037987/476/i/600/depositphotos_4761206-stock-photo-high-school-students-answering-question.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://image.shutterstock.com/image-photo/female-teacher-helping-pupil-using-260nw-779645455.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/175E3/production/_105851759_secschool2.jpg",
    title: "Basketball",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEvSjN99re2cvkd-WeYi3BmgqQ5M5l6fxx0e-jvPV5X5LDo0c1iGzwZMVZ7fzDLLo9vE&usqp=CAU",
    title: "Fern",
  },
  {
    img: "https://s37356.pcdn.co/wp-content/uploads/2021/03/literacyplanet-12-Lesson-Plans-for-Teaching-Writing.jpeg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/175E3/production/_105851759_secschool2.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://assets-global.website-files.com/5e8183b729502fe2fcbe10fe/5f74042fe620621e363e728c_owis-secondary.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/4/School-Bus-PNG-Image.png",
    title: "Bike",
    cols: 2,
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9WLYUPQ-g_iqtaTRexJJTeuU0rf8BSmJxG_-jBS5dNkxOdM2I_6XpiM77QrNBY6j-4Y&usqp=CAU",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeMPC0-uzpFRuea7H14BBU9lPdbyo7Hjj3mN-nHlyBoGUlvKYINlw7nihfuBimNe9lXY&usqp=CAU",
    title: "Burger",
  },
  {
    img: "https://www.wolfreton.co.uk/_site/data/files/images/slideshow/9E1BD60C8EA433FCB89B96C8C7D8C902.jpg",
    title: "Camera",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm7Wdhu4bWw4vLlTsWLMQlaeFgebZwISJqV46qBJ4lTCywWMttf-VF7SmNIVXsR5iTU8&usqp=CAU",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFHH_8SVeWm2iDuLMhMu2_LTQoPMK9Jdw3AXXTzJG6pokF84oRGAzzM0E1yaoqJIX3jo&usqp=CAU",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://collegefutures.org/wp-content/uploads/2020/01/istock-latina-graduate-hugging-father.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.innovadesigngroup.co.uk/wp-content/uploads/2015/05/Wing.jpg",
    title: "Basketball",
  },
  {
    img: "https://www.thoughtco.com/thmb/VQ7dJqhE5bDJ8S8Mbhb5qiyMXPU=/395x0/filters:no_upscale():max_bytes(150000):strip_icc()/classroomjettaproductionsdigitalvision-57bb30eb3df78c8763dec1d7.jpg",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Tomato basil",
  },
  {
    img: "https://collegefutures.org/wp-content/uploads/2020/01/istock-latina-graduate-hugging-father.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/4/School-Bus-PNG-Image.png",
    title: "Bike",
    cols: 2,
  },
];
