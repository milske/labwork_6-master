import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import pizza from '../assets/pizza.jpg'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY});
            setIntroSeen(seen.value === 'true');
        }
        checkStorage();
    }, [])

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in..');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);

    };

    const finishInstro = async() => {
        console.log('FIN');
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true'});
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY});
    };

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishInstro} />
        ) : (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>PixelPioneers</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className='ion-padding'>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <div className="ion-text-center ion-padding">
                            <img src={pizza} alt='logo' width={'100%'} />
                        </div>
                        </IonCol>
                    </IonRow>

                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <IonCard>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                        <IonInput labelPlacement="floating" label="Email" type='email' placeholder="your email address"></IonInput>
                        <IonInput className="ion-margin-top" labelPlacement="floating" label="Password" type='password' placeholder="your password"></IonInput>
                        <IonButton type="submit" expand="block" className="ion-margin-top">
                            Login
                            <IonIcon icon={logInOutline} slot="end"></IonIcon>
                            </IonButton>
                        <IonButton routerLink="/register" color={'secondary'} type="button" expand="block" className="ion-margin-top">
                            Create a account
                            <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                            </IonButton>

                        <IonButton onClick={seeIntroAgain} fill='clear'size='small' color={'medium'} type="button" expand="block" className="ion-margin-top">
                            Watch intro
                        </IonButton>
                    </form>
                </IonCardContent>
               </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>
            <IonFooter>
                <IonToolbar className="ion-text-center">Make pictures gun again!</IonToolbar>
            </IonFooter>
        </IonPage>
        ) }
        </>
    );
};

export default Login;