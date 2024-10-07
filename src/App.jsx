import { AppContextProvider } from './context/AppContext'
import Image from 'src/components/Image'
import Socials from 'src/components/Socials'
import Text from 'src/components/Text'
import Video from 'src/components/Video'

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
