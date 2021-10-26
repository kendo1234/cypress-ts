const addBoardSpecificString = (input: 'new board' | 'my board') => {
    cy
      .get('[data-cy="create-board"]')
      .click();
  
    cy
      .get('[data-cy=new-board-input]')
      .type(`${input}{enter}`);
  }
  