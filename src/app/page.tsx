import styles from "./page.module.css";
import { Camera, CameraResultType } from "@capacitor/camera";

export default function Home() {
  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });
      console.log(image);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Denis</h1>
      <h2>Dascha</h2>
      <h3>Denis</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci.
        Ipsum veritatis totam perferendis atque cum reprehenderit, deserunt
        fugit facilis. Corporis porro nemo illum. Consectetur dignissimos esse
        culpa unde sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
        sequi assumenda accusamus doloremque aspernatur animi perspiciatis,
        ducimus consequatur nemo pariatur facere aperiam officia? Minus ad
        commodi debitis facilis porro?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci.
        Ipsum veritatis totam perferendis atque cum reprehenderit, deserunt
        fugit facilis. Corporis porro nemo illum. Consectetur dignissimos esse
        culpa unde sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
        sequi assumenda accusamus doloremque aspernatur animi perspiciatis,
        ducimus consequatur nemo pariatur facere aperiam officia? Minus ad
        commodi debitis facilis porro?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci.
        Ipsum veritatis totam perferendis atque cum reprehenderit, deserunt
        fugit facilis. Corporis porro nemo illum. Consectetur dignissimos esse
        culpa unde sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
        sequi assumenda accusamus doloremque aspernatur animi perspiciatis,
        ducimus consequatur nemo pariatur facere aperiam officia? Minus ad
        commodi debitis facilis porro?
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci.
        Ipsum veritatis totam perferendis atque cum reprehenderit, deserunt
        fugit facilis. Corporis porro nemo illum. Consectetur dignissimos esse
        culpa unde sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
        sequi assumenda accusamus doloremque aspernatur animi perspiciatis,
        ducimus consequatur nemo pariatur facere aperiam officia? Minus ad
        commodi debitis facilis porro?
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci.
        Ipsum veritatis totam perferendis atque cum reprehenderit, deserunt
        fugit facilis. Corporis porro nemo illum. Consectetur dignissimos esse
        culpa unde sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
        sequi assumenda accusamus doloremque aspernatur animi perspiciatis,
        ducimus consequatur nemo pariatur facere aperiam officia? Minus ad
        commodi debitis facilis porro?
      </p>
    </main>
  );
}
