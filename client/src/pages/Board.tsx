import { useEffect, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import auth from '../utils/auth';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const fetchTickets = async () => {
    try {
      const data = await retrieveTickets();
      setTickets(data);
    } catch (err) {
      console.error('Failed to retrieve tickets:', err);
      setError(true);
    }
  };

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loginCheck) {
      fetchTickets();
    }
  }, [loginCheck]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!loginCheck ? (
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Login to create & view tickets</h1>
        </div>
      ) : (
        <div className='board container mx-auto px-4 py-8'>
          <div className='flex justify-end mb-4'>
            <Link to='/create' className='btn btn-primary'>New Ticket</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {boardStates.map((status) => {
              const filteredTickets = tickets.filter(ticket => ticket.status === status);
              return (
                <Swimlane
                  title={status}
                  key={status}
                  tickets={filteredTickets}
                  deleteTicket={deleteTicket}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;