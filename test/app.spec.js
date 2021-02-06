const {expect} = require('chai')
const supertest = require('supertest')
const app = require('../index')



describe('App', ()=>{
    
    it('GET /api responds with 200 containing "Hello World"', ()=> {
        return supertest(app)
           .get('/')
           .expect(404)
    })

    it('POST /signin if the user signs in successfully' , () => {
        let data = {email: "vudat@gmail.com" , password: "vietnamusa21r"}
        let expect= {"user":{"avatar":"http://127.0.0.1:8000/user/15/avatar-1609973341175-423546296.jpeg","id":15,"firstName":"Dat","lastName":"Vu","email":"vudat@gmail.com","gender":"male","createdAt":"2020-12-05T22:15:25.036Z","updatedAt":"2021-01-06T22:49:01.178Z"}}
        return supertest(app)
            .post('/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401)
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
            .post('/register')
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

