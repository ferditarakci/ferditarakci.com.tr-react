import { createContext } from "react"

const AppContext = createContext()

const AppContextProvider = ({ children }) => {

	const name = process.env.REACT_APP_MY_NAME
	const title = process.env.REACT_APP_TITLE
	const domain = process.env.REACT_APP_DOMAIN

	const values = {
		name,
		title,
		domain
	}

	return (
		<AppContext.Provider value={values}>
			{children}
		</AppContext.Provider>
	)
}

export { AppContextProvider }
export default AppContext