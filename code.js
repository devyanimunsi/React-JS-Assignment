// Ticket.js
import React from 'react';

const Ticket = ({ ticket }) => 
{
  return (
    <div className={`ticket priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Assigned to: {ticket.assignedTo}</p>
    </div>
  );
};

export default Ticket;

// KanbanBoard.js
import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';

const KanbanBoard = ({ groupingOption }) => 
{
  const [tickets, setTickets] = useState([]);
  const [sortedByPriority, setSortedByPriority] = useState(false);
  const [sortedByTitle, setSortedByTitle] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    // Update 'tickets' state
  }, []);

  const groupAndSortTickets = () => {
    // Logic to group and sort tickets based on groupingOption, sortedByPriority, and sortedByTitle states
  };

  return (
    <div className="kanban-board">
      <button onClick={groupAndSortTickets}>Display</button>
      {/* Dropdown for selecting grouping option */}
      {/* Checkbox for sorting by priority */}
      {/* Checkbox for sorting by title */}
      <div className="tickets-container">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data)); // Update the tickets state with the fetched data
  }, []);
  useEffect(() => {
    // Load saved view state from localStorage and update states accordingly
  }, []);
