import { useContext } from "react"
import AppContext from "../context/AppContext"
import styles from "./styles/text.module.scss"
import data from "../data/text";

const Text = () => {

	const { title, domain } = useContext(AppContext)

	return (
		<div className={styles.wrapper}>
			<h1><a href={domain} title={title} aria-label={title}>{data.name}</a></h1>
			<h2>{data.title}</h2>
			<p>{data.textLine1}</p>
			<p>{data.textLine2}</p>
			<p>{data.textLine3}</p>
		</div>
	)
}

export default Text