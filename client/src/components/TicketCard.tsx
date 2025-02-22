import { Link } from 'react-router-dom';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import { MouseEventHandler } from 'react';

interface TicketCardProps {
  ticket: TicketData;
  deleteTicket: (ticketId: number) => Promise<ApiMessage>
}

const TicketCard = ({ ticket, deleteTicket }: TicketCardProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const ticketId = Number(event.currentTarget.value);
    if (!isNaN(ticketId)) {
      try {
        const data = await deleteTicket(ticketId);
        return data;
      } catch (error) {
        console.error('Failed to delete ticket:', error);
      }
    }
  };

  return (
    <div className='ticket-card card shadow-lg bg-white p-4'>
      <h3 className='text-lg font-bold'>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.assignedUser?.username}</p>
      <div className='flex space-x-4 mt-2'>
        <Link to='/edit' state={{ id: ticket.id }} className='btn btn-sm'>Edit</Link>
        <button className='btn btn-sm btn-error' value={String(ticket.id)} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TicketCard;