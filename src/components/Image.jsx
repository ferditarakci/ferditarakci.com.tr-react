import { useContext } from 'react'
import AppContext from 'src/context/AppContext'
import styles from 'src/components/styles/image.module.scss'
import resume from 'src/data/resume.js'

const Image = () => {
	const { title, domain } = useContext(AppContext)
	const image = domain + '/assets/images/my.jpg'

	return (
		<figure className={styles.myPhoto}>
			<a href={domain} aria-label={title}>
				<img alt={title} src={image} width="600" height="600" loading="lazy" />
			</a>
			<a href={resume.link} title={resume.title} aria-label={resume.title} className={styles.resume} target="_blank" rel="noreferrer">
				<i className="fas fa-id-card"></i>
			</a>
		</figure>
	)
}

export default Image
