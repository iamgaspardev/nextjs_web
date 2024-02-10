import Image from "next/image";
import styles from "./page.module.css";
import CarouselSlider from "@/components/carousel/carouselComp";
import ShotcutMain from "@/components/shotcutsmain/categorymain";
import Hotdeals from "@/components/hotdeal/hotdeal";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselSlider/>
      <ShotcutMain/>
      <Hotdeals/>
      <Hotdeals/>
      <Hotdeals/>
    </main>
  );
}
