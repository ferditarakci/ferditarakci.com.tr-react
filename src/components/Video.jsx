import { useContext } from 'react'
import AppContext from 'src/context/AppContext'
import styles from 'src/components/styles/video.module.scss'

const Video = () => {
	const { domain } = useContext(AppContext)
	const video = domain + '/assets/video/frontend-developer.mp4'

	return (
		<video className={styles.bgVideo} preload="metadata" width="1920" height="1080" muted autoPlay loop playsInline>
			<source src={video} type="video/mp4" />
		</video>
	)
}

export default Video
