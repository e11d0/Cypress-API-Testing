///<reference types ='Cypress'/>

describe('HTTP EXAMPLE', () => {
    it('GET', () => {
        cy.request({
            method: "get",
            url: "https://httpbin.org/get",
        }).then((response) => {
            expect(response.body).have.property('url');
        })
    })
    it('POST', () => {
        cy.request({
            method: "POST",
            url: "https://httpbin.org/post",
            body: {
                "name": "Jao",
                "age": "22"
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                "age": "22",
                "name": "Jao"
            });
        })
    })
    it('Put request', () => {
        cy.request({
            method: "PUT",
            url: "https://httpbin.org/put",
            body: {
                "name": "Jao"
            }
        }).then((response) => {
            expect(response.body).to.have.property('json');
            expect(response.body.json).contains({
                "name": "Jao"
            })
        })
    })
    it('Patch Request', () => {
        cy.request({
            method: "PATCH",
            url: "https://httpbin.org/patch",
            body: {
                "name": "Jao"
            }
        }).then((response) => {
            expect(response.body).to.have.property('json');
            expect(response.body.json).contains({
                "name": "Jao"
            })
        })
    })
})