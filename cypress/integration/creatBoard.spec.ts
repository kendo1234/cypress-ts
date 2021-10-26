const addBoard = (input: string) => {
  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(`${input}{enter}`);
}

it('creating a board', () => {

  cy
    .visit('/')

  addBoard('new board')

})

  