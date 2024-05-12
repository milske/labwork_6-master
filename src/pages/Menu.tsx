import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import PhotoGallery from "../components/PhotoGallery";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Link to="/"> Logout</Link>
      </IonContent>

      <IonContent>
        <PhotoGallery photos={photos} deletePhoto={deletePhoto} />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
