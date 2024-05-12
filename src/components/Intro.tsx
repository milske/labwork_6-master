import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { Children } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import intro1 from '../assets/intro/intro1.jpg';
import intro2 from '../assets/intro/intro2.jpg';
import intro3 from '../assets/intro/intro3.jpg';
import './Intro.css';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {

    return (
        <Swiper>
            <SwiperSlide>
                <img src={intro1} alt='Intro 1' />
                <IonText>
                    <h3>Capture your moments</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={intro2} alt='Intro 2' />
                <IonText>
                    <h3>Relive your best moments</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={intro3} alt='Intro 3' />
                <IonText>
                    <h3>Start now with us!</h3>
                </IonText>
                <IonButton onClick={() => onFinish()}>Start</IonButton>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intro;