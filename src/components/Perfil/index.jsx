import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    // const { endereco, nome } = props;
    // const usuario = {
    //     nome: 'Bruno Coutinho',
    //     avatar: 'https://github.com/BCoutinho-95.png'
    // }
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;