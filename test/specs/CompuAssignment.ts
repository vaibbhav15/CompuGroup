import HomePage from '../pageobjects/HomePage'
import SearchPage from '../pageobjects/Searchpage'
import Navbar from '../pageobjects/Components/Navbar'



describe('CompuGroup Assignment', () => {
    before(async () => {
        await HomePage.visit()
        await HomePage.selectAcceptCookies()
    })

    it('Should load homepage and click search', async () => {
        
        await HomePage.mainPageDidDisplay()
        await Navbar.clickOnDoctorSearch()
        await SearchPage.searchPageDidDisplay()
    })

    it('Should enter name and check reults displayed', async () =>{
        await Navbar.clickOnDoctorSearch()
        const searchTerm = 'Peter Test'
        await SearchPage.enterSearchText(searchTerm)
        await SearchPage.clickOnSearch()
        const results = await SearchPage.searchResults(searchTerm)
        expect (results.length === 2)
        expect(await results[0].getText() === 'Dr.Peter Test')
        expect(await results[1].getText() === 'Dr.Peter Test ABD')   
    })  
})