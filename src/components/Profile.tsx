import styles from "../styles/components/Profile.module.css";

export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/33704092?v=4" />
      <div>
        <strong>Lucas Romero</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}