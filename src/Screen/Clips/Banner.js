import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {

    const [image, setImage] = useState([]);
    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch('https://api.gyros.farm/api/AdminApi/BannerImage');
        const getUsers = await response.json();
        let temp = []
        let img = []
        // let d1 = ""

        temp.push(getUsers)
        setUsers(temp);




        temp.map( (getUsers,index) => {
            getUsers.BannerImageList.map((data)=>{
                img.push("https://api.gyros.farm/Images/" + data)
              })
            })



        setImage(img)
    }

    useEffect(() => {
        getUsers(users);
    }, []);


    return (
        <Carousel>
            {image.map((data, index) => {
                return (
                    <Carousel.Item className={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <img
                            className="d-block w-100"
                            src={data}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )

            })}
        </Carousel>
    );
}

export default Banner;