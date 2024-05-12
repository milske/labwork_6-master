import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';
import pizza from '../assets/pizza.jpg'

const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={'success'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>Create Account</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent scrollY={false}>
            <IonGrid fixed>
                <IonRow class='ion-justify-content-center'>
                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <div className="ion-text-center ion-padding">
                        <img src={pizza} alt='logo' width={'100%'} />
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid fixed>
                <IonRow class='ion-justify-content-center'>
                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                    <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput labelPlacement="floating" label="Email" type='email' placeholder="your email address"></IonInput>
                            <IonInput className="ion-margin-top" labelPlacement="floating" label="Password" type='password' placeholder="your password"></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top">
                                Create my account
                            <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                    </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

           
        </IonContent>
        <IonFooter>
            <IonToolbar>Tooooool</IonToolbar>
        </IonFooter>
    </IonPage>
);
};

export default Register;