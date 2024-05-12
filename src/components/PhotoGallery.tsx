import {
  IonCard,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  useIonAlert,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import React from "react";
import { Photo } from "../types/Photo";

type Props = {
  photos: Photo[];
  deletePhoto: (fileName: string) => void;
};

const PhotoGallery: React.FC<Props> = ({ photos, deletePhoto }) => {
  const [displayAlert] = useIonAlert();

  const confirmDelete = (fileName: string) =>
    displayAlert({
      message: "Are you sure you want to delete this photo? ",
      buttons: [
        { text: "Cancel", role: "cancel" },
        { text: "OK", role: "confirm" },
      ],
      onDidDismiss: (e) => {
        if (e.detail.role === "cancel") return;
        deletePhoto(fileName);
      },
    });
  return (
    <IonGrid>
      <IonRow>
        {photos.map((photo, idx) => (
          <IonCol size="6" key={idx}>
            <IonCard>
              <IonFab vertical="bottom" horizontal="center">
                <IonFabButton
                  onClick={() => confirmDelete(photo.filePath)}
                  size="small"
                  color="light"
                >
                  <IonIcon icon={trash} color="danger"></IonIcon>
                </IonFabButton>
              </IonFab>

              <IonImg src={photo.webviewPath} />
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default PhotoGallery;
