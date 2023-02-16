/* eslint-disable import/no-unassigned-import */
import "./commands";
import test from "../../build/test.json";

Cypress.env("BACKEND_ADDRESS", test.BACKEND_ADDRESS);
Cypress.env("BASE_URL", test.BASE_URL);
