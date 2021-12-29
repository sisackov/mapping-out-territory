/// <reference types="cypress" />
'use strict';

/**
 * Write the following "filtering" tests
 *
 * 1. Check that the "Active" filter in the bottom toolbar works
 * 2. Check that the "Completed" filter in the bottom toolbar works
 * 3. Check that the "All" Filter in the bottom toolbar works
 *
 */

describe('todo filtering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should filter to active todos', () => {
    cy.get('.new-todo').type('Clean room{enter}');
    cy.get('.new-todo').type('Wash dishes{enter}');
    cy.get('.new-todo').type('Do the laundry{enter}');

    cy.get('.todo-list li').should('have.length', 3);

    //checks the Wash dishes item
    cy.get('.todo-list li:nth-child(2) .toggle').click();

    //click the active filter
    cy.get('.filters li:nth-child(2) a').click();

    cy.get('.todo-list li').should('have.length', 2);
    cy.get('.todo-list li:nth-child(1) label').should('have.text', 'Clean room');
    cy.get('.todo-list li:nth-child(2) label').should('have.text', 'Do the laundry');
  });

  it('should filter to completed todos', () => {
    cy.get('.new-todo').type('Clean room{enter}');
    cy.get('.new-todo').type('Wash dishes{enter}');
    cy.get('.new-todo').type('Do the laundry{enter}');

    cy.get('.todo-list li').should('have.length', 3);

    //checks the Wash dishes item
    cy.get('.todo-list li:nth-child(2) .toggle').click();

    //click the completed filter
    cy.get('.filters li:nth-child(3) a').click();

    cy.get('.todo-list li').should('have.length', 1);
    cy.get('.todo-list li:nth-child(1) label').should('have.text', 'Wash dishes');
  });

  it('should filter to all todos', () => {
    cy.get('.new-todo').type('Clean room{enter}');
    cy.get('.new-todo').type('Wash dishes{enter}');
    cy.get('.new-todo').type('Do the laundry{enter}');

    cy.get('.todo-list li').should('have.length', 3);

    //checks the Wash dishes item
    cy.get('.todo-list li:nth-child(2) .toggle').click();

    //click the completed filter
    cy.get('.filters li:nth-child(3) a').click();
    cy.get('.todo-list li').should('have.length', 1);

    //click the all filter
    cy.get('.filters li:nth-child(1) a').click();
    cy.get('.todo-list li').should('have.length', 3);
  });
});
