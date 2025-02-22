import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | undefined>();
  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTicket = async (ticketId: TicketData) => {
    try {
      const data = await retrieveTicket(ticketId.id);
      setTicket(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  };

  useEffect(() => {
    fetchTicket(state);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ticket && ticket.id !== null) {
      updateTicket(ticket.id, ticket);
      navigate('/');
    } else {
      console.error('Ticket data is undefined.');
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <div className="container max-w-lg mx-auto p-4 card bg-base-200 shadow-xl">
      {ticket ? (
        <form className="form space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold">Edit Ticket</h1>

          <div className="form-control">
            <label htmlFor="tName" className="label font-semibold">Ticket Name</label>
            <textarea
              id="tName"
              name="name"
              value={ticket.name || ''}
              onChange={handleTextAreaChange}
              className="textarea textarea-bordered"
            />
          </div>

          <div className="form-control">
            <label htmlFor="tStatus" className="label font-semibold">Ticket Status</label>
            <select
              name="status"
              id="tStatus"
              value={ticket.status || ''}
              onChange={handleChange}
              className="select select-bordered"
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="tDescription" className="label font-semibold">Ticket Description</label>
            <textarea
              id="tDescription"
              name="description"
              value={ticket.description || ''}
              onChange={handleTextAreaChange}
              className="textarea textarea-bordered"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      ) : (
        <div className="alert alert-error">
          Loading tickets...
        </div>
      )}
    </div>
  );
};

export default EditTicket;