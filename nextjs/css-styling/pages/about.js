import styles from '@/styles/About.module.css'
import scss from '@/styles/About.module.scss'




export default function About(){
    
    return(
        <>
                <h2> About h2 global style</h2>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-success">Success</button>
                <h2 className={styles.highlight}>About css module</h2>
                <h2 className={scss.highlightscss}>About scss module</h2>



        </>
    )
}