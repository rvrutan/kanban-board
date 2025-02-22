import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

interface SwimlaneProps {
  title: string;
  tickets: TicketData[];
  deleteTicket: (ticketId: number) => Promise<ApiMessage>
}

const Swimlane = ({ title, tickets, deleteTicket }: SwimlaneProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Todo':
        return 'bg-blue-100';
      case 'In Progress':
        return 'bg-yellow-100';
      case 'Done':
        return 'bg-green-100';
      default:
        return '';
    }
  };

  return (
    <div className={`swimlane p-4 rounded-lg ${getStatusClass(title)}`}>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='space-y-2'>
        {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            deleteTicket={deleteTicket}
          />
        ))}
      </div>
    </div>
  );
};

export default Swimlane;