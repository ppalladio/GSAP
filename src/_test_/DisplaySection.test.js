import { screen,render } from "@testing-library/react"
import Jumbotron from "../Components/Jumbotron"



it.todo('this button should take you to the next section',()=>{
	render(<Jumbotron/>)
	const learnMoreBtn=screen.getByAltText(/learn-more/i)
	expect(learnMoreBtn).toBeInTheDocument()

})