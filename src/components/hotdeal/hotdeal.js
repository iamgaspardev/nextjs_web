"use client";
import React, { useState, useEffect } from 'react';
import styles from './hotdeal.module.css';
import Service from '@/services/service';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Hotdeals = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const carouselData = new Service();
                const response = await carouselData.getDiscounts();
                setData(response.items);

            } catch (error) {
                console.error("Error fetching carousel data:", error);
            }
        };

        fetchData();
    }, []);
    console.log("data products---------------------", data)
    return (
        <div className={styles.outercontainer}>
            <div className={styles.leftcontainer}>
                <Typography sx={{ color: "black", fontSize: 20 }}>HOT DEAL</Typography>
                <Typography sx={{ color: "black", fontSize: 15 }}>[UP TO 34% OFF] HAPPY HOUR 리턴 가능</Typography>
            </div>
            <div className={styles.rightcontainer}>
                {data.map((item,index )=> (
                    <div className={styles.productcontainer} key={index}>
                    <Card sx={{ width: 300 ,minHeight:300}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={item.thumbnail?.uri}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{fontSize:16}} component="div">
                                   {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                ))}

            </div>
            {/*  */}

        </div>
    )
}
export default Hotdeals;