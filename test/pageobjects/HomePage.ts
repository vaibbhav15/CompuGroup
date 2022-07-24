class HomePage {

    private get acceptCookies (){
        return $('.agree-consent--all')
    }

    private get searchBar (){
        return $('#searchInput')
    }

    public async visit() {
        await browser.url('https://demo.clickdoc.de/')
        await browser.maximizeWindow()
    }

    public async selectAcceptCookies(){
        await (await this.acceptCookies).click()
        
    }

    public async mainPageDidDisplay () {
        await (await this.searchBar).waitForDisplayed()
    }
}

export default new HomePage()