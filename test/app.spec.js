const {expect} = require('chai')
const supertest = require('supertest')
const app = require('../index')



describe('App', ()=>{
    
    

    it('POST /signin if the user signs in successfully' , () => {
        let data = {"email": "vudat@gmail.com" , "password": "vietnamusa21a"}
        return supertest(app)
            .post('/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
    })

    it('POST /register create new user' , () => {
        let data = {
            "firstName": "Aloha",
            "lastName": "Hello",
            "email" : "vudat@gmail.com",
            "gender":"male",
            "password":"testing"
            
        }
        return supertest(app)
            .post('/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
    })

    it('POST /update update user profile' , () => {
        let data = {
            "firstName": "Aloha",
            "lastName": "Hello",
            "email" : "vudat@gmail.com",
            "gender":"female",
            "password":"vietnamusa21"
            
        }
        return supertest(app)
            .post('/update')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
    })

    it('GET /chats getting chats' , () => {
       
        return supertest(app)
           .get('/chats')
           .expect(401)
    })

    it('POST /chats/create create chats' , () => {
        let data = {
            "partnerId" : 13
        }
        return supertest(app)
            .post('/chats/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401)
    })
  
    it('GET /chats/message message pagination' , () => {
       
        return supertest(app)
            .get('/chats/messages?page=1&id=13')
            .expect(401)
    })

    // it('POST /leave-current-chat leave the chat' , () => {
       
    //     return supertest(app)
    //         .get('/chats/messages?page=1&id=13')
    //         .expect(401)
    // })
    

    it('DELETE /:id delete a chat' , () => {
        let data = {
            "partnerId" : 13
        }
        return supertest(app)
            .delete('/chats/3')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({"error":"Missing token!"})
    })

})

