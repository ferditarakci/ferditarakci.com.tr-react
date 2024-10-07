import { useState, useEffect, useContext } from 'react'
import AppContext from 'src/context/AppContext'
import styles from 'src/components/styles/socials.module.scss'
import platform, { wpLink } from 'src/data/platforms.js'

const Socials = () => {
	const { name } = useContext(AppContext)
	const [whatsapp, setWhatsapp] = useState(wpLink)

	const titleConvert = (title) => {
		return `${title}: ${name}`
	}

	useEffect(() => {
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/.exec(navigator.userAgent)
		if (isMobile) {
			setWhatsapp(whatsapp.replace(/(https:\/\/(web|api).whatsapp.com\/)/i, 'whatsapp://'))
		}
	}, [whatsapp])

	return (
		<div className={styles.wrapper}>
			<div>
				{platform.map(({ title, link, css_class, icon }) => (
					<a key={title} href={link} className={css_class} title={titleConvert(title)} aria-label={titleConvert(title)} target="_blank" rel="external noreferrer noopener">
						<i className={`fab ${icon}`}></i>
					</a>
				))}
			</div>
			<div>
				<a href={whatsapp} className="wp" title={titleConvert('WhatsApp')} aria-label={titleConvert('WhatsApp')} target="_blank" rel="external noreferrer noopener">
					<i className="fab fa-whatsapp"></i>
					<span>Bana Whatsapp'tan ulaşabilirsiniz!</span>
				</a>
			</div>
		</div>
	)
}

export default Socials
