class SearchPage {

    private get searchField () {
        return $('#search-query-typeahead')
    }

    private get searchButton () {
        return $('.btn-block')
    }

    public async enterSearchText (text: string) {
        await (await this.searchField).setValue(text)
    }

    public async searchPageDidDisplay () {
        await (await this.searchField).waitForDisplayed()
    }


   
    public async clickOnSearch (){
        await (await this.searchButton).click()
    }

    public async searchResults (text: string){
        const searchSelector = "*=" + text
        await browser.waitUntil(async () => {
            const results = await $$(searchSelector)
            return results.length > 0
       })
        return $$(searchSelector) 
    }
}

export default new SearchPage()

