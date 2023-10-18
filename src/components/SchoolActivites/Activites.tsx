import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Activites.css";
import { Row } from "react-bootstrap";
import pix1 from "../../assets/images/activity1.jpeg";
import pix2 from "../../assets/images/buildi.jpeg";
import pix3 from "../../assets/images/activity2.jpeg";
import pix4 from "../../assets/images/activity3.jpeg";
import pix5 from "../../assets/images/band.jpeg";
import pix6 from "../../assets/images/build.jpeg";
import pix7 from "../../assets/images/activity6.jpeg";
import pix8 from "../../assets/images/activity5.jpeg";
import pix9 from "../../assets/images/activity4.jpeg";
import pix10 from "../../assets/images/activity8.jpeg";
import pix11 from "../../assets/images/activity9.jpeg";
import pix12 from "../../assets/images/activity10.jpeg";
import pix13 from "../../assets/images/nurs.jpeg";
import pix14 from "../../assets/images/pri.jpeg";
import pix15 from "../../assets/images/activity1.jpeg";
import pix16 from "../../assets/images/pri.jpeg";
import pix17 from "../../assets/images/activity1.jpeg";
import pix18 from "../../assets/images/prim.jpeg";
import pix19 from "../../assets/images/activity1.jpeg";
import pix20 from "../../assets/images/pri2.jpeg";
import pix21 from "../../assets/images/assemble.jpeg";
import pix22 from "../../assets/images/secondary.jpeg";
import pix23 from "../../assets/images/activity1.jpeg";
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
    img: pix1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: pix2,
    title: "Burger",
  },
  {
    img: pix3,
    title: "Camera",
  },
  {
    img: pix4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: pix4,
    title: "Hats",
    cols: 2,
  },
  {
    img: pix5,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: pix6,
    title: "Basketball",
  },
  {
    img: pix7,
    title: "Fern",
  },
  {
    img: pix8,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: pix9,
    title: "Tomato basil",
  },
  {
    img: pix10,
    title: "Sea star",
  },
  {
    img: pix11,
    title: "Bike",
    cols: 2,
  },

  {
    img: pix12,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: pix13,
    title: "Burger",
  },
  {
    img: pix14,
    title: "Camera",
  },
  {
    img: pix15,
    title: "Coffee",
    cols: 2,
  },
  {
    img: pix16,
    title: "Hats",
    cols: 2,
  },
  {
    img: pix17,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: pix18,
    title: "Basketball",
  },
  {
    img: pix19,
    title: "Fern",
  },
  {
    img: pix20,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: pix21,
    title: "Tomato basil",
  },
  {
    img: pix22,
    title: "Sea star",
  },
  {
    img: pix23,
    title: "Bike",
    cols: 2,
  },
];
