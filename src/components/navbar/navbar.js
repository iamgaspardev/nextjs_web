"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import { Typography, InputAdornment, Input, IconButton, Menu, MenuItem, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleMenu = (event) => {
        setMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftside}>
                <div className={styles.logo}>
                    <Typography sx={{ color: "#03fca5", fontSize: 30 }}>Testvalley</Typography>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <IconButton>
                        <MenuIcon sx={{ color: "#03fca5" }} />
                    </IconButton>
                </div>
                <div className={styles.logo}>
                    <Typography sx={{ color: "#03fca5", fontSize: 30 }}>카테고리</Typography>
                </div>
            </div>
            <div className={styles.searchBox}>
                <Input
                    className={styles.searchInput}
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
            <div className={styles.leftside}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <IconButton>
                        <FileDownloadIcon sx={{ color: "black" }} />
                    </IconButton>
                </div>
                <div>
                    <Typography sx={{ color: '#000' ,paddingTop:1}}>로그인 / 회원가입</Typography>
                </div>
            </div>
        </nav>

    );
}
