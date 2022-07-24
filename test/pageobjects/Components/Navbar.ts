class Navbar {

    private get doctorSearchButton (){
        return $('*=Arztsuche')
    }

    public async clickOnDoctorSearch (){
        await (await this.doctorSearchButton).click()
     }

}

export default new Navbar()