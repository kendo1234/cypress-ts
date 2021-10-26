/**
 * Creates a new board
 * @param titles array of board names
 */

const addTodo = (titles: string[]) => {

    titles.forEach(title => {
  
      cy
        .get('[data-cy="create-board"]')
        .click();
  
      cy
        .get('[data-cy=new-board-input]')
        .type(`${title}{enter}`);
  
    })
  
  }
  