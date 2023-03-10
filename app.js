const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                name: 'Michele',
                avatar: './img/avatar_1.webp',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },{
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },{
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
                ],},

                {
                name: 'Fabio',
                avatar: './img/avatar_2.webp',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],},

                {
                name: 'Samuele',
                avatar: './img/avatar_3.png',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                    }
                ],},

                {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],},

                {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.webp',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    }
                ],},

                {
                name: 'Claudia',
                avatar: './img/avatar_6.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novit???',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                ],},

                {
                name: 'Federico',
                avatar: './img/avatar_7.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                ],},

                {
                name: 'Davide',
                avatar: './img/avatar_8.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                    }
                ],}
            ],

            contactIndex: 0,
            newMex: '',
            lastIndex: 0,
            searchValue: '',
            numberMessageToRemove: 1,
        }
    },

    methods: {
        setCurrentIndex(index){
            this.contactIndex = index
        },

        receivedNewMex(){
            this.contacts[this.contactIndex].messages.push({date:'', message:'ok', status:'received'})
        },

        addMex(){
            this.contacts[this.contactIndex].messages.push({date:'', message:this.newMex, status:'sent'}),
            this.newMex = ''
            setTimeout(this.receivedNewMex, 1000)
        },

        mounted(){
            setTimeout(this.receivedNewMex, 1000)
        },

        setTime(date){
            let dateSplit = date.split(' ')[1].split(':')
            let hour = `${dateSplit[0]}:${dateSplit[1]}`
            return hour
        },

        removeMessage(messageIndex){
            this.contacts.splice(messageIndex, this.numberMessageToRemove)
        },

    },

    computed:{
        searchName(){
            if(this.searchValue.length > 0){
                //let newArray = this.contacts.filter(function(contact) {console.log(contact); return true})
                //return this.contacts.filter((contact) => contact.name.includes(this.searchValue))
                
                let newArray = []

                for(let key in this.contacts){
                    let contact = this.contacts[key]
                    let name = contact.name
            

                    //let firstCharValue = searchValue.charAt(0)
                    //let firstCharName = name.charAt(0)
                    
                    
                    if(name.toLowerCase().includes(this.searchValue)){
                        newArray.push(contact)
                    }

                    
                }
                return newArray
            }
            return this.contacts
        },

        lastItem() {
            //return this.contacts.this.messages[this.contactIndex.length - 1]
            return this.searchName[this.contactIndex].messages?.length - 1
        },
    }
}).mount('#app')
