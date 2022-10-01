import { AppContextProvider } from "./context/AppContext"
import Image from "./components/Image"
import Socials from "./components/Socials"
import Text from "./components/Text"
import Video from "./components/Video"

const App = () => {
	return (
		<AppContextProvider>
			<Video />
			<div>
				<Image />
				<Text />
				<Socials />
			</div>
		</AppContextProvider>
	)
}

export default App