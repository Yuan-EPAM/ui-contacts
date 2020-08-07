import React from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";

import { view as Filter } from "../../filter";
import { view as Sidebar } from "../../sidebar";
import { view as Pagination } from "../../pagination/";

import "./style.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="header">
        <Filter />
      </div>

      <div className="content">
        <nav className="sidebar">
          <Sidebar />
        </nav>

        <main className="contact">
          <table className="contact-table">
            <ContactHeader />
            <ContactList />
          </table>

          <div className="pagination">
            <Pagination />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
