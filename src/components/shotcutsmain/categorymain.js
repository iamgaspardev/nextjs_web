"use client";
import React, { useState ,useEffect} from 'react';
import styles from './category.module.css';
import Service from '@/services/service';
import { Typography } from '@mui/material';

const ShotcutMain=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const carouselData = new Service();
          const response = await carouselData.getCategories();
          setData(response); 
          
        } catch (error) {
          console.error("Error fetching carousel data:", error);
        }
      };
  
      fetchData();
    }, []);
return(
    <div className={styles.mainwrapper}> 
     {data.map((item,index )=> (
        <div className={styles.maincontainer} key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <Typography sx={{ color: "black", textAlign: 'center'}}>{item.title}</Typography>
        </div>
          ))}
      
    </div>
)
}
export default ShotcutMain;