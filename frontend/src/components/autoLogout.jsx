import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useLogout } from "../hooks/useLogout"

const AutoLogout = () => {
    const { logout } = useLogout()
    // Get the token from local storage
    useEffect(() => {
        const userString = localStorage.getItem('user');
        let token = null; // Deklarasikan token di sini agar dapat diakses di seluruh useEffect
        let currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam UNIX timestamp (detik) // Deklarasikan currentTime di sini agar dapat diakses di seluruh useEffect

        // Memeriksa apakah objek user ada di local storage
        if (userString) {
            // Jika objek user ada, Anda dapat mengonversinya menjadi objek JavaScript
            const user = JSON.parse(userString);

            // Kemudian, Anda dapat mengakses tokennya (asumsi token ada dalam objek user)
            token = user.token;

            // Sekarang, Anda memiliki token dan dapat menggunakannya sesuai kebutuhan
            console.log('Token:', token);
        } else {
            // Jika objek user tidak ada di local storage
            console.log('Objek user tidak ditemukan di local storage');
        }

        // Pastikan token ada sebelum melakukan dekode
        if (token) {
            const decodedToken = jwt_decode(token);
            console.log(decodedToken)

            // Memeriksa apakah properti "expiredin" ada dalam decodedToken
            if (decodedToken && decodedToken.exp) {
                const expiredInValue = decodedToken.exp



                // Menghitung waktu kedaluwarsa dalam UNIX timestamp





                if (currentTime >= expiredInValue) {
                    // Token sudah kedaluwarsa, lakukan auto logout menggunakan hooks useLogout
                    logout();
                    console.log("anda sudah logout")
                }
            } else {
                console.log("Properti 'expiredin' tidak ada dalam token atau token tidak valid.");
            }
        }
    }, []);


    return (
        <></>
    )
}

export default AutoLogout
