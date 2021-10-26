import "./addBoard.ts";


context('Create Trello Board', () => {

  it('creates a board usingthe addboard command', () => {

    cy
      .visit('/')
  
    cy.addBoard('new board')
  
  })

})

