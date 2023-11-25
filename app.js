
new Vue({
    el: "#app",
    data: {
        // имя
        lastName: '',
        status: '',
        // фамилия
        firstName: '',
        statusA: '',
        // отчество
         middleName: '',
       statusB: '',
        // день рожд
       dateBirth: '',
        statusM: '',
        // телефон
         phone: '',
        statusN: '',
        // пол
        gender: '',
        statusG: '',
        // группа
        selGroup: '',
        group: [
            {name: 'VIP'},
            {name: 'Проблемные'},
            {name: 'ОМС'},
        ],
        // доктор
        doctors: [
            {name: 'Иванов'},
            {name: 'Захаров'},
            {name: 'Чернышева'}
        ],
        selDoctor: '',
        // серия
        series: '',
        statusE: '',
        // не отпрв смс
        sendSMS: false,
        statusL: '',
        // индекс
        index: '',
        statusI: '',
        // страна
        statusC: '',
        country: '',
        // регион
        statusR: '',
        region: '',
        // город
        statusP: '',
        city: '',
        // улица
        statusX: '',
        street: '',
        // дом
        statusH: '',
        house: '',
        // тип докум
        documents: [
            {name: 'Паспорт'},
            {name: 'Свидет. о рождении'},
            {name: 'Вод. удостоверение'}
        ],
        selDocument: '',
        // номер паспорта
        statusW: '',
        number: '',
        // кем выдан
        statusQ: '',
        whoIssied: '',
        // дата паспорт
        statusF: '',
        datePassport: '',
        showModal:'false',
    },

    methods: {
        
        // проверить фамилию
        saveLastName: function(){
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.lastName) == true  || regExpSymbol.test(this.lastName) == true){
               
                this.status = '✔️'
            }
            else if(regExpEngl.test(this.lastName) == true){
                this.lastName = ''
                this.status = '!Допустимо выражение только на кириллице'
            } 
                else{
                    this.status = '!Ошибка в форме'
                   
                } 
        },
        // проверить имя
        saveFirstName: function(){
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.firstName) == true || regExpSymbol.test(this.firstName) == true){

                this.statusA = '✔️'


            }
            else if(regExpEngl.test(this.firstName) == true){
                this.firstName = ''
                this.statusA = '!Допустимо выражение только на кириллице'
            } 
                else{
                    this.statusA = '!Ошибка в форме'
                   
                } 
        },
        // проверить отчество
        saveMiddleName: function(){
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+а-яА-ЯЁё]+$");
            if(regExp.test(this.middleName) == true || regExpSymbol.test(this.middleName) == true ){
 
                this.statusB = '✔️'
            }
           else if(regExpEngl.test(this.middleName) == true){
            this.middleName = ''
                this.statusB = '!Допустимо выражение только на кириллице'
            } 
                else{
                    this.statusB = '!Ошибка в форме'
                   
                }
            
        },
        // сохранит дату рождения
        saveDate: function(){
            let date = this.dateBirth.split('-').reverse('').join('.').split('.')
            if(date[2] > 2023 || date[2] < 1900 ){
                this.statusM = 'Некоректная дата'
            }
            else{
                this.statusM = '✔️'
            }
            return date.join('.')
           // this.savePatient(this.dateBirth)
            
        },
        // проверить и записать номер
        savePhone: function(){
            let regExp = new RegExp("^[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}$");
            let regExpSmall = new RegExp("^[0-9]{0,3}[0-9]{0,3}[0-9]{0,2}[0-9]{1}$");
            let regExpBig = new RegExp("^[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{3,}$");
            if(regExp.test(this.phone) == true){

                this.statusN = '✔️'
               // this.savePatient()

           }
            if(regExpSmall.test(this.phone) == true){
                this.statusN= '!Не достаточно символов'
            }
            if(regExpBig.test(this.phone) == true){
                this.statusN = '!Слишком много символов'
            }
       },
    //    пол муж
       menCheck: function(){

            this.statusG = '✔️'
           // this.savePatient()
       },
    //    пол женский
        femaleCheck: function(){

        this.statusG = '✔️'
    
        },


        // не отправлять сообщения
        dontSendSMS: function(){

            this.statusL = '✔️'
           
        },

        // проверка индекс
        indexSave: function(){
            let regExp = new RegExp("^[0-9]{6}$");
            let regExpSmall = new RegExp("^[0-9]{1,5}$");
            let regExpBig = new RegExp("^[0-9]{7,}$");
            if(regExp.test(this.index) == true){

                this.statusI = '✔️'
               // this.savePatient()

           }
            if(regExpSmall.test(this.index) == true){
                this.statusI = '!Не достаточно символов'
            }
            if(regExpBig.test(this.index) == true){
                this.statusI = '!Слишком много символов'
            }
            
        },

        // страна
        countrySave: function(){
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.country) == true  || regExpSymbol.test(this.country) == true ){

                this.statusC = '✔️'
              //  this.savePatient(this.firstName)

            }
            else if(regExpEngl.test(this.country) == true){
                this.country = ''
                this.statusC = '!Допустимо выражение только на кириллице'
            } 
                else{
                    
                    this.statusC = '!Ошибка в форме'
                   
                } 
        },
        // область
        regionSave: function(){
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.region) == true || regExpSymbol.test(this.region) == true ){

                this.statusR = '✔️'
              //  this.savePatient(this.firstName)

            }
            else if(regExpEngl.test(this.region) == true){
                this.region = ''
                this.statusR = '!Допустимо выражение только на кириллице'
            } 
                else{
                    this.statusR = '!Ошибка в форме'
                   
                } 
        },
        // город
        citySave: function(){
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.city) == true || regExpSymbol.test(this.city) == true ){
 
                this.statusP = '✔️'

            }
            else if(regExpEngl.test(this.city) == true){
                this.city = ''
                this.statusP = '!Допустимо выражение только на кириллице'
            } 
                else{
                    this.statusP = '!Ошибка в форме'
                   
                } 
        },
        // улица
        streetSave: function(){
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExp = new RegExp("^[а-яА-ЯЁё]+$");
            let regExpSymbol = new RegExp("^[а-яА-ЯЁё]+\-[а-яА-ЯЁё]+$");
            if(regExp.test(this.street) == true || regExpSymbol.test(this.street) == true ){

                this.statusX = '✔️'

            }
            else if(regExpEngl.test(this.street) == true){
                this.street = ''
                this.statusX = '!Допустимо выражение только на кириллице'
            } 
            else{
                this.statusX = '!Ошибка в форме'
            }
        },

        // дом
        houseSave: function(){

                this.statusH = '✔️'
        },
        // серия
        seriesSave: function(){
            let regExp = new RegExp("^[0-9]{4}$");
            let regExpSmall = new RegExp("^[0-9]{1,3}$");
            let regExpBig = new RegExp("^[0-9]{5,}$");
            if(regExp.test(this.series) == true){

                this.statusE = '✔️'
            }
            if(regExpSmall.test(this.series) == true){
                this.statusE = '!Не достаточно символов'
            }
            if(regExpBig.test(this.series) == true){
                this.statusE = '!Слишком много символов'
            }
        },
        // номер
        numberSave: function(){
            let regExp = new RegExp("^[0-9]{6}$");
            let regExpSmall = new RegExp("^[0-9]{1,5}$");
            let regExpBig = new RegExp("^[0-9]{7,}$");
            if(regExp.test(this.number) == true){

                this.statusW = '✔️'
            }
            if(regExpSmall.test(this.number) == true){
                this.statusW = '!Не достаточно символов'
            }
            if(regExpBig.test(this.number) == true){
                this.statusW = '!Слишком много символов'
            }
        },
        // кем выдан
        whoIssiedSave: function(){
            let regExpEngl = new RegExp("^[a-zA-Z]");
            let regExp = new RegExp("^[а-яА-ЯЁё]{3,}\.");
            if(regExp.test(this.whoIssied) == true){

                this.statusQ = '✔️'
            }
            if(regExpEngl.test(this.whoIssied) == true){
            
                this.statusQ = '!Допустимо выражение только на кириллице'
            }
            
        },

        // последний в списке
        saveDatePassport: function(){
            let date = this.datePassport.split('-').reverse('').join('.').split('.')
            if(date[2] > 2023 || date[2] < 1900){
                this.statusF = 'Некоректная дата'
            }
            else{
                this.statusF = '✔️'
            }
            return date.join('.')
        },

        // Всеобщее сохранение 

        showModalWindow: function(){
        if(this.status =='✔️'&&this.statusA =='✔️' && this.statusM =='✔️'&&this.statusN =='✔️'&& this.selGroup!= '' && this.statusP =='✔️' && this.statusF =='✔️'){
            this.showModal = !this.showModal 
        }
            else{
                alert('Для начала заполните обязательные поля и исправьте все ошибки')
            }
            
        },

        cleanForm: function(){
            this.showModalWindow()
            location.reload()
        }
    }
})