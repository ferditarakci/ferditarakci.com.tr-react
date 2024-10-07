import { createContext } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
	const { REACT_APP_MY_NAME: name, REACT_APP_TITLE: title, REACT_APP_DOMAIN: domain } = process.env

	const props = {
		name,
		title,
		domain,
	}

	return <AppContext.Provider value={props}>{children}</AppContext.Provider>
}

export { AppContextProvider }
export default AppContext
